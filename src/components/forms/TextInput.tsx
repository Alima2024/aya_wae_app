/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  capitalizeFirstLetter,
  formatNumber,
  remove_white_space,
} from "@/utils/string.utils";
import {
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
interface Props {
  title?: string;
  id?: string;
  name?: string;
  // eslint-disable-next-line no-unused-vars
  onBlur?: (ev: any) => any;
  touched?: unknown;
  errors?: any;
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (ev: any) => void;
  value?: string | number | null;
  containerStyle?: SxProps;
  startIconStyle?: SxProps;
  endIconStyle?: SxProps;
  inputStyle?: SxProps;
  showSearch?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  type?: string;
  defaultValue?: string;
  required?: boolean | null;
  onKeyDown?: (ev: any) => void;
  textTitleStyle?:SxProps
}

export default function TextInput({
  title,
  onChange,
  onBlur,
  value,
  name,
  endIcon,
  startIcon,
  containerStyle,
  inputStyle,
  startIconStyle,
  endIconStyle,
  placeholder,
  errors,
  type,
  defaultValue,
  disabled,
  onKeyDown,
  textTitleStyle,
  required = false,
}: Props) {
  return (
    <Stack gap={0.5} sx={{ ...containerStyle }}>
      {title && (
        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            ...textTitleStyle
          }}
          noWrap
        >
          {capitalizeFirstLetter(title)}
          {required ? (
            <span style={{ color: "#EF4444", fontSize: "20px" }}>*</span>
          ) : null}
        </Typography>
      )}
      <OutlinedInput
        fullWidth
        error={Boolean(errors?.[name as string])}
        id={name}
        type={type !== "number" ? type : undefined}
        value={isNaN(Number(value)) ? value : formatNumber(value + "")}
        defaultValue={defaultValue}
        name={name}
        onBlur={onBlur}
        onChange={(ev) => {
          const {
            target: { name, value },
          } = ev;
          onChange?.({
            target: {
              name,
              value: isNaN(Number(remove_white_space(value)))
                ? value
                : remove_white_space(value),
            },
          });
        }}
        startAdornment={
          startIcon ? (
            <InputAdornment
              position="start"
              sx={{
                ...startIconStyle,
              }}
            >
              {startIcon}
            </InputAdornment>
          ) : null
        }
        endAdornment={
          endIcon ? (
            <InputAdornment
              position="end"
              sx={{
                cursor: "pointer",
                height: "auto",
                ...endIconStyle,
              }}
            >
              {endIcon}
            </InputAdornment>
          ) : null
        }
        placeholder={capitalizeFirstLetter(placeholder ?? "")}
        disabled={disabled}
        sx={{ bgcolor: "background.paper",border:"0px solid #D0D5DD",borderRadius:"8px", ...inputStyle }}
        onKeyDown={onKeyDown}
      />

      {errors?.[name as string] && (
        <FormHelperText sx={{ color: "#DC2626", fontSize: 12 }}>
          {errors?.[name as string]}

        </FormHelperText>

      )}
    </Stack>
  );
}
