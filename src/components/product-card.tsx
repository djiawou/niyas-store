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
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-secondary transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/20">
        <div className="absolute inset-0 z-10 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={500}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          data-ai-hint="pagne fabric african fashion"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
        <h3 className="text-base font-headline text-white font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="mt-1 text-lg font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
