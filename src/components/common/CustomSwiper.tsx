"use client";
import SwipeableViews from "react-swipeable-views"; // Removed extra space
import React, { type ReactNode } from "react";

export default function CustomSwiper({
  children,
  page = 0,
}: {
  children?: ReactNode;
  page?: number;
}) {
  return (
    <SwipeableViews index={page}>
      {React.Children.toArray(children)?.map((child, i) => (
        <div key={i}>{child}</div>
      ))}
    </SwipeableViews>
  );
}
