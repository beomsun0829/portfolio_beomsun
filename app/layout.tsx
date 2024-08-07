import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { Viewport } from "next";
import Nav from "./components/Nav"

const outfit = Outfit({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: "Hong Beomsun - Portfolio",
  description: "Hong Beomsun - Portfolio",
  keywords: [
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="bg-[#050505] text-white flex flex-col items-center w-screen gap-24 p-48 max-[630px]:px-[20px] overflow-x-hidden">
        <Nav />
        {children}
              {/*<Footer />*/}
        <div className="w-[35rem] h-[30rem] animate-spin-slow animate-colour-change opacity-40 rounded-full blur-[400px] absolute bottom-[0%] left-[36%] -z-50"></div>
      </body>
    </html>
  );
}
