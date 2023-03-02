import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";

import dayjs from "dayjs";

import React from "react";
import { NewDiaryEntry } from "../../models/Diary";
import DatePicker from "./DatePicker";
import VisibilityComponent from "./VisibilityPicker";
import WeatherPicker from "./WeatherPicker";
import Comment from "./Comment";

interface Props {
  newEntryState: NewDiaryEntry | undefined;
  add: () => void;
  setNewEntryState: (value: any, name: string) => void;
}

const AddDiary = (props: Props) => {
  const { add, newEntryState, setNewEntryState } = props;

  const canAdd = (): boolean => {
    if (newEntryState !== undefined) {
      const allHasValues = Object.values(newEntryState).every(
        (x) => x !== null && x !== ""
      );
      if (allHasValues) {
        return false;
      }
    }
    return true;
  };
  console.log(newEntryState);
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        padding="5px"
      >
        <h1>Add new entry</h1>
        <DatePicker
          onChangeDate={setNewEntryState}
          dateValue={dayjs(newEntryState?.date, "MM:DD:YYYY")}
        />
        <VisibilityComponent
          checkedType={newEntryState?.visibility}
          onChangeVisibility={setNewEntryState}
        />
        <WeatherPicker
          checkedType={newEntryState?.weather}
          onChangeWeather={setNewEntryState}
        />
        <Comment
          comment={newEntryState?.comment}
          onChangeComment={setNewEntryState}
        />
        <Button
          disabled={canAdd()}
          onClick={() => add()}
          variant="contained"
          style={{ width: 200, marginTop: "10px" }}
        >
          Add
        </Button>
      </Box>
    </>
  );
};

export default AddDiary;
