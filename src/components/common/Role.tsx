"use client";
import Chip from "@mui/material/Chip";

export type ROLE =
  | "ADMIN"
  | "USER"
  | "SUPER ADMIN"
  | "DEVELOPER"
  | "SUPPORT"
  | "ANALYST";
const COLOR: Record<string, string> = {
  ADMIN: "warning",
  USER: "info",
  SUPER_ADMIN: "secondary",
  DEVELOPER: "primary",
  SUPPORT: "secondary",
  ANALYST: "info",
};
type Props = { role: ROLE };
export default function Role({ role }: Props) {
  const chipColor = COLOR?.[role] as any;
  const formattedRole = role
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return <Chip size="small" label={formattedRole} color={chipColor} />;
}
