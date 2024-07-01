import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { navbarMenu } from "../data";

function Navbar() {
  const [currentSection, setCurrentSection] = useState("Home");

  return (
    <nav className="my-5 mx-[10%] flex items-center justify-between">
      <p className="text-2xl font-bold">Niraj</p>
      <ul className="flex gap-10 text-base list-none items-center uppercase">
        {navbarMenu.map((nav, index) => {
          const { title, id } = nav;
          return (
            <li
              key={index}
              onClick={() => setCurrentSection(title)}
              className={`${currentSection === title ? "underline" : ""}`}
            >
              <AnchorLink href={id}>{title}</AnchorLink>
            </li>
          );
        })}
      </ul>
      <div className="navbar-btn linear-gradient-bg zoom-effect">
        <AnchorLink href="#contact" className="">
          Contact With Me
        </AnchorLink>
      </div>
    </nav>
  );
}

export default Navbar;
