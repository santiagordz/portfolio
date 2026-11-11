import config from "@payload-config";
import { getPayload } from "payload";

import {
  defaultAbout,
  defaultFooter,
  defaultHome,
  defaultPortfolio,
} from "@/lib/defaults";
import { mediaURL } from "@/lib/media";
import type { AboutContent, PortfolioContent, SiteProps } from "@/lib/types";

export type PortfolioPageContent = {
  home: typeof defaultHome;
  about: AboutContent;
  portfolio: PortfolioContent;
  footer: SiteProps & { primaryColor: string; secondaryColor: string; devDotTo?: string };
};

export async function getPortfolioContent(): Promise<PortfolioPageContent> {
  try {
    const payload = await getPayload({ config });

    const [siteSettings, projectDocs] = await Promise.all([
      payload.findGlobal({ slug: "site-settings", depth: 1 }),
      payload.find({
        collection: "projects",
        sort: "sortOrder",
        depth: 1,
        limit: 100,
      }),
    ]);

    const projects =
      projectDocs.docs.length > 0
        ? projectDocs.docs.map((doc) => ({
            title: doc.title,
            description: doc.description,
            url: doc.url,
            imageSrc: mediaURL(doc.image, "/images/desktop.webp"),
          }))
        : defaultPortfolio.projects;

    return {
      home: {
        name: siteSettings?.profile?.name ?? defaultHome.name,
        title: siteSettings?.profile?.title ?? defaultHome.title,
        backgroundImageSrc: mediaURL(
          siteSettings?.home?.backgroundImage,
          defaultHome.backgroundImageSrc,
        ),
      },
      about: {
        heading: siteSettings?.about?.heading ?? defaultAbout.heading,
        description: siteSettings?.about?.description ?? defaultAbout.description,
        skills:
          siteSettings?.about?.skills?.map((item) => item.skill) ??
          defaultAbout.skills,
        quote: siteSettings?.about?.quote ?? defaultAbout.quote,
        backgroundImageSrc: mediaURL(
          siteSettings?.about?.backgroundImage,
          defaultAbout.backgroundImageSrc,
        ),
        backgroundImageAlt: defaultAbout.backgroundImageAlt,
      },
      portfolio: {
        heading: siteSettings?.portfolio?.heading ?? defaultPortfolio.heading,
        sideImageSrc: mediaURL(
          siteSettings?.portfolio?.sideImage,
          defaultPortfolio.sideImageSrc,
        ),
        sideImageAlt: defaultPortfolio.sideImageAlt,
        projects,
      },
      footer: {
        name: siteSettings?.profile?.name ?? defaultFooter.name,
        title: siteSettings?.profile?.title ?? defaultFooter.title,
        email: siteSettings?.contact?.email ?? defaultFooter.email,
        gitHub: siteSettings?.contact?.gitHub ?? defaultFooter.gitHub,
        linkedIn: siteSettings?.contact?.linkedIn ?? defaultFooter.linkedIn,
        instagram: siteSettings?.contact?.instagram ?? defaultFooter.instagram,
        medium: siteSettings?.contact?.medium ?? defaultFooter.medium,
        twitter: siteSettings?.contact?.twitter ?? defaultFooter.twitter,
        youTube: siteSettings?.contact?.youTube ?? defaultFooter.youTube,
        devDotTo: siteSettings?.contact?.devDotTo ?? undefined,
        primaryColor: siteSettings?.theme?.primaryColor ?? defaultFooter.primaryColor,
        secondaryColor:
          siteSettings?.theme?.secondaryColor ?? defaultFooter.secondaryColor,
      },
    };
  } catch {
    return {
      home: defaultHome,
      about: defaultAbout,
      portfolio: defaultPortfolio,
      footer: defaultFooter,
    };
  }
}
