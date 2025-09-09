"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/icons";

const navItems = [
  { href: "/", label: "Home" },
  { href: "#collection", label: "Collection" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline text-lg">
              Niya's Atelier
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2"
              aria-label="Toggle Navigation"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col h-full py-6">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                    <Logo className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline text-lg">Niya's Atelier</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                    <Link
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-foreground/80 text-foreground/80 text-lg"
                    >
                    {item.label}
                    </Link>
                ))}
                </nav>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-9 h-9"
                  aria-label="Search products"
                />
              </div>
            </form>
          </div>
          <Button variant="ghost" size="icon" aria-label="Shopping Bag">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
