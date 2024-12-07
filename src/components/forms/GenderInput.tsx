import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { capitalizeFirstLetter } from "@/utils/string.utils";

export default function GenderInput({
  value,
  onChange,
  name,
}: {
  value?: string;
  name?: string;
  onChange?: (ev: any) => void;
}) {
  return (
    <FormControl sx={{ gap: 1 }}>
      <FormLabel
        sx={{ color: "text.primary" }}
        id="demo-row-radio-buttons-group-label"
      >
        {" "}
        {capitalizeFirstLetter("gender")}{" "}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        value={value}
        onChange={onChange}
        name={name}
      >
        <FormControlLabel
          value="FEMALE"
          control={<Radio />}
          label={capitalizeFirstLetter("female")}
        />
        <FormControlLabel
          value="MALE"
          control={<Radio />}
          label={capitalizeFirstLetter("male")}
        />
      </RadioGroup>
    </FormControl>
  );
}
