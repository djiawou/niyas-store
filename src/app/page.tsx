import Image from "next/image";
import { Button } from "@/components/ui/button";
import { products, newArrivals } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { ProductGrid } from "@/components/product-grid";
import { OutfitRecommender } from "@/components/outfit-recommender";

function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src="https://picsum.photos/seed/picsum/1800/1200"
        alt="Femme portant une tenue traditionnelle colorée"
        data-ai-hint="traditional african fashion"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <h1 className="text-4xl md:text-7xl font-headline mb-4 text-shadow">
          L'élégance dans la modestie
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-shadow-sm">
          Découvrez notre collection de pièces intemporelles et contemporaines.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <a href="#collection">Acheter maintenant</a>
        </Button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline mb-8 text-center">
            Nouveautés
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="collection" className="py-12 md:py-24 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline mb-2 text-center">
            Notre Collection
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Parcourez notre large gamme de vêtements et d'accessoires de haute qualité.
          </p>
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline mb-2 text-center">
            Styling personnalisé par Niya
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Laissez notre styliste IA vous aider à trouver la tenue parfaite. Dites-nous ce que
            vous cherchez, et nous créerons un look juste pour vous.
          </p>
          <OutfitRecommender allProducts={products} />
        </div>
      </section>
    </div>
  );
}
