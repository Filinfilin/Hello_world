import $ from "./tools.module.scss";
import api from "../../public/api.png";
import css from "../../public/css.png";
import gitlab from "../../public/gitlab.png";
import html5 from "../../public/html5.png";
import mongodb from "../../public/mongodb.png";
import nextjs from "../../public/nextjs.png";
import node from "../../public/node.png";
import psql from "../../public/psql.png";
import reactjs from "../../public/reactjs.png";
import responsive from "../../public/responsive.png";
import vue from "../../public/vue.png";
import ts from "../../public/ts.png";
import git from "../../public/github.png";
import sass from "../../public/sass.png";
import Image from "next/image";
import ButtonNextPrev from "../buttonNextPrev";
import js from "../../public/js.png";

const cards = [
  { image: api, name: "API", link: "https://en.wikipedia.org/wiki/API" },
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
    link: "https://en.wikipedia.org/wiki/Next.js",
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
    link: "https://en.wikipedia.org/wiki/PostgreSQL",
  },
  {
    image: reactjs,
    name: "ReactJS",
    link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
  },
  {
    image: responsive,
    name: "Resposive",
    link: "https://en.wikipedia.org/wiki/Responsive_web_design",
  },
  { image: vue, name: "VueJS", link: "https://en.wikipedia.org/wiki/Vue.js" },
  {
    image: ts,
    name: "TypeScript",
    link: "https://en.wikipedia.org/wiki/TypeScript",
  },
  { image: git, name: "GitHub", link: "https://en.wikipedia.org/wiki/GitHub" },
  {
    image: sass,
    name: "Sass",
    link: "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)",
  },
];

function Tools({ openPage, open }) {
  return (
    <div className={$[open] || $.default}>
      {open !== "tools" ? (
        <h1 className={$.title} onClick={() => openPage("tools")}>
          Tools
        </h1>
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
                    <Image src={item.image} className={$.image} />
                    <div className={$.description}>{item.name}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          {/* <ButtonNextPrev
            dirrection={"right"}
            openPage={openPage}
            goTo={"contact"}
          /> */}
        </div>
      )}
    </div>
  );
}

export default Tools;
