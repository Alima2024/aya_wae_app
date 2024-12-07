import { Box, Typography } from "@mui/material";
import CircularStepper from "./CircularStepper";
import Row from "./Row";

interface Props {
  title: string;
  subtitle: string;
  indicatorText: string;
  page: number;
  step: number;
}

export default function DialogHeader({
  title,
  subtitle,
  indicatorText,
  page,
  step
}: Props) {
  return (
    <Row justifyContent={"space-between"}>
      <Box>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2"> {subtitle} </Typography>
      </Box>
      <Row>
        <Typography fontSize={12} color="#475467" fontWeight={600}>
          {indicatorText}
        </Typography>
        <CircularStepper numStep={step} page={page + 1} />
      </Row>
    </Row>
  );
}
