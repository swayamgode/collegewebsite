import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "VCET | Vidyavardhini's College of Engineering & Technology",
  description: "Vidyavardhini's College of Engineering & Technology (VCET) is a premier engineering institution in Vasai, Maharashtra. Accredited 'A' Grade by NAAC.",
  keywords: "VCET, engineering college, Vasai, engineering degree, computer engineering, IT, AI, mechanical engineering, civil engineering, placements",
  authors: [{ name: "VCET" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-[#FDFDFD]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

