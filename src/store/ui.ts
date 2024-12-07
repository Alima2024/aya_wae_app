// types
import { createSlice } from "@reduxjs/toolkit";

import { PaletteMode } from "@mui/material";
import { type STATE } from "./state";
import { IconDashboard } from "@tabler/icons-react";

// initial state
export const ui_state = {
  openItem: {
    title: "Dashboard",
    icon: IconDashboard,
  },
  backdrop: false,
  defaultId: "dashboard",
  openComponent: "buttons",
  active_section: "home",
  drawerOpen: true,
  componentDrawerOpen: true,
  sessionExpired: false,
  addingCampaigns: false,
  themeConfig: {
    primary: undefined,
  },
  app_config: {},
  print_config: {
    id: null,
    open: false,
  },
  tag: {},
  admin_notifications: {},
  theme_mode: "light",
  table_mode: true,
  lang: {
    systemLanguage: "en",
    languages: [
      {
        lang: "english",
        key: "en",
      },
      {
        lang: "french",
        key: "fr",
      },
      {
        lang: "chinois",
        key: "ch",
      },
    ],
  },
};

// ==============================|| SLICE - MENU ||============================== //

const ui = createSlice({
  name: "ui",
  initialState: ui_state,
  reducers: {
    set_open_item(state, action) {
      state.openItem = action.payload;
    },
    addAppconfig(state, { payload }) {
      state.app_config = payload;
    },
    setThemeConfig(state, { payload }) {
      state.themeConfig.primary = payload.color;
      return state;
    },
    open_drawer(state, { payload }) {
      state.drawerOpen = payload;
    },
    set_language: (state, action) => {
      state.lang = { ...state.lang, systemLanguage: action.payload };
      return state;
    },
    set_theme_mode(state, { payload }: { payload: PaletteMode }) {
      state.theme_mode = payload;
      return state;
    },
    close_open_backdrop(state, { payload }) {
      state.backdrop = payload;
    },

    set_active_section(state, { payload }) {
      state.active_section = payload;
    },
    setTableMode(state, { payload }) {
      state.table_mode = payload;
      return state;
    },
    set_open_parcel_modal(state, { payload }: { payload: boolean }) {
      state.print_config = {
        ...state.print_config,
        open: payload,
      } as any;
      return state;
    },
    set_last_add_or_updated_parcel(state, { payload }: { payload: string }) {
      console.log("last update or add parcel", payload);
      state.print_config.id = payload as any;
      return state;
    },
  },
});

export default ui.reducer;

export const {
  set_open_item,
  open_drawer,
  set_language,
  close_open_backdrop,
  addAppconfig,
  set_theme_mode,
  set_active_section,
  setThemeConfig,
  setTableMode,
  set_open_parcel_modal,
  set_last_add_or_updated_parcel,
} = ui.actions;

export const langSelector = (state: STATE) => state.ui.lang.systemLanguage;
export const uiSelector = (state: STATE) => state.ui;
