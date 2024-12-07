import { Stack, type StackProps } from "@mui/material";

export default function Center(props: StackProps) {
  return (
    <Stack spacing={1} justifyContent="center" alignItems="center" {...props}>
      {props.children}
    </Stack>
  );
}
