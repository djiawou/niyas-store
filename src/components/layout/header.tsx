"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/icons";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/#collection", label: "Collection" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-b border-border/50 bg-background/80 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-10 w-10" />
            <span className={cn(
              "hidden font-bold sm:inline-block font-headline text-2xl transition-colors",
              isScrolled ? "text-primary" : "text-white text-shadow-lg"
            )}>
              Niya's Store
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-base font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  isScrolled ? "text-foreground/80" : "text-white/80 hover:text-white"
                )}
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
              className={cn(
                "md:hidden mr-2 transition-colors",
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle Navigation"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col h-full py-6">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                    <Logo className="h-10 w-10" />
                    <span className="font-bold font-headline text-2xl text-primary">Niya's Store</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                    <Link
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-primary text-foreground/80 text-xl"
                    >
                    {item.label}
                    </Link>
                ))}
                </nav>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="w-full flex-1 md:w-auto md:flex-none">
             <form>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher..."
                  className={cn(
                    "pl-9 h-10 rounded-full border-0 transition-colors",
                    isScrolled ? "bg-secondary/80 focus:bg-secondary" : "bg-white/10 placeholder:text-white/70 text-white focus:bg-white/20"
                  )}
                  aria-label="Rechercher des produits"
                />
              </div>
            </form>
          </div>
          <Button variant="ghost" size="icon" aria-label="Shopping Bag" className={cn(
            "transition-colors",
            isScrolled ? "text-foreground hover:text-primary" : "text-white hover:bg-white/10"
          )}>
            <ShoppingBag className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
