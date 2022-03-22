import $ from "./contact.module.scss";
import gitIcon from "../../public/github.png";
import linkedIn from "../../public/linkedin.png";
import Image from "next/image";
import ButtonNextPrev from "../buttonNextPrev";
import emailjs from "emailjs-com";
import { useState } from "react";

function Contact({ openPage, open }) {
  const [messageSent, setMessageSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_EMAIL_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        e.target,
        `${process.env.NEXT_PUBLIC_USER_ID}`
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            setMessageSent(true);
          } else {
            console.log(result.text);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
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
          <form
            onSubmit={handleSubmit}
            className={$.form}
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
          >
            <div className={$.nameContainer}>
              <div>
                <input
                  type="text"
                  className={$.input}
                  placeholder="First name"
                  name="first_name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className={$.input}
                  placeholder="Last name"
                  name="last_name"
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                className={$.input}
                placeholder="Email"
                name="email"
              />
            </div>
            <div>
              <input
                type="text"
                className={$.input}
                height={180}
                placeholder="Phone number"
                name="phone"
              />
            </div>
            <div>
              <input
                type="text"
                className={$.input}
                placeholder="Input your message"
                name="message"
              />
            </div>
            <div>
              {messageSent ? (
                <span className={$.folowText}>Thank you for your message!</span>
              ) : (
                <button
                  onClick={() => console.log("Submit")}
                  className={$.buttonSubmit}
                >
                  submit
                </button>
              )}
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
