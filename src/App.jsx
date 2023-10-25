import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Santiago Rodriguez",
  title: "Full Stack Developer",
  email: "santiromur@gmail.com",
  gitHub: "santiagordz",
  instagram: "",
  linkedIn: "santiago-rodríguez-murialdo-b24971219",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#15197E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
