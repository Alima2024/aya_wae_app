import { DownloadICON } from "@/icons/blacklist";
import { Button } from "@mui/material";
import React from "react";
interface Props {
  title: string;
  onClick?: () => void;
}

const CustomButton = ({ title , onClick}: Props) => {
  return (
    <Button
      variant="contained"
      startIcon={<DownloadICON />}
      color="info"
      sx={{ color: "#0052B4" }}
      onClick={onClick}
      fullWidth
    >
      {title}
    </Button>
  );
};

export default CustomButton;
