"use client";
import { useState } from "react";
import "./globals.css";
import Header from "@/Components/Header";
export default function RootLayout({ children }) {
  const [user, setuser] = useState("Ahtsham");
  return (
    <html lang="en">
      <body>
        <Header user={user} />
        {children}
      </body>
    </html>
  );
}
