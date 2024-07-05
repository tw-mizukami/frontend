import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "設備設定アプリ",
  description: "Generated by create next app",
};

// Sidebarはここに書く。他にここに書くべきものは？HOMEとの違い。
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`flex ${inter.className}`}>
       <Sidebar />
       <div className="ml-[350px]"> {children}</div>
       
        </body>

    </html>
  );
}
