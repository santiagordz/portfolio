import type { PortfolioContent } from "@/lib/types";

export default function Portfolio({
  heading,
  sideImageSrc,
  sideImageAlt,
  projects,
}: PortfolioContent) {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>{heading}</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={sideImageSrc}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={sideImageAlt}
          />
        </div>

        <div className="container">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="box">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                {project.imageSrc !== "" && (
                  <img
                    src={project.imageSrc}
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
