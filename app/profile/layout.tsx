import React from "react";
import "../globals.css";
import Header from "@/components/Header"; // Adjust the path based on your file structure

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased p-6">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
