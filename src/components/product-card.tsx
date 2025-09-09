import Image from "next/image";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div className={cn("group relative animate-in fade-in duration-500", className)}>
      <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-secondary group-hover:opacity-90 transition-opacity">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={500}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          data-ai-hint="pagne fabric african fashion"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-base font-headline text-foreground font-medium">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="mt-1 text-lg font-semibold text-foreground">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
