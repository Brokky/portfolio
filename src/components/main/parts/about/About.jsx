import SkillIcon from "./parts/SkillIcon";
import {
  faHtml5,
  faCss3,
  faSquareJs,
  faReact,
  faNpm,
  faSquareGit,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  {
    src: faHtml5,
    name: "HTML5",
  },
  {
    src: faCss3,
    name: "CSS3",
  },
  {
    src: faSquareJs,
    name: "JS (ES6+)",
  },
  {
    src: faReact,
    name: "React",
  },
  {
    src: faNpm,
    name: "NPM",
  },
  {
    src: faSquareGit,
    name: "Git",
  },
];

const About = ({ visibility }) => {
  return (
    <section
      className={`flex flex-row items-center justify-around py-12 border-2 border-green-600 rounded-3xl ${visibility}`}
    >
      <h2 className="text-5xl font-mono tracking-widest">About Me</h2>
      <article className="max-w-lg space-y-4 text-justify">
        <p className="text-lg leading-relaxed">
          Hello! I'm Daniel Brokk, a frontend developer specializing in React. I
          genuinely enjoy web development and constantly seek ways to improve.
          For me, it's about crafting functional sites and apps that users will
          love. Quality work and continuous learning are at the heart of what I
          do.
        </p>
        <p className="text-lg leading-relaxed">
          I'm always eager to embrace new challenges and improve my skills.
          Let's create something amazing together!
        </p>
      </article>

      <div className="flex flex-wrap w-1/4 justify-center items-center gap-y-2">
        {icons.map((icon) => (
          <SkillIcon key={icon.name} icon={icon.src} name={icon.name} />
        ))}
      </div>
    </section>
  );
};

export default About;
