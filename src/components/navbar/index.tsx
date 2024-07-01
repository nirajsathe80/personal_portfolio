import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  return (
    <div className="my-5 mx-[10%] flex items-center justify-between">
      <p className="text-2xl italic">Portfolio</p>
      <ul className="flex gap-10 text-base list-none items-center">
        <li>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#skills">Skills</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#experience">Experience</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#projects">Projects</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>
      <div className="navbar-btn">
        <AnchorLink href="#contact" className="">
          Contact With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
