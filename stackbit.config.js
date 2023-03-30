import { ContentfulContentSource } from "@stackbit/cms-contentful";

export default {
  stackbitVersion: "~0.6.0",
  ssgName: "gatsby",
  nodeVersion: "18",
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environment: "master",
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    }),
  ],
  models: {
    page: { type: "page", urlPath: "/{slug}" },
    hero: {
      type: "object",
      fields: [
        { type: "string", name: "h1" },
        { type: "string", name: "h2" },
        { type: "string", name: "paragraph" },
      ],
    },
  },
};
