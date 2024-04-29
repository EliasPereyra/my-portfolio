import { getCollection } from "astro:content";

export const getPosts = async () => {
  const result = await getCollection("posts");

  return result;
};

export const getPostTags = async () => {
  const allPosts = await getPosts();

  const _tags = new Set<string>();

  allPosts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      _tags.add(tag);
    });
  });
  return Array.from(_tags);
};

export const getPostsByTag = async (tag: string) => {
  const allPosts = await getPosts();
  const tagInLowerCase = tag.toLocaleLowerCase();

  return allPosts.filter((post) =>
    post.data.tags.some((tag) => tag.toLocaleLowerCase() === tagInLowerCase),
  );
};
