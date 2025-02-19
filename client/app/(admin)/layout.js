import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import StorePovider from "@/context/StorePovider";

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
      className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
    >
      <LeftSidebar />
      <main className="flex-1">
        <StorePovider>{children}</StorePovider>
      </main>
    </div>
  );
}
