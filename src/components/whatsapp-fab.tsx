"use client";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function WhatsappFab() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Replace with your actual WhatsApp number
    const whatsappNumber = "+229 97 83 96 40"; 
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <div className={cn(
            "fixed bottom-6 right-6 z-50 transition-transform duration-300 transform",
            isScrolled ? "scale-100" : "scale-0"
        )}>
            <Button asChild size="icon" className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg">
                <Link href={whatsappLink} target="_blank" aria-label="Contact us on WhatsApp">
                    <WhatsAppIcon className="w-8 h-8 text-white" />
                </Link>
            </Button>
        </div>
    );
}
