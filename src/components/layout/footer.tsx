import Link from "next/link";
import { Logo } from "@/components/icons";
import { Instagram, Facebook } from "lucide-react";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8.11V4.25a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v10.5a2.5 2.5 0 0 1-5 0V11" />
            <path d="M11 16.5a2.5 2.5 0 1 1 5 0V11" />
        </svg>
    );
}

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 4a8 8 0 0 0-8 8c0 3.5 2 6.5 5 7.5c.5.1.5-.2.5-.5v-2c0-.3 0-.5-.1-.7c-.2-.6-.3-1.3-.3-2c0-2.3 1.5-4 3.5-4c2 0 3 1.5 3 3c0 1.2-.5 2.5-1.5 2.5c-.7 0-1-.7-1-1.5c0-.8.5-1.5.5-2.5c0-1-1-2-2-2c-1.5 0-2.5 1-2.5 2.5c0 .5.1.9.3 1.3l-1 4.5c-.2.7-.1 1.5.5 1.5c.7 0 1.5-.7 1.5-2v-4c0-.5.5-1 1-1c.5 0 1 .5 1 1c0 .7 0 1.5-.5 1.5c-.5 0-1 .5-1 1c0 .5.3 1 .5 1.2c.2.2.5.3 1 .3c2 0 3.5-2 3.5-5c0-3-2.5-5.5-5.5-5.5z" />
        </svg>
    );
}


export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-10 w-10" />
              <span className="font-bold font-headline text-2xl text-primary">
                Niya's Store
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              L'élégance intemporelle rencontre la mode pudique et traditionnelle.
            </p>
          </div>

          <div className="md:col-start-3 flex flex-col gap-2">
            <h4 className="font-headline font-semibold">Navigation</h4>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">Accueil</Link>
            <Link href="#collection" className="text-sm text-muted-foreground hover:text-primary">Collection</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-headline font-semibold">Suivez-nous</h4>
            <div className="flex items-center gap-4">
                <Link href="#" className="text-foreground/70 hover:text-primary" aria-label="Instagram">
                    <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-foreground/70 hover:text-primary" aria-label="Facebook">
                    <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-foreground/70 hover:text-primary" aria-label="Pinterest">
                    <PinterestIcon className="h-6 w-6" />
                </Link>
                 <Link href="#" className="text-foreground/70 hover:text-primary" aria-label="TikTok">
                    <TikTokIcon className="h-6 w-6" />
                </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Niya's Store. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
