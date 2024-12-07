import { capitalizeFirstLetter } from "@/utils/string.utils";
import { Stack, Typography, type SxProps } from "@mui/material";
import type { ReactNode } from "react";

export default function TitleValue({
  containerStyle,
  title,
  value,
  titleStyle,
  valueStyle,
}: {
  containerStyle?: SxProps;
  titleStyle?: SxProps;
  valueStyle?: SxProps;
  title: string | number | ReactNode;
  value: string | number | ReactNode;
}) {
  return (
    <Stack sx={{ ...containerStyle }}>
      {typeof title === "string" ? (
        <Typography color="#828282" variant="body1" sx={{ ...titleStyle }}>
          {capitalizeFirstLetter(title)}
        </Typography>
      ) : (
        title
      )}
      {typeof value === "string" ? (
        <Typography variant="body1" sx={{ ...valueStyle }}>
          {value}
        </Typography>
      ) : (
        value
      )}
    </Stack>
  );
}
