"use client";

import { useState } from "react";
import type { Product } from "@/types";
import { categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        <Button
          variant={activeCategory === "All" ? "default" : "outline"}
          onClick={() => setActiveCategory("All")}
          className="rounded-full"
        >
          Tout
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
        {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-16">
                <p className="text-muted-foreground">Aucun produit trouvé pour cette catégorie.</p>
            </div>
        )}
    </div>
  );
}
