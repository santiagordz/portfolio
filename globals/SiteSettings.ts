import type { GlobalConfig } from "payload";

import { anyone } from "@/access/anyone";
import { authenticated } from "@/access/authenticated";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: "profile",
      type: "group",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "title", type: "text", required: true },
      ],
    },
    {
      name: "contact",
      type: "group",
      fields: [
        { name: "email", type: "email", required: true },
        { name: "gitHub", type: "text" },
        { name: "linkedIn", type: "text" },
        { name: "instagram", type: "text" },
        { name: "medium", type: "text" },
        { name: "twitter", type: "text" },
        { name: "youTube", type: "text" },
        { name: "devDotTo", type: "text" },
      ],
    },
    {
      name: "theme",
      type: "group",
      fields: [
        { name: "primaryColor", type: "text", required: true },
        { name: "secondaryColor", type: "text", required: true },
      ],
    },
    {
      name: "home",
      type: "group",
      fields: [
        {
          name: "backgroundImage",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "about",
      type: "group",
      fields: [
        { name: "heading", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        {
          name: "skills",
          type: "array",
          fields: [{ name: "skill", type: "text", required: true }],
        },
        { name: "quote", type: "textarea", required: true },
        {
          name: "backgroundImage",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "portfolio",
      type: "group",
      fields: [
        { name: "heading", type: "text", required: true },
        {
          name: "sideImage",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
