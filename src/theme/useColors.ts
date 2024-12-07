import { useTheme } from "@mui/material";

export default function useColors() {
  const { palette } = useTheme();
  return palette;
}
