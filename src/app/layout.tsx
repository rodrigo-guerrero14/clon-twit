import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clon de Twitter",
  description: "Generado con nextJs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
