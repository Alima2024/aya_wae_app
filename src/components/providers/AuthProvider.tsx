"use client";
import UserProvider from "@/context/user.context";
import type { User } from "@/utils/models/user.models";
import { useCallback, useState, type ReactNode } from "react";

export default function AuthProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: any;
}) {
  const [data, setData] = useState<User>(user);
  const updateUser = useCallback((d: Partial<User>) => {
    setData((prev) => ({ ...prev, ...d }));
  }, []);

  return (
    <UserProvider value={{ user: data, updateUser }}>{children}</UserProvider>
  );
}
