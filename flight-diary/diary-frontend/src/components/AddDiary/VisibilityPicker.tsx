import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Visibility } from "../../models/Diary";

interface VisiblityProps {
  checkedType: Visibility | undefined;
  onChangeVisibility: (value: Visibility, name: string) => void;
}

const VisibilityComponent = (props: VisiblityProps) => {
  const { checkedType, onChangeVisibility } = props;

  const comp = Object.values(Visibility).map((v) => {
    return (
      <FormControlLabel
        key={v}
        value={v}
        control={
          <Radio
            checked={v === checkedType}
            onChange={(e) =>
              onChangeVisibility(e.target.value as Visibility, "visibility")
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
        <FormLabel id="demo-row-radio-buttons-group-label">
          Visibility
        </FormLabel>
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

export default VisibilityComponent;
