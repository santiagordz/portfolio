import { primaryColor, secondaryColor, siteProps } from "@/lib/site";
import type { AboutContent, PortfolioContent, PortfolioProject } from "@/lib/types";

export const defaultAbout: AboutContent = {
  heading: "About Myself",
  description:
    "I'm a computer science student studying in Tec de Monterrey, passionate in Fullstack developing, and computer engineering. I'm currently working as a BackEnd developer in my own startup.",
  skills: [
    "Database Design",
    "API Development",
    "Backend Development",
    "Automatic Testing",
    "Learning Cybersecurity",
    "Learning Cloud Computing",
  ],
  quote:
    "I'm a very passionate person, I love to learn new things, and I'm always looking for new challenges. I'm a very organized person, and I like to work in a team.",
  backgroundImageSrc: "/images/myself.jpg",
  backgroundImageAlt: "a man with his dog watching the sunset",
};

export const defaultHome = {
  name: siteProps.name,
  title: siteProps.title,
  backgroundImageSrc: "/images/ny-skyline.jpg",
};

export const defaultPortfolio: PortfolioContent = {
  heading: "Portfolio",
  sideImageSrc: "/images/desktop.webp",
  sideImageAlt: "desktop with laptop",
  projects: [
    {
      title: "Fan Interaction Website",
      description:
        "A website that lets admin post bets and users answer what they think aboyt them.",
      url: "https://www.ajbauer8.com/",
      imageSrc: "/images/ajbauer.png",
    },
    {
      title: "Mokepon",
      description: "A game built with JS, HTML and CSS.",
      url: "https://github.com/santiagordz/Mokepon",
      imageSrc: "/images/mokepon.png",
    },
    {
      title: "Sorting Visor",
      description: "A React app that lets you visualize sorting algorithms.",
      url: "https://github.com/santiagordz/sort-visor",
      imageSrc: "/images/sort-visor.png",
    },
  ] satisfies PortfolioProject[],
};

export const defaultFooter = {
  ...siteProps,
  primaryColor,
  secondaryColor,
};
