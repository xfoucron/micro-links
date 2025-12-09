import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MicroLinks",
  description: "Open-source link-in-bio platform built with microservices architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
