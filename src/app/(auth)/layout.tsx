"use client";
import Grid from "@/components/common/Grid";
import { Box, } from "@mui/material";
import { ReactNode } from "react";
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Grid container sx={{ height: "100vh", width: "100vw" }}>
      <Grid size={{ md: 6, xs: 12 }} sx={{ height: 1 }}>
        {children}
      </Grid>
      <Grid flexGrow={1} sx={{ height: 1 }}>
        <Box
          sx={{
            position: "relative",
            backgroundImage: "url('/images/white=bg.avif')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#e91e63",
            backgroundBlendMode: "multiply",
            height: "100%",
            width: "100%",
          }}
        />
      </Grid>
    </Grid>
  );
}
