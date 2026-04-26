import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Martha Nardy | Endodontista em São Paulo",
  description: "Dra. Martha Nardy - Cirurgiã-dentista há mais de 30 anos, especialista em Endodontia pela USP Bauru. Atendimento particular em São Paulo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
