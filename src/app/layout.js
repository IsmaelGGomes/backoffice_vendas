'use client'
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'react-hot-toast';
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Toaster />
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}