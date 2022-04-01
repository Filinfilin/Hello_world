import React from "react";
import gitIcon from "../../public/github.svg";
import linkedIn from "../../public/linkedin.svg";
import Image from "next/image";
import $ from "./links.module.scss";

export default function Links() {
  return (
    <div className={$.links}>
      <div className={$.git}>
        <a
          href="https://github.com/Filinfilin/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={gitIcon} height={57} width={57} />
        </a>
      </div>
      <div className={$.linkedIn}>
        <a
          href="https://www.linkedin.com/in/ruslan-f-084573139/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={linkedIn} height={50} width={50} />
        </a>
      </div>
    </div>
  );
}
