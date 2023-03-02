import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { DiaryEntry } from "../../models/Diary";

interface Props {
  diaries: DiaryEntry[] | null;
}

const DiaryList = (props: Props) => {
  const { diaries } = props;

  const comp = diaries ? (
    diaries.map((diary) => {
      return (
        <div key={diary.id}>
          <ListItem>
            <ListItemText
              primary={diary.date}
              secondary={
                <React.Fragment>
                  Visibility:{diary.visibility} <br /> Weather:{diary.weather}
                  <br /> Comment: {diary.comment}
                </React.Fragment>
              }
            ></ListItemText>
          </ListItem>
          <Divider component="li" />
        </div>
      );
    })
  ) : (
    <>no diaries</>
  );

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {comp}
    </List>
  );
};

export default DiaryList;
