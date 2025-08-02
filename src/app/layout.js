import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Khyber Afghan English Language and Computer Academy (KAELCA)",
  description: "Empowering Futures Through Education",
  keywords: "Khyber, Afghan, English, Language, Computer, Academy, Education, Courses",
  authors: [{ name: "Khyber Afghan English Language and Computer Academy" }],
  creator: "Khyber Afghan English Language and Computer Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        <main className="w-full min-h-screen dark:bg-slate-900 bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
