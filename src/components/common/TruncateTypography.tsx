import React from "react";
import { Typography, type TypographyProps } from "@mui/material";

interface TruncateTypographyProps extends TypographyProps {
  lineClamp?: number; // Par défaut 2 lignes, mais configurable
}

const TruncateTypography: React.FC<TruncateTypographyProps> = ({
  children,
  lineClamp = 2,
  sx,
  ...props
}) => {
  return (
    <Typography
      {...props}
      sx={{
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        WebkitLineClamp: lineClamp,
        textOverflow: "ellipsis",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default TruncateTypography;
