import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lera Suanu | Software Engineer",
  description: "Lera Suanu builds and maintains full-stack software, including marketplace checkout, database workflows, and automated tests.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased">{children}</body></html>;
}
