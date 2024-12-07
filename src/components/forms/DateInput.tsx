import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from "dayjs";
import { Stack, FormHelperText, InputLabel, SxProps, styled, IconButton } from "@mui/material";

import "dayjs/locale/fr";
import { capitalizeFirstLetter } from "@/utils/string.utils";
import { CalendarIcon } from "@/icons/transaction";

export default function DateInput({
  value,
  name,
  minDate,
  maxDate,
  onChange,
  title,
  errors,
  required,
  containerStyle,
  disabled = false,
  textTitleStyle,
  pickerIcon,
  format,
  timePicker
}: {
  value?: any;
  required?: boolean;
  title?: string;
  minDate?: any;
  maxDate?: any;
  name?: string;
  onChange?: (val: any) => void;
  disabled?: boolean;
  errors?: any;
  containerStyle?: React.CSSProperties;
  textTitleStyle?:SxProps,
  pickerIcon?: React.ElementType;
  format?:string
  timePicker?:boolean
}) {
  return (
    <Stack spacing={1} sx={{ flexGrow: 1, ...containerStyle }}>
      {title && (
        <InputLabel htmlFor={name} sx={{ color: "text.primary", fontSize: 14,...textTitleStyle }}>
          {capitalizeFirstLetter(title)}
          {required ? (
            <span style={{ color: "#EF4444", fontSize: "20px" }}>*</span>
          ) : null}
        </InputLabel>
      )}
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
        {
          timePicker?  <TimePicker
          sx={{ width: "100%", bgcolor: "background.paper",}}
          value={value ? dayjs(value) : null}
      
          localeText={{
            fieldMonthPlaceholder: () => "MM",
            fieldDayPlaceholder: () => "DD",
            fieldYearPlaceholder: () => "YYYY",
          }}
          onChange={(ev) =>
            onChange?.({ target: { name, value: dayjs(ev).toDate() } })
          }
          disabled={disabled}
        
          slots={{
            openPickerIcon: pickerIcon ||CalendarIcon, 
          }}
          slotProps={{
          
            textField: {
              focused: true,
              color: 'secondary',
            
              
            },
          }}
          
        />:  <DatePicker
        sx={{ width: "100%", bgcolor: "background.paper",}}
        value={value ? dayjs(value) : null}
        format={ format ||"DD/MM/YYYY"}
        localeText={{
          fieldMonthPlaceholder: () => "MM",
          fieldDayPlaceholder: () => "DD",
          fieldYearPlaceholder: () => "YYYY",
        }}
        onChange={(ev) =>
          onChange?.({ target: { name, value: dayjs(ev).toDate() } })
        }
        disabled={disabled}
        minDate={minDate ? dayjs(minDate) : undefined}
        maxDate={maxDate ? dayjs(maxDate) : undefined}
        slots={{
          openPickerIcon: pickerIcon ||CalendarIcon, 
        }}
        slotProps={{
        
          textField: {
            focused: true,
            color: 'secondary',
          
            
          },
        }}
        
      />
        }
        
      </LocalizationProvider>
      {errors?.[name as string] && (
        <FormHelperText sx={{ color: "#DC2626", fontSize: 12 }}>
          {errors?.[name as string]}
        </FormHelperText>
      )}
    </Stack>
  );
  
}

