import Image from "next/image";
import { Button } from "@/components/ui/button";
import { products, newArrivals } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { ProductGrid } from "@/components/product-grid";
import { OutfitRecommender } from "@/components/outfit-recommender";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh] py-12 md:py-24">
        <div className="flex flex-col items-start text-left animate-in fade-in slide-in-from-left-12 duration-1000">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-4">
            Niya's Store
          </h1>
          <p className="text-xl md:text-2xl font-headline mb-6 max-w-lg text-foreground/80">
            L'élégance intemporelle rencontre la mode pudique et traditionnelle.
          </p>
          <p className="mb-8 text-muted-foreground">
            Découvrez nos collections uniques de pagnes, abayas, et voiles, conçues pour la femme moderne qui chérit son héritage.
          </p>
          <Button size="lg" asChild>
            <a href="#collection">
              Explorer la collection <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
        <div className="relative h-[60vh] md:h-full w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-90 duration-1000">
          <Image
            src="https://picsum.photos/id/366/800/1200"
            alt="Femme élégante portant une tenue traditionnelle africaine"
            data-ai-hint="elegant woman traditional african fashion"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <section className="py-12 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Nouveautés
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les dernières créations fraîchement arrivées en boutique.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="collection" className="py-12 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Notre Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Parcourez notre large gamme de vêtements et d'accessoires de haute qualité.
            </p>
          </div>
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="py-12 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Styling Personnalisé par Niya
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Laissez notre styliste IA vous aider à trouver la tenue parfaite. Dites-nous ce que
              vous cherchez, et nous créerons un look juste pour vous.
            </p>
          </div>
          <OutfitRecommender allProducts={products} />
        </div>
      </section>
    </div>
  );
}
