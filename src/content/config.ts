import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().max(80),
      description: z.string(),
      coverImg: image(),
      tags: z.array(z.string()),
      publishDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
    }),
});

export const collections = { blog };
