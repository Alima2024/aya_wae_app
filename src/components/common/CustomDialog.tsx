import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  IconButton,
  styled,
  ButtonProps,
  Stack,
} from "@mui/material";
import { IconX } from "@tabler/icons-react";
// import { grey } from "@mui/material/colors"; // Import color palette
import React, { type ReactNode } from "react";
import Row from "./Row";
import { capitalizeFirstLetter } from "@/utils/string.utils";

interface CustomDialogProps {
  icon?: ReactNode;
  cancelButtonProps?: ButtonProps; // Props for Button 1
  cancelText?: string; // Text for Button 1
  saveButtonProps?: ButtonProps; // Props for Button 2
  saveText?: string; // Text for Button 2
  saveButtonIcon?: React.ReactNode; // Icon for Button 2
  open: boolean; // Dialog open state
  onClose: () => void; // Dialog close handler
  children: React.ReactNode; // Content inside the dialog
  header?: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Header = styled("div")(() => ({
  backgroundImage: "url('/image/dialogBg.svg')",
  backgroundSize: "contain",
  backgroundPosition: "left",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: "multiply",
}));

const CustomDialog: React.FC<CustomDialogProps> = ({
  icon,
  onClose,
  children,
  cancelButtonProps,
  saveButtonProps,
  cancelText = "Cancel",
  saveText = "Next",
  saveButtonIcon,
  header,
  maxWidth = "xs",
  open,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={maxWidth}>
      <Header>
        <DialogTitle>
          <Stack gap={2}>
            <Row justifyContent="space-between">
              {icon}
              <IconButton onClick={onClose}>
                <IconX />
              </IconButton>
            </Row>
            {header}
          </Stack>
        </DialogTitle>
      </Header>
      <DialogContent sx={{ padding: "0px", px: 3 }}>{children}</DialogContent>

      <DialogActions sx={{ padding: 0, px: 3, py: "30px" }}>
        <Button variant="outlined" fullWidth {...cancelButtonProps}>
          {capitalizeFirstLetter(cancelText)}
        </Button>

        <Button
          variant="contained"
          fullWidth
          startIcon={saveButtonIcon} // Icon for Button 2
          {...saveButtonProps}
        >
          {capitalizeFirstLetter(saveText)}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
