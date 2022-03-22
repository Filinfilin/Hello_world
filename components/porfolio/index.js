import $ from "./portfolio.module.scss";
import Image from "next/image";
import { useState } from "react";
import ButtonNextPrev from "../buttonNextPrev";

const Portfolio = ({ openPage, open }) => {
  const [position, setPosition] = useState("");
  const cards = [
    {
      name: "Prodcast platform",
      description:
        "<span>Build with: NodeJS, ExpressJS, PostgreSQL, ReactJS, AntD, Context. <br> Platform has features for upload/download/editing records, paid subscriptions with Stripe, admin panel, personal accounts, google analytics and NGINX load balancing.</span>",
      image:
        "https://res.cloudinary.com/dxsalxqoo/image/upload/v1647565000/aixc0egimwrzzwynfiti.gif",
    },
    {
      name: "Realtime chat app",
      description:
        "<span>Project build with: ReactJS, NodeJS, ExpressJS, PostgreSQL, Redux Toolkit, WebSocket. <br> App has opportunity to get/send messages and images in a real time frame.</span>",
      image:
        "https://res.cloudinary.com/dxsalxqoo/image/upload/v1647564999/zorabcx7cmlzdl2xoawm.gif",
    },
    {
      name: "Real Estate",
      description:
        "<span>Technologies: ReactJS, NextJS, Styled Components, Context. <br> The company service presentation page with information about the company and feedback form. Features: sliders and SVG animaton during scroll.</span>",
      image:
        "https://res.cloudinary.com/dxsalxqoo/image/upload/v1647564999/ybuuva63hrel0s1zzkki.gif",
    },
  ];

  const slider = () => {};

  const Preview = (src) => {
    return (
      <div className={$.image}>
        <Image
          className={$.preview}
          src={src}
          alt="Mountains"
          layout="fill"
          objectFit="cover"
        />
      </div>
    );
  };

  const Description = ({ name, description }) => {
    return (
      <div className={$.descriptionBox}>
        <div className={$.projectName}>{name}</div>
        <div
          className={$.projectDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    );
  };

  return (
    <div className={$[open] || $.default}>
      {open !== "portfolio" ? (
        <div className={$.title} onClick={() => openPage("portfolio")}>
        Portfolio
        </div>
      ) : (
        <>
          <ButtonNextPrev
            dirrection={"left"}
            openPage={openPage}
            goTo={"about"}
          />

          <div className={$.sliderWrapper}>
            <div className={$.gradient}></div>
            <div className={$.cards}>
              {open == "portfolio" &&
                cards.map((item, index) => (
                  <div className={`${$.card} ${$.active}`} key={item.name}>
                    {index % 2 != 0 ? (
                      <>
                        <Preview src={item.image} />
                        <Description
                          name={item.name}
                          description={item.description}
                        />
                      </>
                    ) : (
                      <>
                        <Description
                          name={item.name}
                          description={item.description}
                        />
                        <Preview src={item.image} />
                      </>
                    )}
                  </div>
                ))}
            </div>
          </div>
          <ButtonNextPrev
            dirrection={"right"}
            openPage={openPage}
            goTo={"tools"}
          />
        </>
      )}
    </div>
  );
};

export default Portfolio;
