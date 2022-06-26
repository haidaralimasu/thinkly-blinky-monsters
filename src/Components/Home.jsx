import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Investor from "./Investor";
import Pricing from "./Pricing";
import Road from "./Road";
import Roadmap from "./Roadmap";
import Team from "./Team";
export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <Investor />
        <Pricing />
        <Road />
        <Roadmap />
        <About />
        <Team />
        <Contact />
      </div>
    </>
  );
}
