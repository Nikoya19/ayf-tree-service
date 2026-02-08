import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AYF Tree Service | Professional Tree Removal & Trimming",
  description: "Expert tree removal, trimming, stump grinding, and 24/7 emergency storm cleanup services. Licensed, insured, and trusted tree care professionals.",
  keywords: "tree service, tree removal, tree trimming, stump grinding, storm cleanup, emergency tree service, arborist, AYF Tree Service",
  openGraph: {
    title: "AYF Tree Service",
    description: "Professional tree care services you can trust",
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
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
