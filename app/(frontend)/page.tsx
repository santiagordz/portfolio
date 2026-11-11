import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import { getPortfolioContent } from "@/lib/get-portfolio-content";

export default async function Page() {
  const content = await getPortfolioContent();

  return (
    <div id="main">
      <Header />
      <Home
        name={content.home.name}
        title={content.home.title}
        backgroundImageSrc={content.home.backgroundImageSrc}
      />
      <About {...content.about} />
      <Portfolio {...content.portfolio} />
      <Footer {...content.footer} />
    </div>
  );
}
