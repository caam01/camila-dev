import type { Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#101722",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
