/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Center from "@/components/common/Center";
import TextInput from "@/components/forms/TextInput";
import Link from "next/link";
import {
  Box,
  Button,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import {
  IconEye,
  IconEyeOff,
  IconLock,
  IconMail,
  IconUser,
} from "@tabler/icons-react";
import { capitalizeFirstLetter } from "@/utils/string.utils";
import Row from "@/components/common/Row";
import { useState } from "react";

const page = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Stack
      sx={{
        height: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Center
        bgcolor={"white"}
        p={2}
        boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        borderRadius={2}
      >
        <Typography p={2} variant="h2" color="primary" mt={3}>
          SIGN UP
        </Typography>
        <Box component={"form"} gap={2} width={400}>
          <TextInput
            placeholder="Name..."
            containerStyle={{ width: "100%", mb: 3 }}
            startIcon={<IconUser size={16} />}
          />
          <TextInput
            placeholder="Email..."
            containerStyle={{ width: "100%", mb: 3 }}
            startIcon={<IconMail size={16} />}
          />
          <TextInput
            placeholder="Password..."
            containerStyle={{ width: "100%", mb: 3 }}
            type="password"
            startIcon={<IconLock size={16} />}
            endIcon={
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <IconEye /> : <IconEyeOff />}
              </IconButton>
            }
          />
          <Row justifyContent={"space-between"}>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Accept all terms and conditions"
            />
          </Row>

          <Button fullWidth variant="contained" color="primary">
            Create account
          </Button>

          <Row justifyContent={"center"} mt={3}>
            <Typography color="text.secondary">
              Already have an account?
            </Typography>
            <Link href="/login" passHref>
              <Typography
                component="a"
                color="primary"
                sx={{ textDecoration: "underline", cursor: "pointer" }}
              >
                {capitalizeFirstLetter("login")}
              </Typography>
            </Link>
          </Row>
        </Box>
      </Center>
    </Stack>
  );
};

export default page;
