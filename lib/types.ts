export type SiteProps = {
  name: string;
  title: string;
  email: string;
  gitHub: string;
  instagram: string;
  linkedIn: string;
  medium: string;
  twitter: string;
  youTube: string;
};

export type HomeProps = {
  name?: string;
  title?: string;
  backgroundImageSrc?: string;
};

export type FooterProps = SiteProps & {
  devDotTo?: string;
  primaryColor: string;
  secondaryColor?: string;
};

export type AboutContent = {
  heading: string;
  description: string;
  skills: string[];
  quote: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
};

export type PortfolioProject = {
  title: string;
  description: string;
  url: string;
  imageSrc: string;
};

export type PortfolioContent = {
  heading: string;
  sideImageSrc: string;
  sideImageAlt: string;
  projects: PortfolioProject[];
};
