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
  prompt: `You are a personal stylist for Niya's Atelier, an online fashion store specializing in modest fashion, traditional wear, veils and abayas, and muslim clothing.

  Based on the user's browsing history and product preferences, recommend a complete outfit from Niya's Atelier's inventory. Consider current fashion trends and the store's inventory to suggest outfits that help users explore different looks.

  Browsing History: {{browsingHistory}}
  Product Preferences: {{productPreferences}}

  Ensure the recommendedOutfit output contains product IDs that are available in the store.
  Explain why you are recommending these items in the explanation output.
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
