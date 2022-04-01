import $ from "./tools.module.scss";
import api from "../../public/api-1.svg";
import css from "../../public/css.svg";
import gitlab from "../../public/gitlab.png";
import html5 from "../../public/html5.png";
import mongodb from "../../public/mongodb.svg";
import nextjs from "../../public/next.svg";
import node from "../../public/node.svg";
import psql from "../../public/postgresql.svg";
import reactjs from "../../public/reactjs.png";
import responsive from "../../public/responsive.svg";
import vue from "../../public/vuejs.svg";
import ts from "../../public/typescript.svg";
import tailwind from "../../public/tailwind.svg"
import git from "../../public/github.svg";
import sass from "../../public/sass.svg";
import Image from "next/image";
import ButtonNextPrev from "../buttonNextPrev";
import js from "../../public/js.svg";

const cards = [
  { image: api, name: "API", link: "https://en.wikipedia.org/wiki/API" },
  { image: tailwind, name: "Tailwind CSS", link: "https://tailwindcss.com/" },
  { image: css, name: "CSS", link: "https://en.wikipedia.org/wiki/CSS" },
  {
    image: gitlab,
    name: "GitLab",
    link: "https://en.wikipedia.org/wiki/GitLab",
  },
  { image: html5, name: "HTML 5", link: "https://en.wikipedia.org/wiki/HTML5" },
  {
    image: mongodb,
    name: "MongoDB",
    link: "https://en.wikipedia.org/wiki/MongoDB",
  },
  {
    image: nextjs,
    name: "NextJS",
    link: "https://nextjs.org/",
  },
  {
    image: js,
    name: "JavaScript",
    link: "https://en.wikipedia.org/wiki/JavaScript",
  },
  {
    image: node,
    name: "NodeJS",
    link: "https://en.wikipedia.org/wiki/Node.js",
  },
  {
    image: psql,
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  {
    image: reactjs,
    name: "ReactJS",
    link: "https://ru.reactjs.org/",
  },
  {
    image: responsive,
    name: "Responsive",
    link: "https://en.wikipedia.org/wiki/Responsive_web_design",
  },
  { image: vue, name: "VueJS", link: "https://vuejs.org/" },
  {
    image: ts,
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  { image: git, name: "GitHub", link: "https://github.com/" },
  {
    image: sass,
    name: "Sass",
    link: "https://sass-lang.com/",
  },
];

function Tools({ openPage, open }) {
  return (
    <div className={$[open] || $.default}>
      {open !== "tools" ? (
        <div className={$.title} onClick={() => openPage("tools")}>
         My Tools
        </div>
      ) : (
        <div className={$.wrapper}>
          <ButtonNextPrev
            dirrection={"left"}
            openPage={openPage}
            goTo={"portfolio"}
          />
          <div className={$.iconWrapper}>
            {cards.map((item) => (
              <div className={$.iconBox} key={item.name}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div className={$.imageBox}>
                    <Image src={item.image} className={$.image} height={100} width={100}/>
                    <div className={$.description}>{item.name}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <ButtonNextPrev
            dirrection={"right"}
            openPage={openPage}
            goTo={"contact"}
          />
        </div>
      )}
    </div>
  );
}

export default Tools;
