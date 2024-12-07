"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { useRef, type ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { makeStore, type AppStore } from "@/store/state";
import { Toaster } from "sonner";
import theme from "@/theme";
// import EmotionProvider from "../layout/cache/emotion";

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
}

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <Toaster />
    </ThemeProvider>
  );
};

export default function MainProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <AppRouterCacheProvider>
      <Provider store={storeRef.current}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </Provider>
    </AppRouterCacheProvider>
  );
}
