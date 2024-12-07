"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, ListItemIcon, type SxProps } from "@mui/material";
import { capitalizeFirstLetter } from "@/utils/string.utils";

export interface MENU_ITEMS {
  label: string;
  key: string;
  icon?: React.ReactNode;
}

export default function CustomMenu({
  title,
  items = [],
  starticon,
  endicon,
  containerStyle,
  onSelect,
  buttonStyle
}: {
  title?: string;
  starticon?: React.ReactNode;
  endicon?: React.ReactNode;
  containerStyle?: SxProps;
  items?: MENU_ITEMS[];
  onSelect?: (key: string) => void;
  buttonStyle?:SxProps
}) {
  const id = React.useId();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const select = (key: string) => {
    onSelect?.(key);
    handleClose();
  };

  return (
    <Box sx={{ ...containerStyle }}>
      <Button
        startIcon={starticon}
        endIcon={endicon}
        id={id}
        aria-controls={open ? id : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "text.primary",
          bgcolor: "#FFF",
          border: "1px solid #E0E0E0",
          "&:hover": { bgcolor: "#FFF" },
          ...buttonStyle
        }}
      >
        {title}
      </Button>

      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": id,
        }}
      >
        {items.map((item) => (
          <MenuItem onClick={() => select(item.key)} key={item.key}>
            {item?.icon ? (
              <ListItemIcon sx={{ color: "text.secondary" }}>
                {item.icon}
              </ListItemIcon>
            ) : null}
            {capitalizeFirstLetter(item.label)}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
