import { getCollection, type CollectionEntry } from "astro:content"

export const getPosts = async () => {
  const result = await getCollection("posts")  

  return result 
  }