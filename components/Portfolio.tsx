import type { Project } from "@/lib/types";

const imageAltText = "desktop with laptop";

const projectList: Project[] = [
  {
    title: "Fan Interaction Website",
    description:
      "A website that lets admin post bets and users answer what they think aboyt them.",
    url: "https://www.ajbauer8.com/",
    img: "/images/ajbauer.png",
  },
  {
    title: "Mokepon",
    description: "A game built with JS, HTML and CSS.",
    url: "https://github.com/santiagordz/Mokepon",
    img: "/images/mokepon.png",
  },
  {
    title: "Sorting Visor",
    description: "A React app that lets you visualize sorting algorithms.",
    url: "https://github.com/santiagordz/sort-visor",
    img: "/images/sort-visor.png",
  },
];

export default function Portfolio() {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src="/images/desktop.webp"
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
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="box">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                {project.img !== "" && (
                  <img
                    src={project.img}
                    alt={project.description}
                    className="project_image"
                  />
                )}
                <p className="small">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
