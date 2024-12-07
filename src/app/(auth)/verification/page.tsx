/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Center from "@/components/common/Center";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useRouter } from "next/navigation";

const page = () => {
  const route = useRouter();
  return (
    <Stack sx={{ height: 1 }}>
      <Center sx={{ mt: "40px", p: 10 }}>
        <Typography variant="h2" color="primary.main">
          Verification code
        </Typography>

        <Typography
          variant="body1"
          sx={{ textAlign: "center", p: 0.9, maxWidth: 320 }}
        >
          Enter the code you received by email on the address
          <strong> emmanuellenakita@gmail.com</strong>
        </Typography>

        {/* grid for mui code input for verfication */}
        <Center width={400} gap={2} sx={{ mt: "20px" }}>
          <MuiOtpInput length={6} typeof="number" />

          <Typography variant="body1" sx={{ textAlign: "center", p: 0.9 }}>
            Time left to enter the code <strong> 02:35</strong>
          </Typography>
          <Link href="/">
            <Typography
              sx={{
                color: "primary.main",
                marginTop: 1,
                textDecoration:"underline",
                cursor: "pointer"
              }}
            >
              Resend the code
            </Typography>
          </Link>
          <Button
            variant="contained"
            fullWidth
            onClick={() => route.push("/new-password")}
            sx={{ mt: 3 }}
          >
            Continue
          </Button>
        </Center>

        <Box sx={{ position: "absolute", bottom: "20px" }}>
          <Button
            variant="outlined"
            sx={{
              color: "primary.main",
              fontWeight: 500,
              marginTop: 1,
              border: "1px solid #E0E0E0",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
            onClick={() => route.push("/login")}
          >
            Back to Login
          </Button>
        </Box>
      </Center>
    </Stack>
  );
};

export default page;
