// layout.tsx
import Navbar from "@/components/Frontend/Navbar";
import NavMenu from "@/components/Frontend/NavMenu";
import React, { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  console.log("RootLayout loaded");
  return (
    <div>
      <Navbar />
      <NavMenu />
      {children}
    </div>
  );
}
