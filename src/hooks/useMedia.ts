import { useMediaQuery } from "@mui/material";

export default function useMedia() {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  return {
    isSmallDevice: !lgUp,
  };
}
