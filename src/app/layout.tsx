import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "aos/dist/aos.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"]
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Karan Joshi — Full Stack Developer",
  description:
    "A passionate Web Developer specializing in modern web technologies. I build responsive and performant web applications with intuitive design."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = localStorage.getItem('theme') || 'light';
              document.documentElement.setAttribute('data-theme', theme);
            `
          }}
        />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
