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
      <div className="aspect-[4/5] w-full overflow-hidden rounded-md bg-muted group-hover:opacity-75">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={500}
          className="h-full w-full object-cover object-center"
          data-ai-hint="fashion product"
        />
      </div>
      <div className="mt-2 flex justify-between">
        <div>
          <h3 className="text-sm text-foreground">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-foreground">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
