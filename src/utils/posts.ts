import { getCollection, type CollectionEntry } from "astro:content";

export const getPosts = async () => {
  const result = await getCollection("posts");

  return result;
};

export const getPostsByCategory = async () => {
  const allPosts = await getCollection("posts");

  return allPosts.map((post) => post.data);
};

const searchPostsByCategory = async (tag: string) => {
  const allPosts = await getCollection("posts");

  return allPosts.filter((post) => post.data.tags.includes(tag));
};
