import type { SiteProps } from "./site";

export type HomeProps = {
  name?: string;
  title?: string;
};

export type FooterProps = SiteProps & {
  devDotTo?: string;
  primaryColor: string;
  secondaryColor?: string;
};

export type Project = {
  title: string;
  description: string;
  url: string;
  img: string;
};
