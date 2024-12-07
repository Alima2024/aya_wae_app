"use client";
import React from "react";
import { styled, type SxProps } from "@mui/material/styles";
import Link, { type LinkProps } from "next/link";
import { Box } from "@mui/material";

const StyledLink = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "none",
  fontWeight: 500,
  color: theme.palette.text.primary,
  "&:hover": {
    textDecoration: "none",
  },
}));

export default function NextLink({
  href,
  startIcon,
  endIcon,
  children,
  sx,
}: LinkProps & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  sx?: SxProps;
}) {
  return (
    <StyledLink href={href}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          ...sx,
        }}
      >
        {startIcon}
        {children}
        {endIcon}
      </Box>
    </StyledLink>
  );
}
