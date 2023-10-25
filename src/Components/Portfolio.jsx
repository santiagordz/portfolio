import React from "react";
import image from "../images/desktop.webp";
import ajbauer from "../images/ajbauer.png";
import sortingVisor from "../images/sort-visor.png";
import mokepon from "../images/mokepon.png";
const imageAltText = "desktop with laptop";

const projectList = [
  {
    title: "Fan Interaction Website",
    description: "A website that lets admin post bets and users answer what they think aboyt them.",
    url: "https://www.ajbauer8.com/",
    img: ajbauer,
  },
  {
    title: "Mokepon",
    description: "A game built with JS, HTML and CSS.",
    url: "https://github.com/santiagordz/Mokepon",
    img: mokepon,
  },
  {
    title: "Sorting Visor",
    description: "A React app that lets you visualize sorting algorithms.",
    url: "https://github.com/santiagordz/sort-visor",
    img: sortingVisor,
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>

        <div className="container">
          {projectList.map((project) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div className='box' key={project.title}>
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                  {project.img !== "" && (
                    <img src={project.img} alt={project.description} className="project_image"/>
                  )}
                <p className="small">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
