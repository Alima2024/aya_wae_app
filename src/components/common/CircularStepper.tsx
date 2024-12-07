import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number; label: string }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          position: "absolute",
          margin: "auto",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          width: 33,
          height: 33,
          borderRadius: "50%",
        }}
      >
        <Typography
          fontSize={16}
          variant="caption"
          component="div"
          sx={{ color: "#F2994A" }}
        >
          {props.label}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularStepper({
  numStep,
  page,
}: {
  numStep: number;
  page: number;
}) {
  const percent = Math.round((page / numStep) * 100);

  return <CircularProgressWithLabel value={percent} label={`${page}`} />;
}
