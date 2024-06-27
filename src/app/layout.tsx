import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js starter",
  description: "Next.js starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
