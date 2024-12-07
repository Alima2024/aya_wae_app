"use client";

import {
  combineReducers,
  configureStore,
  type AnyAction,
} from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import uiReducer, { ui_state } from "./ui";

const initialState = {
  ui: ui_state,
};

const reducers = combineReducers({
  ui: uiReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === "USER_LOGGED_OUT") {
    return { ...initialState };
  }
  return reducers(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
export const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>;
export type STATE = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type GET_STATE = () => STATE;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<STATE>();
export const useAppStore = useStore.withTypes<AppStore>();
