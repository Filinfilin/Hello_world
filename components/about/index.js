import { useState, useEffect } from "react";
import $ from "./about.module.scss";
import ButtonNextPrev from "../buttonNextPrev";
import Links from "../links";
import Typewriter from "typewriter-effect";

const About = ({ openPage, open }) => {
  const [scale, setScale] = useState(false);

  useEffect(() => {
    setTimeout(() => setScale(true), 5000);
  }, []);

  const message = [
    "Hi!",
    "My name is Ruslan and I am self-taught computer enthusiast with an interest in software development.",
    "Participating in commercial projects I gained hands-on experience of using MERN, MEVN, PERN stacks for building web applications.",
    "Through working collaboratively with other developers, design and product teams, I have developed strong communication skills, teamwork skills and problem-solving skills.",
    "Please, click on tab if you want to see more...",
  ];

  return (
    <div className={$[open] || $.default}>
      {open !== "about" ? (
        <div className={$.title} onClick={() => openPage("about")}>
          About Me
        </div>
      ) : (
        <>
          <div></div>
          <div className={$.terminal}>
            <div className={$.headerPanel}>
              <div className={`${$.button} ${$.gray}`}></div>
              <div className={`${$.button} ${$.green}`}></div>
              <div className={`${$.button} ${$.red}`}></div>
            </div>
            <div className={$.terminalWindow}>
              <span className={$.terminalParagraph}>{`>_`}</span>
              <Typewriter
                className={$.aboutText}
                options={{
                  strings: message,
                  autoStart: true,
                  loop: true,
                  delay: 35,
                  deleteSpeed: 20,
                }}
              >
                <span className={$.blinkingCursor}> |</span>
              </Typewriter>
            </div>
            <Links />
          </div>
          <ButtonNextPrev
            dirrection={"right"}
            openPage={openPage}
            scale={scale}
            goTo={"portfolio"}
          />
        </>
      )}
    </div>
  );
};

export default About;
