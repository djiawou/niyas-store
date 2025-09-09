'use server';

/**
 * @fileOverview Provides AI-powered outfit recommendations based on user browsing history and preferences.
 *
 * - getOutfitRecommendations - A function that retrieves outfit recommendations.
 * - OutfitRecommendationsInput - The input type for the getOutfitRecommendations function.
 * - OutfitRecommendationsOutput - The return type for the getOutfitRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OutfitRecommendationsInputSchema = z.object({
  browsingHistory: z
    .array(z.string())
    .describe('An array of product IDs representing the user\'s browsing history.'),
  productPreferences: z
    .string()
    .describe('A string describing the user\'s product preferences.'),
});
export type OutfitRecommendationsInput = z.infer<
  typeof OutfitRecommendationsInputSchema
>;

const OutfitRecommendationsOutputSchema = z.object({
  recommendedOutfit: z
    .array(z.string())
    .describe('An array of product IDs representing the recommended outfit.'),
  explanation: z
    .string()
    .describe('An explanation of why the outfit was recommended.'),
});
export type OutfitRecommendationsOutput = z.infer<
  typeof OutfitRecommendationsOutputSchema
>;

export async function getOutfitRecommendations(
  input: OutfitRecommendationsInput
): Promise<OutfitRecommendationsOutput> {
  return outfitRecommendationsFlow(input);
}

const outfitRecommendationsPrompt = ai.definePrompt({
  name: 'outfitRecommendationsPrompt',
  input: {schema: OutfitRecommendationsInputSchema},
  output: {schema: OutfitRecommendationsOutputSchema},
  prompt: `Vous êtes un styliste personnel pour Niya's Store, une boutique de mode en ligne spécialisée dans la mode pudique, les vêtements traditionnels (y compris les pagnes), les voiles, les abayas et les vêtements musulmans.

  En vous basant sur l'historique de navigation de l'utilisateur et ses préférences de produits, recommandez une tenue complète à partir de l'inventaire de Niya's Store. Tenez compte des tendances actuelles de la mode et de l'inventaire du magasin pour suggérer des tenues qui aident les utilisateurs à explorer différents looks.

  Historique de navigation : {{browsingHistory}}
  Préférences du produit : {{productPreferences}}

  Assurez-vous que la sortie recommendedOutfit contienne des ID de produits disponibles dans le magasin.
  Expliquez pourquoi vous recommandez ces articles dans la sortie d'explication.
  `,
});

const outfitRecommendationsFlow = ai.defineFlow(
  {
    name: 'outfitRecommendationsFlow',
    inputSchema: OutfitRecommendationsInputSchema,
    outputSchema: OutfitRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await outfitRecommendationsPrompt(input);
    return output!;
  }
);
