import { styled, type SxProps } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { capitalizeFirstLetter } from "@/utils/string.utils";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 1,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 18,
    height: 18,
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
export const SwitchIOS = ({
  checked,
  onChange,
  name,
}: {
  checked?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (ev: any) => void;
  name?: string;
}) => (
  <IOSSwitch defaultChecked checked={checked} name={name} onChange={onChange} />
);

export default function CustomSwitch({
  label,
  labelPlacement = "start",
  onChange,
  checked,
  name,
  sx,
}: {
  label?: string;
  labelPlacement?: "start" | "end";
  onChange?: () => void;
  checked?: boolean;
  name?: string;
  sx?: SxProps;
}) {
  return (
    <FormControlLabel
      control={<IOSSwitch defaultChecked name={name} checked={checked} />}
      label={capitalizeFirstLetter(label ?? "")}
      labelPlacement={labelPlacement}
      onChange={onChange}
      name={name}
      sx={{
        marginLeft: 0,
        marginRight: 0,
        width: label ? 1 : undefined,
        justifyContent: "space-between",
        ...sx,
      }}
    />
  );
}
