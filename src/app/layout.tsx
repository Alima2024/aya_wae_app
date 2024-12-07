import MainProvider from "@/components/providers/MainProvider";
import * as React from "react";
import "./../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="body">
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
