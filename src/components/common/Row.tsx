import { Stack, type StackProps } from "@mui/material";

export default function Row(props: StackProps) {
  return (
    <Stack gap={1} direction="row" alignItems="center" {...props}>
      {props.children}
    </Stack>
  );
}
