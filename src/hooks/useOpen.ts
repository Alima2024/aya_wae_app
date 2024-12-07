"use client";
import { useState } from "react";

export default function useOpen() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);
  return {
    open,
    handleOpen,
  };
}
