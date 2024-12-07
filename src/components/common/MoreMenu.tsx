"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, IconButton, ListItemIcon, type SxProps } from "@mui/material";
import { capitalizeFirstLetter } from "@/utils/string.utils";
import { MoreVertICON } from "@/icons/teams";

export interface MORE_MENU_ITEMS {
  label: string;
  key: string;
  icon?: React.ReactNode;
  divider?: boolean;
}

export default function MoreMenu({
  items = [],
  containerStyle,
  itemStyle,
  onSelect,
}: {
  title?: string;
  containerStyle?: SxProps;
  itemStyle?: SxProps;
  items?: MORE_MENU_ITEMS[];
  onSelect?: (key: string) => void;
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
      <IconButton
        id={id}
        aria-controls={open ? id : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertICON />
      </IconButton>

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
          <MenuItem
            sx={{
              ...itemStyle,
              borderBottom: "1px solid",
              fontWeight: 500,
              borderBottomColor: item?.divider ? "divider" : "#FFF",
            }}
            onClick={() => select(item.key)}
            key={item.key}
          >
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
