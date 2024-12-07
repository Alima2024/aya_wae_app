import React, { useState } from "react";
import {
  FormHelperText,
  Stack,
  SxProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { capitalizeFirstLetter } from "@/utils/string.utils";

interface Props {
  title?: string | null;
  country?: string;
  value?: string;
  name?: string;
  onChange?: (val: any) => void;
  rootStyle?: React.CSSProperties;
  titleStyle?: TypographyProps;
  phoneContainerStyle?: React.CSSProperties;
  errors?: any;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  icon?: React.ReactNode;
  textTitleStyle?: SxProps;
}

const CustomPhoneInput = ({
  title,
  onChange,
  value,
  name,
  rootStyle,
  titleStyle,
  errors,
  disabled,
  placeholder,
  icon,
  textTitleStyle,
  phoneContainerStyle,
  country = "cm", // Default to Cameroon
}: Props) => {
  const [borderColor, setBorderColor] = useState("#CED2DA");

  const onFocus = () => {
    setBorderColor("#8392A2");
  };
  const onBlur = () => {
    setBorderColor("#CED2DA");
  };

  return (
    <Stack sx={{ ...rootStyle }} gap={0.6}>
      {title ? (
        <Typography sx={{ ...textTitleStyle }}>
          {icon}
          <Typography
            component="span"
            variant="body1"
            sx={{
              color: "text.primary",
              ...titleStyle,
            }}
          >
            {capitalizeFirstLetter(title)}
          </Typography>
        </Typography>
      ) : null}

      <PhoneInput
        onBlur={onBlur}
        onFocus={onFocus}
        country={country.toLowerCase()}
        value={value || ""}
        placeholder={placeholder ?? "-- -- --"}
        containerStyle={{
          width: "100%",
          marginTop: "6px",
          border: "none",
          height: 40,
          ...phoneContainerStyle,
        }}
        inputStyle={{
          width: "100%",
          height: "100%",
          color: "#292D32",
          borderRadius: "8px",
          overflow: "hidden",
          borderColor: borderColor,
        }}
        buttonStyle={{
          borderColor: borderColor,
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",

          borderRightWidth: 0,
          backgroundColor: "#fff",
        }}
        // dropdownStyle={{
        //   height: 400,
        // }}
        disabled={disabled}
        onChange={(phone : string, country : any) => {
          onChange?.({ target: { name, value: phone, country } });
        }}
      />

      {errors?.[name as string] && (
        <FormHelperText sx={{ color: "#DC2626", fontSize: 12 }}>
          {errors?.[name as string]}
        </FormHelperText>
      )}
    </Stack>
  );
};

export default CustomPhoneInput;
