import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Karan Joshi",
  description: "A passionate Web Developer specializing in modern web technologies. I build responsive and performant web applications"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
