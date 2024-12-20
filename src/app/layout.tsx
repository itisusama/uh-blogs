import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UH Blogs",
  description: "This is blogs by Usama Hassan with Sanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
