import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Inmoria — Inmobiliaria Zona Oeste GBA",
  description:
    "Inmobiliaria con más de 25 años de trayectoria en Zona Oeste del GBA. Profesionalismo y confianza en cada operación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="font-sans text-oscuro bg-white antialiased">
        <a href="#contenido" className="skip-link">
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}