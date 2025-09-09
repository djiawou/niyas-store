"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { getOutfitRecommendationAction } from "@/lib/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductCard } from "./product-card";
import type { Product } from "@/types";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Sparkles } from "lucide-react";

interface OutfitRecommenderProps {
  allProducts: Product[];
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Recherche en cours..." : "Obtenir une recommandation"}
    </Button>
  );
}

export function OutfitRecommender({ allProducts }: OutfitRecommenderProps) {
  const [state, formAction] = useFormState(getOutfitRecommendationAction, {
    success: false,
  });

  const recommendedProducts = state.recommendation?.recommendedOutfit
    .map(productId => allProducts.find(p => p.id === productId))
    .filter((p): p is Product => p !== undefined);

  return (
    <Card className="max-w-4xl mx-auto border-none shadow-none bg-transparent">
        <CardContent className="p-0">
        <form action={formAction} className="flex flex-col gap-4">
          <Textarea
            name="preferences"
            placeholder="Ex: 'Je cherche une tenue confortable et élégante pour une soirée. Je préfère les tons terreux et les tissus naturels.'"
            rows={3}
            required
            aria-label="Préférences de tenue"
            className="bg-background"
          />
          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>

        {state.message && !state.success && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}

        {state.success && state.recommendation && (
          <div className="mt-6 animate-in fade-in duration-500">
            <Alert className="mb-6 border-primary/30">
              <Sparkles className="h-4 w-4 text-primary" />
              <AlertTitle className="font-headline text-primary">La note de style de Niya</AlertTitle>
              <AlertDescription>
                {state.recommendation.explanation}
              </AlertDescription>
            </Alert>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {recommendedProducts?.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
