import {
  IconButton,
  Theme,
  Typography,
  type SxProps,
  Box,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import { ReactNode } from "react";
import Row from "./Row";
import { IconX } from "@tabler/icons-react";
import { MoreHorizICON } from "@/icons/teams";
const box = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 40,
  width: 40,
  backgroundColor: "#F8F8F8",
  borderRadius: 2,
};
export default function CustomDrawer({
  title,
  open,
  children,
  onClose,
  containerStyle,
}: {
  title?: string;
  open: boolean;
  children?: ReactNode;
  containerStyle?: SxProps;
  onClose: () => void;
}) {
  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    onClose();
  };

  return (
    <Drawer
      sx={{ zIndex: (theme: Theme) => theme.zIndex.drawer + 1 }}
      anchor="right"
      open={open}
      onClose={toggleDrawer}
      PaperProps={{
        bgcolor: "background.paper",
      }}
    >
      <Stack
        sx={{
          width: 300,
          height: "100%",
          bgcolor: "background.default",
          minWidth: 650,
          ...containerStyle,
        }}
      >
        <Row
          sx={{
            borderColor: "background.paper",
            bgcolor: "background.paper",
            p: 1.6,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box sx={box}>
              <IconButton onClick={toggleDrawer}>
                <IconX color="#4F4F4F" size={16} />
              </IconButton>
            </Box>

            <Typography
              variant="h5"
              textTransform="capitalize"
              color="text.disabled"
            >
              {title || "detail"}
            </Typography>
          </Stack>
          <Box sx={box} ml="auto">
            <IconButton>
              <MoreHorizICON color="#4F4F4F" size={16} />
            </IconButton>
          </Box>
        </Row>
        <Stack
          height="calc(100% - 84px)"
          sx={{
            overflow: "auto",
            borderTop: "1px solid #8282826B",
          }}
        >
          {children}
        </Stack>
      </Stack>
    </Drawer>
  );
}
