import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled, SxProps } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
interface ToggleOption {
  value: string;
  label: string;
}

interface RoleSelectorProps {
  titleStyle?: SxProps;
  title: string;
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
}

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "8px !important",
  width: "200px",
  textTransform: "none",
  fontWeight: "600",
  fontSize: "14px",
  "&.Mui-selected": {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
  "&:not(.Mui-selected)": {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  },
}));

const RoleSelector: React.FC<RoleSelectorProps> = ({
  titleStyle,
  title,
  options,
  value,
  onChange,
}) => {
  const handleToggleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null) {
      onChange(newValue);
    }
  };

  return (
    <Stack gap={3} mt={1}>
      <Typography variant="body1" sx={{ ...titleStyle }}>
        {title}
      </Typography>

      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={handleToggleChange}
        aria-label="Custom toggle button"
        sx={{
          display: "flex",
          gap: 1,
          width: .9,
          borderRadius: 1,
          background: "#f2f2f2",
          p: .8,
        }}
      >
        {options.map((option) => (
          <StyledToggleButton
            key={option.value}
            value={option.value}
            aria-label={option.label}
          >
            {option.label}
          </StyledToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
};

export default RoleSelector;
