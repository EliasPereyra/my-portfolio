export const createSlug = (title: string) => {
  return title
    .replace(/[^A-Za-z0-9 ]/g, "")
    .trim()
    .toLocaleLowerCase()
    .replace(/\s+/g, "_")
}