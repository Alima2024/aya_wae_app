"use client";
/* eslint-disable react/display-name */
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormHelperText, SxProps } from "@mui/material";
import { ReactNode } from "react";
import { capitalizeFirstLetter } from "@/utils/string.utils";
import { CaretDownICON } from "@/icons/withdrawals";

type Item = Record<string, any>;

interface Props {
  items: Item[];
  keyValue?: string;
  keyLabel?: string;
  title?: string;
  id?: string;
  name?: string;
  onBlur?: (ev: any) => any;
  touched?: any;
  errors?: any;
  placeholder?: string;
  required?: boolean | null;
  // eslint-disable-next-line no-unused-vars
  onChange?: (ev: any) => void;
  value?: string | null;
  containerStyle?: SxProps;
  selectStyle?: SxProps;
  disabled?: boolean;
  textTitleStyle?: SxProps;
  icon?: ReactNode;
}

export default function Dropdown({
  title,
  name,
  id,
  items = [],
  keyValue = "key",
  keyLabel = "label",
  onChange,
  onBlur,
  value,
  containerStyle,
  placeholder,
  errors,
  selectStyle,
  required,
  disabled,
  textTitleStyle,
}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange?.(event);
  };

  return (
    <Stack sx={{ flexGrow: 1, ...containerStyle }} spacing={0.5}>
      {title && (
        <InputLabel
          htmlFor={name}
          sx={{
            color: "text.primary",
            fontSize: 14,
            textWrap: "nowrap",
            ...textTitleStyle,
          }}
        >
          {capitalizeFirstLetter(title)}
          {required ? (
            <span style={{ color: "#EF4444", fontSize: "20px" }}>*</span>
          ) : null}{" "}
        </InputLabel>
      )}
      <Select
        labelId="demo-simple-select-label"
        id={id || "demo-simple-select"}
        error={Boolean(errors?.[name as string])}
        name={name}
        value={value || ""}
        fullWidth
        label={placeholder}
        onChange={handleChange}
        onBlur={onBlur}
        IconComponent={CaretDownICON}
        sx={{
          bgcolor: "background.paper",
          borderRadius: "8px",
          paddingRight: 0,
          ...selectStyle,
        }}
        MenuProps={{
          PaperProps: {
            sx: { bgcolor: "background.paper" },
          },

          sx: {
            "& .MuiPaper-root": {
              zIndex: 50000, // Ajustez selon votre application
            },
          },
        }}
      
        disabled={disabled}
      >
        {items?.map((item) => (
          <MenuItem key={item[keyValue]} value={item[keyValue]}>
            {capitalizeFirstLetter(item[keyLabel])}
          </MenuItem>
        ))}
      </Select>

      {errors?.[name as string] && (
        <FormHelperText sx={{ color: "#DC2626", fontSize: 12 }}>
          {errors?.[name as string]}
        </FormHelperText>
      )}
    </Stack>
  );
}
