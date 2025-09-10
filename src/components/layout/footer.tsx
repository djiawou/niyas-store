import Link from "next/link";
import { Logo } from "@/components/icons";

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
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
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg
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
        <path d="M21 7.5a1 1 0 0 1-1 1H4.5a1 1 0 0 1 0-2H20a1 1 0 0 1 1 1Z" />
        <path d="M8.5 21a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v13a1 1 0 0 1-1 1Z" />
        <path d="M15.5 21a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v17a1 1 0 0 1-1 1Z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <div className="flex flex-col gap-2 md:items-center">
            <h4 className="font-headline font-semibold text-foreground">Navigation</h4>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">Accueil</Link>
            <Link href="#collection" className="text-sm text-muted-foreground hover:text-primary">Collection</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <h4 className="font-headline font-semibold text-foreground">Suivez-nous</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
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
