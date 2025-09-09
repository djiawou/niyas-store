import type { Metadata } from "next";
import { Alegreya, PT_Sans } from 'next/font/google';
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/header";
import { SiteFooter } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Niya's Atelier",
  description: "Modest fashion, traditional wear, and more.",
};

const fontHeadline = Alegreya({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
});

const fontBody = PT_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          fontHeadline.variable,
          fontBody.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 animate-in fade-in duration-500">{children}</main>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
