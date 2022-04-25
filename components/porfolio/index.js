import $ from "./portfolio.module.scss";
import Image from "next/image";
import ButtonNextPrev from "../buttonNextPrev";

const Portfolio = ({ openPage, open }) => {
  const cards = [
    {
      style: [$.one],
      name: "Prodcast platform",
      stack: [
        "NodeJS",
        "ExpressJS",
        "PostgreSQL",
        "ReactJS",
        "AntD",
        "Context",
      ],
      description:
        "<span>Platform has features for upload/download/editing records, paid subscriptions with Stripe, admin panel, personal accounts, google analytics and NGINX load balancing.</span>",
      image:
        "https://res.cloudinary.com/dxsalxqoo/image/upload/v1647565000/aixc0egimwrzzwynfiti.gif",
    },
    {
      style: [$.two],
      name: "Realtime chat app",
      stack: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "PostgreSQL",
        "Redux Tk",
        "WebSocket",
      ],
      description:
        "<span>App has opportunity to get/send messages and images in a real time frame.</span>",
      image:
        "https://res.cloudinary.com/dxsalxqoo/image/upload/v1647564999/zorabcx7cmlzdl2xoawm.gif",
    },
    {
      style: [$.three],
      name: "Real Estate",
      stack: ["ReactJS", "NextJS", "Styled Components", "Context"],
      description:
        "<span> The company service presentation page with information about the company and feedback form. Features: sliders and SVG animaton during scroll.</span>",
      image:
        "https://res.cloudinary.com/dxsalxqoo/image/upload/v1647564999/ybuuva63hrel0s1zzkki.gif",
    },
  ];

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

  const Description = ({ name, stack, description }) => {
    return (
      <div className={$.descriptionBox}>
        <div className={$.projectName}>{name}</div>
        <div className={$.stackWrapper}>
          {stack?.map((item, index) => (
            <div className={$.stack} key={index + "stack"}>
              {item}
            </div>
          ))}
        </div>
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
              <div className={$.activeTitle}>Portfolio</div>
              {open == "portfolio" &&
                cards.map((item, index) => (
                  <div className={`${$.card} ${item.style}`} key={item.name}>
                    {index % 2 != 0 ? (
                      <>
                        <Preview src={item.image} />
                        <Description
                          name={item.name}
                          description={item.description}
                          stack={item.stack}
                        />
                      </>
                    ) : (
                      <>
                        <Description
                          name={item.name}
                          description={item.description}
                          stack={item.stack}
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
