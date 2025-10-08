import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AgroSensIA - Agricultura Inteligente en Tiempo Real",
  description: "Monitorea, digitaliza y mejora tu producción agrícola con AgroSensIA. Sensores IoT, análisis en tiempo real y trazabilidad completa para optimizar tus cultivos.",
  keywords: "agricultura, IoT, sensores, monitoreo agrícola, trazabilidad, agricultura de precisión, tecnología agrícola, AgroSensIA",
  authors: [{ name: "AgroSensIA Team" }],
  openGraph: {
    title: "AgroSensIA - Agricultura Inteligente",
    description: "Plataforma de gestión agrícola con sensores IoT para monitoreo en tiempo real",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
