import { title } from "process";
import { defineStaticConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH || process.env.HEAD || "main";

export default defineStaticConfig({
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
        name: "post",
        label: "Blog posts",
        path: "src/content/blog",
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
            required: true,
          },
          {
            type: "image",
            name: "coverImg",
            label: "Cover Image",
            required: true,
            description: "A cover image used for each post",
          },
          {
            type: "datetime",
            name: "lengReadingTime",
            label: "Content Length Reading Time",
            required: false,
            description: "The time estimated for reading a post",
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
            description: "If it's a draft, then it's not published yet",
          },
        ],
      },
      {
        name: "projects",
        label: "Projects",
        path: "src/content/projects",
        format: "mdx",
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
            description: "Title of the project",
          },
          {
            name: "description",
            type: "string",
            label: "Description",
            required: true,
            description: "A short description of the project",
          },
          {
            name: "project_img",
            type: "string",
            label: "Project Image",
            required: true,
            description: "The cover image of the project",
          },
          {
            name: "github_repo",
            type: "string",
            label: "Github Repo",
            required: true,
            description: "The link to the github repo",
          },
          {
            name: "live_link",
            type: "string",
            label: "Live Link",
            required: false,
            description: "The link to the live version of the project",
          },
          {
            name: "summary",
            type: "string",
            label: "Summary",
            required: true,
            description: "A short summary of the project",
          },
          {
            name: "key_features",
            type: "string",
            list: true,
            label: "Key Features",
            required: true,
            description: "The key features of the project",
          },
          {
            name: "design_goals",
            type: "object",
            list: true,
            fields: [
              {
                name: "title",
                type: "string",
              },
              {
                name: "description",
                type: "string",
              },
            ],
            label: "Design Goals",
            required: false,
            description: "The design goals of the project",
          },
        ],
      },
    ],
  },
});
