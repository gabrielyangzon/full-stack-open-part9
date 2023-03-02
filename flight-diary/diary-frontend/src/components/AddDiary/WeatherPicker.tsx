import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Weather } from "../../models/Diary";

interface WeatherProps {
  checkedType: Weather | undefined;
  onChangeWeather: (value: Weather, name: string) => void;
}

const WeatherPicker = (props: WeatherProps) => {
  const { checkedType, onChangeWeather } = props;

  const comp = Object.values(Weather).map((v) => {
    return (
      <FormControlLabel
        key={v}
        value={v}
        control={
          <Radio
            checked={v === checkedType}
            onChange={(e) =>
              onChangeWeather(e.target.value as Weather, "weather")
            }
          />
        }
        label={v.toUpperCase()}
      />
    );
  });

  return (
    <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Weather</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {comp}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default WeatherPicker;
