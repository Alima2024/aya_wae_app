"use client";
import { createTheme, darken, lighten } from "@mui/material/styles";
import { fontFamily } from "./font";
import { TOOLBAR_HEIGHT } from "@/utils/constant";
import app_shadows from "./shadow";
import { IconCaretDown } from "@tabler/icons-react";
const theme = createTheme({
  direction: "ltr",
  breakpoints: {
    values: {
      xs: 300,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1440,
    },
  },
  mixins: {
    toolbar: {
      height: TOOLBAR_HEIGHT,
    },
  },
  palette: {
    primary: {
      main: "#f50057",
      // main: "#00F5ACFF",
      light: lighten("#f50057", 0.8),
      dark: darken("#f50057", 0.2),
    },
    info: {
      main: "#086DE977",
      light: "#6495D133",
    },
    warning: {
      main: "#ff9100",
      light: "#FFA1001A",
    },
    error: {
      main: "#FF172AFF",
    },
    success: {
      main: "#2DFF03FF",
    },
    grey: {
      100: "#F2F6FA",
      200: "#EAEFF4",
      300: "#DFE5EF",
      400: "#7C8FAC",
      500: "#5A6A85",
      600: "#475467",
    },
    background: {
      default: "#F8F8F8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#101828", // Forest Green for text
      secondary: "#475467",
      disabled: "#828282",
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.02,
      hover: "#f6f9fc",
    },
    divider: "#e5eaef",
  },
  typography: {
    fontFamily: fontFamily,
    h1: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
      fontFamily: fontFamily,
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      fontFamily: fontFamily,
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "1.75rem",
      fontFamily: fontFamily,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.3125rem",
      lineHeight: "1.6rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.6rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.2rem",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334rem",
    },
    body2: {
      fontSize: "0.75rem",
      letterSpacing: "0rem",
      fontWeight: 400,
      lineHeight: "1rem",
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      color: "#828282",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      color: "#828282",
    },
  },
  shadows: app_shadows,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "medium",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: "none",
          textWrap: "nowrap",
        },
        colorPrimary: {
          color: "#FFF",
        },
        colorWarning: {
          color: "#ff9800",
          background: "#FFA1001A",
        },
        colorSuccess: {
          color: "#76ff03",
          background: "#D5FFCC",
        },
        colorInfo: {
          color: "#0288d1",
          background: "#6495D133",
        },
        colorError:{
          color: "#d50000",
          background: "#FF3B300D"
        }
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          marginRight: "10px",
          marginTop: "5px"
        }
      },
      defaultProps: {
        size: "small",
        IconComponent: IconCaretDown,
        MenuProps: {
          PaperProps: {
            sx: {
              // boxShadow: BOXSHADOW.boxShadow5,
              borderRadius: 1,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: {
          color: "#FFF",
        },
        colorWarning: {
          color: "#ff9800",
          background: "#FFA1001A",
        },
        colorSuccess: {
          color: "#76ff03",
          background: "#D5FFCC",
        },
        colorInfo: {
          color: "#0288d1",
          background: "#6495D133",
        },
        colorError:{
          color: "#d50000",
          background: "#FF3B300D"
        }
      },
    },
    MuiMenu: {
      defaultProps: {
        transformOrigin: { horizontal: "right", vertical: "top" },
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperWidthSm: {
          maxWidth: 500,
        },
      
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#D0D5DD",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D0D5DD",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D0D5DD",
            borderWidth: 1,
          },
        },
      },
    },
  },
});

export default theme;
