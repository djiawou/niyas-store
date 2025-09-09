"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { getOutfitRecommendationAction } from "@/lib/actions";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "./product-card";
import type { Product } from "@/types";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";

interface OutfitRecommenderProps {
  allProducts: Product[];
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Styling..." : "Get Recommendation"}
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
    <Card className="max-w-4xl mx-auto">
      <CardContent className="p-6">
        <form action={formAction} className="flex flex-col gap-4">
          <Textarea
            name="preferences"
            placeholder="e.g., 'I'm looking for a comfortable but elegant outfit for an evening event. I prefer earthy tones and natural fabrics.'"
            rows={3}
            required
            aria-label="Outfit preferences"
          />
          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>

        {state.message && !state.success && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}

        {state.success && state.recommendation && (
          <div className="mt-6 animate-in fade-in duration-500">
            <Alert className="mb-6 bg-primary/10 border-primary/20">
              <Terminal className="h-4 w-4" />
              <AlertTitle className="font-headline text-primary">Niya's Style Note</AlertTitle>
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
