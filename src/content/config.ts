import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: ({ image }) => 
    z.object({
      title: z.string().max(70),
      description: z.string(),
      coverImg: image(),
      publishDate: z.string().or(z.date()).transform(val => new Date(val)),
      tags: z.array(z.string()),
      draft: z.boolean().default(false)
    })
  }
)

export const collections = {posts}