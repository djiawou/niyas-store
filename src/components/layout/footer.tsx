import { Logo } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Logo className="h-5 w-5 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Niya's Atelier. All Rights Reserved.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-primary transition-colors">Facebook</a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-primary transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
