import React from "react";
import {
  FormControl,
  InputAdornment,
  Select,
  Stack,
  SxProps,
  Typography,
  MenuItem,
} from "@mui/material";
import { capitalizeFirstLetter } from "@/utils/string.utils";

interface Option {
  key: string | number;
  value: string | number;
  label: string;
}

export interface SelectProps {
  id: string;
  title?: string;
  value: string | number;
  options: Option[];
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  helperText?: string;
  selectStyle?: SxProps;
  titleStyle?: SxProps;
  endAdornment?: React.ReactNode;
  renderOption?: (option: Option) => React.ReactNode;
}

const CustomSelect: React.FC<SelectProps> = ({
  id,
  title = "",
  value,
  options,
  onChange,
  helperText = "",
  selectStyle,
  titleStyle,
  endAdornment,
  renderOption,
}) => {
  return (
    <Stack spacing={1}>
      {title && (
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            color: "#344054",
            ...titleStyle, // Allow overriding styles dynamically
          }}
        >
          {capitalizeFirstLetter(title)}
        </Typography>
      )}
      <FormControl fullWidth>
        <Select
          id={id}
          value={value}
          onChange={onChange}
          sx={selectStyle}
          inputProps={{
            endAdornment: endAdornment && (
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            ),
          }}
        >
          {options.map((option) =>
            renderOption ? (
              renderOption(option)
            ) : (
              <MenuItem key={option.key} value={option.value}>
                {option.label}
              </MenuItem>
            )
          )}
        </Select>
        {helperText && (
          <Typography
            sx={{ fontSize: "12px", color: "#667085", marginTop: "4px" }}
          >
            {helperText}
          </Typography>
        )}
      </FormControl>
    </Stack>
  );
};

export default CustomSelect;
