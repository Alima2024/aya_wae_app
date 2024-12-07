/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";

import PhoneInput from "react-phone-input-2";

import {
  FormHelperText,
  Stack,
  Typography,
  TypographyProps,
} from "@mui/material";

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
}

const CustomMobileMoneyAccount = ({
  title,
  onChange,
  country = "CM",
  value,
  name,
  rootStyle,
  titleStyle,
  phoneContainerStyle,
  errors,
  disabled,
  required,
  placeholder,
  ...rest
}: Props) => {
  const [borderColor, setBorderColor] = useState("#CED2DA");

  const onFocus = () => {
    setBorderColor("#8392A2");
  };
  const onBlur = () => {
    setBorderColor("#CED2DA");
  };
  return (
    <Stack sx={{ minWidth: "230px", ...rootStyle }}>
      {title ? (
        <Typography
          sx={{
            color: "#344051",
            fontSize: "14px",

            ...titleStyle,
          }}
        >
          {title} {required ? <span>(obligatoire)</span> : null}{" "}
        </Typography>
      ) : null}
      <PhoneInput
        onFocus={onFocus}
        onBlur={onBlur}
        country={country.toLowerCase()}
        value={value || ""}
        placeholder={placeholder}
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
        onChange={(phone: string, country: any) =>
          onChange?.({ target: { name, value: phone, country } })
        }
        disabled={disabled}
        {...rest}
      />
      {errors?.[name as string] && (
        <FormHelperText sx={{ color: "#DC2626", fontSize: 12 }}>
          {errors?.[name as string]}
        </FormHelperText>
      )}
    </Stack>
  );
};

export default CustomMobileMoneyAccount;
