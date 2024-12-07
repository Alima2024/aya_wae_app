"use client";
import { capitalizeFirstLetter } from "@/utils/string.utils";
import { InputAdornment, OutlinedInput, SxProps } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";

export default function Search({
  value,
  placeholder,
  onSearch,
  sx,
}: {
  value?: string;
  placeholder?: string;
  filterSection?: (onClose: () => void) => any;
  showFilter?: boolean;
  onSearch?: (val: string) => void;
  sx?: SxProps | React.CSSProperties;
  endIconStyle?: SxProps;
  isFiltered?: boolean;
}) {
  return (
    <OutlinedInput
      fullWidth
      value={value}
      size="small"
      sx={{
        ...sx,
        bgcolor: "background.paper",
        height: 38,
        borderRadius: 1,
      }}
      onChange={(e) => {
        onSearch?.(e.target.value || "");
      }}
      startAdornment={
        <InputAdornment position="start">
          <IconSearch />
        </InputAdornment>
      }
      placeholder={capitalizeFirstLetter(placeholder ?? "search a patner by name")}
    />
  );
}
