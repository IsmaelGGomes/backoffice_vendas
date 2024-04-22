'use client'
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { Package2 } from "lucide-react";
import { SideNav } from "@/components/layout/side-nav";
import { Header } from "@/components/layout/header";
import Link from "next/link";
export default function RootLayout({ children, title }) {
  return (
    <html lang="pt-br" className="">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Toaster />
        <div className="relative flex min-h-screen flex-col">
          <div className="w-full h-full theme-zinc">
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
              <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                  <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                      <Package2 className="h-6 w-6" />
                      <span className="">Venda de Ingressos</span>
                    </Link>
                  </div>
                  <SideNav />
                </div>
              </div>
              <div className="flex flex-col">
                <Header />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                  {children}
                </main>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}