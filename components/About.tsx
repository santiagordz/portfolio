import type { AboutContent } from "@/lib/types";

export default function About({
  heading,
  description,
  skills,
  quote,
  backgroundImageSrc,
  backgroundImageAlt,
}: AboutContent) {
  return (
    <section className="padding" id="about">
      <img className="background" src={backgroundImageSrc} alt={backgroundImageAlt} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          opacity: "0.8",
        }}
      >
        <h2>{heading}</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{quote}</p>
      </div>
    </section>
  );
}
