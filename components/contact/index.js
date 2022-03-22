import $ from "./contact.module.scss";
import gitIcon from "../../public/github.png";
import linkedIn from "../../public/linkedin.png";
import Image from "next/image";
import arrowLeft from "../../public/arrowLeft.png";
import ButtonNextPrev from "../buttonNextPrev";

function Contact({ openPage, open }) {
  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className={$[open] || $.default}>
      <h1 className={$.title} onClick={() => openPage("contact")}>
        Contact
      </h1>
      {open == "contact" && (
        <div className={$.formWrapper}>
          <ButtonNextPrev
            dirrection={"left"}
            openPage={openPage}
            goTo={"tools"}
          />
          <form onSubmit={handleSubmit} className={$.form}>
            <div className={$.nameContainer}>
              <div>
                <input
                  type="text"
                  className={$.input}
                  placeholder="First name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className={$.input}
                  placeholder="Last name"
                />
              </div>
            </div>
            <div>
              <input type="email" className={$.input} placeholder="Email" />
            </div>
            <div>
              <input
                type="text"
                className={$.input}
                height={180}
                placeholder="Phone number"
              />
            </div>
            <div>
              <input
                type="text"
                className={$.input}
                placeholder="Input your message"
              />
            </div>
            <div>
              <button
                onClick={() => console.log("Submit")}
                className={$.buttonSubmit}
              >
                submit
              </button>
            </div>
            <span className={$.folowText}>Follow me on:</span>
            <div className={$.links}>
              <div className={$.git}>
                <a
                  href="https://github.com/Filinfilin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={gitIcon} height={50} width={50} />
                </a>
              </div>
              <div className={$.linkedIn}>
                <a
                  href="https://www.linkedin.com/in/ruslan-f-084573139/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={linkedIn} height={50} width={50} />{" "}
                </a>
              </div>
            </div>
          </form>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default Contact;
