import NavBar from "@/components/dashboard/NavBar";
import Sidebar from "@/components/dashboard/SideBar";
import React, { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <Sidebar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
