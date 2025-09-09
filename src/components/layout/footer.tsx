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
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.32 1.7.09 1.6-.24 3.2-.94 4.65-1.06 2.22-3.22 3.55-5.63 3.86-1.18.15-2.38.16-3.56.02-1.25-.13-2.48-.43-3.66-1.02-.34-.17-.71-.38-1.01-.65-.13-.11-.25-.23-.38-.35-.05-.05-.09-.1-.14-.15-.05-.05-.1-.1-.15-.15-1.12-1.02-1.6-2.56-1.54-4.1.03-1.1.28-2.17.75-3.15.54-1.12 1.33-2.1 2.3-2.88.5-.4.97-.76 1.48-1.08.7-.44 1.44-.8 2.22-1.08.2-.07.4-.14.6-.21.07-.02.13-.04.2-.06.26-.08.53-.15.8-.21.08-.02.17-.04.25-.05.02 0 .04-.01.06-.01zm2.86 6.34c.03.01 0 .02-.03.03-.38.13-.76.28-1.13.43-.88.35-1.7.8-2.45 1.36-.6.44-1.14.96-1.62 1.54-.3.37-.53.78-.7 1.22-.16.42-.25.86-.28 1.3-.02.39.01.78.09 1.16.1.46.29.9.54 1.32.25.41.57.78.94 1.1.33.29.7.53 1.1.72.78.37 1.6.58 2.45.62.9.04 1.79-.06 2.65-.33.84-.26 1.62-.7 2.3-1.28.6-.5.98-1.23 1.2-2.03.18-.65.25-1.35.25-2.05 0-.23-.02-.46-.06-.68-.04-.23-.1-.45-.17-.67-.09-.28-.2-.55-.33-.81-.13-.27-.29-.53-.46-.78-.5-.7-1.17-1.28-1.95-1.7-.3-.16-.6-.3-.9-.43-.01 0-.01-.01-.02-.01z"/>
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
