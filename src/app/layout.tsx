import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Page Collection",
  description: "A curated collection of modern, responsive landing page templates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
