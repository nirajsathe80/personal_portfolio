import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { navbarMenu } from "../data";
import waveHandSvg from "../../assets/images/wave-hand.svg";
import menu from "../../assets/images/menu.svg";
import Sidebar from "../sidebar";

function Navbar() {
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState<boolean>(false);

  const handleCloseSidebar = () => {
    setIsSidebarMenuOpen(false);
  };

  const handleMenuClick = (menu: string) => {
    setCurrentPage(menu);
    setIsSidebarMenuOpen(false);
  };

  return (
    <nav className="my-5 sm:mx-[10%] mx-0 flex items-center justify-between">
      <div className="w-max relative">
        <p className="text-2xl font-bold">Niraj</p>
        <img
          src={waveHandSvg}
          alt="wave-hand"
          className="absolute w-24 bottom-0 right-[-24px] z-[-1]"
        />
      </div>
      <ul className="lg:flex gap-10 text-base list-none items-center uppercase relative  hidden">
        {navbarMenu.map((nav, index) => {
          const { title, id } = nav;
          const isSelected = currentPage === title;

          return (
            <li
              key={index}
              onClick={() => setCurrentPage(title)}
              className={`relative pb-4`}
            >
              <AnchorLink href={id}>{title}</AnchorLink>
              {isSelected ? (
                <img
                  src={waveHandSvg}
                  alt="wave-hand"
                  className="absolute w-9 top-[70%] left-1/2  z-[-1] transform -translate-x-1/2 -translate-y-1/2"
                />
              ) : (
                <></>
              )}
            </li>
          );
        })}
      </ul>
      <div className="rounded-[50px] px-5 py-4 linear-gradient-bg zoom-effect lg:block hidden">
        <AnchorLink href="#contact">Contact With Me</AnchorLink>
      </div>
      <div
        className="lg:hidden block cursor-pointer h-8"
        onClick={() => setIsSidebarMenuOpen(true)}
      >
        <img src={menu} alt="menu-svg" />
      </div>

      {isSidebarMenuOpen ? (
        <Sidebar
          onClose={handleCloseSidebar}
          onMenuClick={handleMenuClick}
          currentPage={currentPage}
        />
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Navbar;
