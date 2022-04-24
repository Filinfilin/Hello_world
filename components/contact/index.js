import $ from "./contact.module.scss";
import ButtonNextPrev from "../buttonNextPrev";
import emailjs from "emailjs-com";
import { useState } from "react";
import Links from "../links";

function Contact({ openPage, open }) {
  const [messageSent, setMessageSent] = useState(false);
  const [progress, setProgress] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setProgress(true);
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
            setProgress(false);
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

  const Spiner = () => (
    <div className={$.ldsring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
  return (
    <div className={$[open] || $.default}>
      <div className={$.title} onClick={() => openPage("contact")}>
        Contact
      </div>
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
              <textarea
                type="message"
                className={`${$.input} ${$.message}`}
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
                  {progress ? <Spiner /> : "Submit"}
                </button>
              )}
            </div>
            <Links />
          </form>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default Contact;
