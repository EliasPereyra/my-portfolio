import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.HEAD ||
  "newversion";

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "src/assets",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "posts",
        label: "Blog posts",
        path: "src/content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "publishDate", 
            label: "Publication Date",
            required: true
          },
          {
            type: "image",
            name: "coverImg",
            label: "Cover Image",
            required: true,
            description: "A cover image used for each post"
          },
          {
            type: "datetime",
            name: "lengReadingTime",
            label: "Content Length Reading Time",
            required: false,
            description: "The time estimated for reading a post"
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
            description: "Tags for each post",
            list: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            description: "If it's a draft, then it's not published yet"
          }
        ],
      },
    ],
  },
});
