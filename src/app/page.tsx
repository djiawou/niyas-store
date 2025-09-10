import Image from "next/image";
import { Button } from "@/components/ui/button";
import { products, newArrivals } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { ProductGrid } from "@/components/product-grid";
import { OutfitRecommender } from "@/components/outfit-recommender";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="https://picsum.photos/seed/hero2/1800/1200"
        alt="Femme élégante portant une tenue traditionnelle africaine"
        data-ai-hint="elegant modest fashion gold"
        fill
        className="object-cover animate-ken-burns"
        priority
      />
      <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl md:text-8xl font-headline font-bold text-white mb-4 text-shadow-lg animate-in fade-in slide-in-from-bottom-12 duration-1000">
          Niya's Store
        </h1>
        <p className="text-xl md:text-2xl font-headline mb-8 max-w-2xl text-white/90 text-shadow animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200">
          L'élégance intemporelle rencontre la mode pudique et traditionnelle.
        </p>
        <div className="animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-400">
          <Button size="lg" variant="default" asChild className="bg-primary hover:bg-accent text-primary-foreground">
            <a href="#collection">
              Explorer la collection <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <Hero />

      <section className="py-12 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-primary">
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

      <section className="py-12 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-primary">
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
