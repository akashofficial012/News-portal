import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Header from "@/components/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AdminLayout({ children }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}>
      <LeftSidebar />
      <main className="flex-1">
          <Header />
          {children}
      </main>
    </div>
  );
}
