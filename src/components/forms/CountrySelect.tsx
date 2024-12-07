"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Image from "next/image";
import countryList from "react-select-country-list";
import { FormHelperText, InputLabel, Stack, type SxProps } from "@mui/material";
import { capitalizeFirstLetter } from "@/utils/string.utils";
import useColors from "@/theme/useColors";
import { IconArrowDown } from "@tabler/icons-react";

interface Props {
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
}

export default function CountrySelect({
  title,
  name,
  onChange,
  value,
  containerStyle,
  errors,
  required,
  disabled,
}: Props) {
  const { text } = useColors();
  const countrieslist = React.useMemo(() => countryList().getData(), []);

  const handleChange = (ev: any | null) => {
    // console.log({ ev });
    onChange?.({ target: { name, ...ev } });
  };

  const country = React.useMemo(
    () => countrieslist.find((country) => country.value === value),
    [countrieslist, value]
  );

  return (
    <Stack sx={{ flexGrow: 1, ...containerStyle }} spacing={1}>
      {title && (
        <InputLabel htmlFor={name} sx={{ color: "text.primary", fontSize: 14 }}>
          {capitalizeFirstLetter(title)}{" "}
          {required ? (
            <span style={{ color: "#EF4444", fontSize: "20px" }}>*</span>
          ) : null}{" "}
        </InputLabel>
      )}
      <Autocomplete
        id={name}
        value={country}
        fullWidth
        onChange={(_, ev) => handleChange(ev as any)}
        popupIcon={<IconArrowDown fill={text.primary} />}
        disabled={disabled}
        options={countrieslist}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => {
          const { ...optionProps } = props;

          return (
            <Box
              component="li"
              sx={{
                "& > img": { mr: 2, flexShrink: 0 },
              }}
              {...optionProps}
            >
              <Image
                loading="lazy"
                width={20}
                height={20}
                src={`https://flagcdn.com/w20/${option.value.toLowerCase()}.png`}
                alt=""
              />
              {option.label}
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
              name,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      {errors?.[name as string] && (
        <FormHelperText sx={{ color: "#DC2626", fontSize: 12 }}>
          {errors?.[name as string]}
        </FormHelperText>
      )}
    </Stack>
  );
}
