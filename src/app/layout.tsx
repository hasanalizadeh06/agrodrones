
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import bgImage from "../../public/bg.jpeg";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agro Drones panel | Smart Farming Solutions",
  description: "Control and monitor your agricultural drones with our intuitive panel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen overflow`}
      >
        <Image
          src={bgImage}
          alt="Background"
          fill
          priority
          className="fixed inset-0 w-full h-full object-cover -z-10 blur-2xl pointer-events-none select-none"
        />
        <Navbar />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
