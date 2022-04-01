import { useRef, useEffect, useState } from "react";
import $ from "./about.module.scss";
import ButtonNextPrev from "../buttonNextPrev";
import Links from "../links";

const About = ({ openPage, open }) => {
  const textElement = useRef(null);
  const [textToShow, setTextToShow] = useState("");
  const [scale, setScale] = useState(false);

  useEffect(() => {
    if (open == "about") {
      setTimeout(showText, 1000);
    } else {
      setTextToShow("");
    }
  }, [open]);

  const message = [
    "Hi!",
    "My name is Ruslan and I am self-taught computer enthusiast with an interest in software development.",
    "Participating in commercial projects I gained hands-on experience of using MERN, MEVN, PERN stacks for building web applications.",
    "Through working collaboratively with other developers, design and product teams, I have developed strong communication skills, teamwork skills and problem-solving skills.",
    "Please, click on tab if you want to see more...",
  ];

  async function showText() {
    let showedText = "";
    if (textElement.current) {
      for (const text of message) {
        for (const leter of text) {
          showedText += leter;
          setTextToShow(showedText);
          await new Promise((res) => setTimeout(res, 50));
        }
        await new Promise((res) => setTimeout(res, 1500));
        showedText = "";
        setTextToShow(showedText);
      }
      setScale(true);
    }
  }

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
              <span className={$.aboutText} ref={textElement}>
                {textToShow}
                <span className={$.blinkingCursor}> |</span>
              </span>
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
