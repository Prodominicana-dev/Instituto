import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import NavBarMobile from "@/components/layout/navbar/navBarMobile";
import Footer from "@/components/layout/footer/footer";
import FooterMobile from "@/components/layout/footer/footerMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instituto Prodominicana",
  description:
    "Instituto de capacitation y formacion profesional creado por Prodominicana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
      </head>
      <body className={inter.className}>
        <Navbar />
        <NavBarMobile />
        {children}
        <Footer />
        <FooterMobile />
      </body>
    </html>
  );
}
