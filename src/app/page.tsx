import Image from "next/image";
import { Button } from "@/components/ui/button";
import { products, newArrivals } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { ProductGrid } from "@/components/product-grid";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <video
        src="/videos/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
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

const WhatsAppButton = () => (
    <div className="mt-10 text-center">
        <Button size="lg" asChild className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg">
            <Link href="https://wa.me/22997839640" target="_blank">
                <MessageCircle className="mr-2" /> Contacter via WhatsApp
            </Link>
        </Button>
    </div>
);


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
          <WhatsAppButton />
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
          <WhatsAppButton />
        </div>
      </section>

      <section className="py-12 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-primary">
              Styling Personnalisé par Niya
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-lg text-muted-foreground max-w-3xl mx-auto text-left">
               <p>
                Chez Niya's Store, nous croyons que chaque femme est unique. C'est pourquoi nous vous offrons un service de stylisme personnalisé exclusif. Niya, notre experte en mode, et son assistante IA allient savoir-faire traditionnel et tendances actuelles pour composer la tenue qui vous ressemble. 
              </p>
              <br/>
              <p>
                Que vous cherchiez une abaya pour une grande occasion, un pagne aux motifs vibrants pour affirmer votre style ou un voile délicat pour compléter votre look, décrivez-nous vos envies. Nous nous occupons de créer pour vous un ensemble harmonieux et élégant qui célèbre votre personnalité.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
              <video
                src="/videos/styling-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}