import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/provider/CartProvider";
import { Toaster } from "react-hot-toast";
import { getCurrentUser } from "../../actions/getCurrentUser";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "700"] });

export const metadata: Metadata = {
  title: "Girls",
  description: "Everything girls need.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  console.log("currentUser", currentUser);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster
          toastOptions={{
            style: {
              background: "#8b5cf6",
              color: "#fff",
            },
          }}
        />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
