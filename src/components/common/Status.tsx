"use client";
import { useTheme } from "@mui/material";
import Chip from "@mui/material/Chip";
import { IconPointFilled } from "@tabler/icons-react";

export type STATUS = "ACTIVE" | "INACTIVE" | "BLOCKED" | "DISABLED" ;

const COLOR: Record<STATUS, string> = {
  ACTIVE: "success",
  INACTIVE: "error",
  BLOCKED: "warning",
  DISABLED: "default",
};

type Props = { status: STATUS };

export default function Status({ status }: Props) {
  const colors = useTheme().palette as any;
  const iconColor = colors?.[COLOR[status]]?.main;
  const chipColor = COLOR?.[status] as any;
  return (
    <Chip
      icon={<IconPointFilled size={16} color={iconColor} />}
      color={chipColor}
      label={
        <span style={{color : colors?.[COLOR[status]]?.main}}>
          {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
        </span>
      }
      size="small"
    />
  );
}
