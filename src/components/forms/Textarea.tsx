"use client";

import { fontFamily } from "@/theme/font";
import useColors from "@/theme/useColors";
import { capitalizeFirstLetter } from "@/utils/string.utils";
import { FormHelperText, Stack, SxProps, Typography } from "@mui/material";

interface Props {
  title?: string;
  id?: string;
  name?: string;
  // eslint-disable-next-line no-unused-vars
  onBlur?: (ev: any) => any;
  touched?: any;
  errors?: any;
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (ev: any) => void;
  value?: string | number | null;
  containerStyle?: SxProps;
  showSearch?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  type?: string;
  required?: boolean;
  inputStyle?: React.CSSProperties;
  textTitleStyle?:SxProps
}

export default function Textarea({
  title,
  onChange,
  onBlur,
  value,
  name,
  containerStyle,
  placeholder,
  errors,
  touched,
  inputStyle,
  disabled,
  required = false,
  textTitleStyle
}: Props) {
  const { background, text } = useColors();
  return (
    <Stack spacing={0.5} sx={{ ...containerStyle }}>
      {title ? (
        <Typography sx={{   fontFamily: fontFamily,
          fontWeight: "500",
          fontSize: "14px",
          color: "#344054",
          ...textTitleStyle
          }}>
          {" "}
          {capitalizeFirstLetter(title)}{" "}
          {required ? <span style={{ color: "red" }}> * </span> : null}{" "}
        </Typography>
      ) : null}
      <textarea
        rows={2}
        style={{
          outline: "none important",
          padding: "8px",
          border: "1px solid #D0D5DD",
          // borderColor: text.primary + 50,
          borderRadius: "8px",
          color: text.primary,
          fontSize: 14,
          fontWeight: 500,
          backgroundColor: background.paper,
          fontFamily: fontFamily,
          ...inputStyle,
        }}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        value={value as any}
      />
      {touched?.[name as string] && errors?.[name as string] && (
        <FormHelperText error id="helper-text-firstname-signup">
          {errors?.[name as string]}
        </FormHelperText>
      )}
    </Stack>
  );
}
