import type { HomeProps } from "@/lib/types";

const imageAltText = "New York City Skyline";

export default function Home({ name = "", title = "" }: HomeProps) {
  return (
    <section id="home" className="min-height">
      <img className="background" src="/images/ny-skyline.jpg" alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1 style={{ color: "#94fff5" }}>{name}</h1>
        <h2 style={{ color: "#3e7d9b" }}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img
          src="/images/down-arrow.svg"
          style={{ height: "3rem", width: "3rem" }}
          alt={imageAltText}
        />
      </div>
    </section>
  );
}
