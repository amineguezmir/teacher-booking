import React, { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>I am Dashboard only pages </h2>
      {children}
    </div>
  );
}
