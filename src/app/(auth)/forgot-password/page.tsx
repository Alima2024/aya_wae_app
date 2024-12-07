/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Center from "@/components/common/Center";
import TextInput from "@/components/forms/TextInput";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const route = useRouter();
  return (
    <Stack sx={{ height: 1 }}>
      <Center sx={{ mt: "40px", p: 10 }}>
        <Typography
          variant="h2"
          sx={{
            color: "primary.main",
            marginBottom: 2,
          }}
        >
          Forgot password ?
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          p={2}
          maxWidth={405}
          align="center"
        >
          Enter your email address and a reset password link will be send to
          your email.
        </Typography>

        <Center width={400} gap={2}>
          <TextInput
            title="Email address"
            type="email"
            containerStyle={{ width: "100%" }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={() => route.push("/verification")}
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
              border: "1px solid #E0E0E0", // Grey border
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
