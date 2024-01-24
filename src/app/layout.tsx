import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "700"] });

export const metadata: Metadata = {
  title: "Girls",
  description: "Everything girls need.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
