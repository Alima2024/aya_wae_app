import React, { useState } from "react";
import {
  Autocomplete,
  Checkbox,
  Chip,
  IconButton,
  Stack,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { CaretDownICON } from "@/icons/teams";

type Option = {
  label: string;
  value: string | number;
};

interface Props {
  id?: string;
  name?: string;
  options?: Option[];
  title?: string;
  onChange?: (newValue: Option[]) => void;
  value?: Option[];
  containerStyle?: SxProps;
  selectStyle?: SxProps;
  disabled?: boolean;
  textTitleStyle?: SxProps;
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
}

export default function CustomAutocomplete({
  id,
  options = [],
  title,
  onChange,
  value = [],
  containerStyle,
  selectStyle,
  disabled = false,
  textTitleStyle,
  placeholder = "Select or add...",
  required = false,
}: Props) {
  const [localOptions, setLocalOptions] = useState<Option[]>(options);
  const [selectedValues, setSelectedValues] = useState<Option[]>(value);

  const handleAddOption = (inputValue: string) => {
    const newOption = { label: inputValue, value: inputValue };
    setLocalOptions((prev) => [...prev, newOption]);
    setSelectedValues((prev) => [...prev, newOption]);
    onChange?.([...selectedValues, newOption]);
  };

  const handleDeleteOption = (optionToDelete: Option) => {
    setLocalOptions((prev) =>
      prev.filter((option) => option.value !== optionToDelete.value)
    );
    setSelectedValues((prev) =>
      prev.filter((option) => option.value !== optionToDelete.value)
    );
    onChange?.(
      selectedValues.filter((option) => option.value !== optionToDelete.value)
    );
  };

  const handleChipDelete = (optionToRemove: Option) => {
    const updatedValues = selectedValues.filter(
      (option) => option.value !== optionToRemove.value
    );
    setSelectedValues(updatedValues);
    onChange?.(updatedValues);
  };

  return (
    <Stack spacing={1} sx={containerStyle}>
      {title && (
        <Typography sx={textTitleStyle} variant="body1">
          {title} {required && "*"}
        </Typography>
      )}
      <Autocomplete
        multiple
        id={id || "custom-autocomplete"}
        options={localOptions}
        IconComponent={CaretDownICON}
        disableCloseOnSelect
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        value={selectedValues}
        onChange={(event, newValue) => {
          setSelectedValues(newValue);
          onChange?.(newValue);
        }}
        disabled={disabled}
        sx={selectStyle}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              checked={selected}
              sx={{ marginRight: 1 }}
              onClick={(e) => e.stopPropagation()} // Prevents triggering selection
            />
            {option.label}
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation(); // Prevent dropdown from closing
                handleDeleteOption(option);
              }}
            ></IconButton>
          </li>
        )}
        renderTags={(selected, getTagProps) =>
          selected.map((option, index) => (
            <Chip
              key={option.value}
              label={option.label}
              {...getTagProps({ index })}
              onDelete={() => handleChipDelete(option)}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            // label={placeholder}
            placeholder={placeholder}
            onKeyDown={(event) => {
              if (
                event.key === "Enter" &&
                event.target.value &&
                !localOptions.find(
                  (option) => option.label === event.target.value
                )
              ) {
                handleAddOption(event.target.value);
                event.preventDefault();
              }
            }}
          />
        )}
      />
    </Stack>
  );
}
