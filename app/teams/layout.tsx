import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/header";

export const metadata: Metadata = {
  title: "Teams",
  description: "Select your team and track there progress!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  );
}
