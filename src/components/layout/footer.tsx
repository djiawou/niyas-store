import Link from "next/link";
import { Logo } from "@/components/icons";

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
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Instagram</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Facebook</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Pinterest</Link>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Niya's Store. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
