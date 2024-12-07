"use client";
import type { ReactNode } from "react";
import NextLink from "./NextLink";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material";

export default function TabLink({
  href,
  children,
}: {
  href: string;
  children?: ReactNode;
}) {
  const isActive = usePathname().endsWith(href);

  const palette = useTheme().palette;
  return (
    <NextLink
      sx={{
        color: isActive ? palette.warning.main : palette.text.primary,
        borderBottom: isActive ? `2px solid ${palette.warning.main}` : "none",
        py: 1,
      }}
      href={href}
    >
      {children}
    </NextLink>
  );
}
