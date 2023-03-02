import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { TextField } from "@mui/material";

import { Dayjs } from "dayjs";

interface DateProps {
  dateValue: Dayjs | null;
  onChangeDate: (value: any, name: string) => void;
}

const DateComponent = (props: DateProps) => {
  const { dateValue, onChangeDate } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date"
          value={dateValue}
          onChange={(newValue) => {
            if (newValue) {
              onChangeDate(newValue?.format("MM/DD/YYYY"), "date");
            }
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default DateComponent;
