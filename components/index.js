import About from "./about";
import Contact from "./contact";
import Portfolio from "./porfolio";
import Tools from "./tools";
import $ from "./mainPage.module.scss";
import { useState, useEffect } from "react";

function MainComponent(props) {
  const [page, setPage] = useState("about");
  const pages = ["about", "portfolio", "tools", "contact"];

  const openPage = (page) => {
    setPage(page);
  };

  return (
    <div className={$.main}>
      <About openPage={openPage} open={page} />
      <Portfolio openPage={openPage} open={page} />
      <Tools openPage={openPage} open={page} />
      {/* <Contact openPage={openPage} open={page} /> */}
    </div>
  );
}

export default MainComponent;
