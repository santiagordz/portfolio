/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

const imageAltText = "a man with his dog watching the sunset";

const description =
  "I'm a computer science student studying in Tec de Monterrey, passionate in Fullstack developing, and computer engineering. I'm currently working as a BackEnd developer in my own startup.";

const skillsList = [
  "Database Design",
  "API Development",
  "Backend Development",
  "Automatic Testing",
  "Learning Cybersecurity",
  "Learning Cloud Computing",
];

const detailOrQuote =
  "I'm a very passionate person, I love to learn new things, and I'm always looking for new challenges. I'm a very organized person, and I like to work in a team.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src="/images/myself.jpg" alt={imageAltText} />
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
        <h2>About Myself</h2>
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
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
