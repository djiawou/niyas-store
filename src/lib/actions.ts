"use server";

import { getOutfitRecommendations } from "@/ai/flows/outfit-recommendations";
import { z } from "zod";

const recommendationSchema = z.object({
  preferences: z.string().min(10, "Please describe your style preferences in a bit more detail."),
});

type State = {
  success: boolean;
  message?: string;
  recommendation?: Awaited<ReturnType<typeof getOutfitRecommendations>>;
};

export async function getOutfitRecommendationAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = recommendationSchema.safeParse({
    preferences: formData.get("preferences"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors.preferences?.[0],
    };
  }

  // In a real app, browsing history would be tracked and passed dynamically.
  const browsingHistory = ["prod-001", "prod-005"];

  try {
    const recommendation = await getOutfitRecommendations({
      productPreferences: validatedFields.data.preferences,
      browsingHistory,
    });
    return { success: true, recommendation };
  } catch (error) {
    console.error(error);
    return { success: false, message: "We had trouble getting a recommendation. Please try again later." };
  }
}
