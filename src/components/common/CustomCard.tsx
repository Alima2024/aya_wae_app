import React from "react";
import { Card, Typography, Button, Box } from "@mui/material";
import Row from "./Row";

type CustomCardProps = {
  icon?: React.ReactNode;
  dateTime: string;
  title: string;
  description: string;
  linkLabel: string;
  linkAction?: () => void;
  amount: number | string;
};

const CustomCard: React.FC<CustomCardProps> = ({
  icon,
  dateTime,
  title,
  description,
  linkLabel,
  linkAction,
  amount,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        width: "100%",
        margin: "10px auto",
        padding: "12px",
        border: "1px solid #80808048",
        borderRadius: "8px",
      }}
      elevation={0}
    >
      <Row justifyContent={"space-between"}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ marginBottom: "8px" }}
          >
            {dateTime}
          </Typography>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle2" color="text.secondary" mt={1}>
            {description} <strong> {amount}</strong>
          </Typography>
        </Box>

        <Button
          variant="text"
          size="small"
          color="warning"
          onClick={linkAction}
          startIcon={icon}
        >
          {linkLabel}
        </Button>
      </Row>
    </Card>
  );
};

export default CustomCard;
