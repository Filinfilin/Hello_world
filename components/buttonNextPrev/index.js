import React,{ useRef, useEffect } from "react";
import { useState } from "react";
import $ from "./buttonNextPrev.module.scss";
import right from "../../public/right.svg";
import left from "../../public/left.svg";
import Image from "next/image";

const ButtonNextPrev = ({ openPage, goTo, dirrection, scale }) => {

  const icon = {
    "right": right,
    "left": left 
  }

  return (
    <div
      className={`${$.arrow} ${scale ? $.scaleArrow : ""}`}
      onClick={() => openPage(goTo)}
    >
      <Image src={icon[dirrection]} height={40} width={40}/>
    </div>
  );
};

export default React.memo(ButtonNextPrev);
