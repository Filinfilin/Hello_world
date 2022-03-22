import $ from "./portfolio.module.scss";
import Image from "next/image";
import { useState } from "react";
import ButtonNextPrev from "../buttonNextPrev";

const Portfolio = ({ openPage, open }) => {
  const [position, setPosition] = useState("");
  const cards = [
    {
      name: "Rentaousing",
      description:
        "The standard chunk of Lorem Ipsum used sincethe 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      image:
        "https://res.cloudinary.com/dxsalxqoo/image/upload/v1647565000/aixc0egimwrzzwynfiti.gif",
    },
    {
      name: "Rentalhousing",
      description:
        "The standard chunk of Lorem Ipsum used sincethe 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      image:
        "https://res.cloudinary.com/dxsalxqoo/image/upload/v1647564999/zorabcx7cmlzdl2xoawm.gif",
    },
    {
      name: "Renhousing",
      description:
        "The standard chunk of Lorem Ipsum used sincethe 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
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
        <div className={$.projectDescription}>{description}</div>
      </div>
    );
  };

  return (
    <div className={$[open] || $.default}>
      {open !== "portfolio" ? (
        <h1 className={$.title} onClick={() => openPage("portfolio")}>
          Portfolio
        </h1>
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
