import AnchorLink from "react-anchor-link-smooth-scroll";
import { navbarMenu } from "../data";
import waveHandSvg from "../../assets/images/wave-hand.svg";
import cross from "../../assets/images/cross.svg";

interface SidebarProps {
  onClose: () => void;
  onMenuClick: (menu: string) => void;
  currentPage: string;
}

function Sidebar({ onClose, onMenuClick, currentPage }: SidebarProps) {
  return (
    <div className="fixed lg:hidden top-0 right-0 bg-[rgba(0,0,0,0.5)] h-screen w-screen z-30 ">
      <div className="relative float-right">
        <div className="bg-[#1f0016] p-6 h-screen w-[300px]">
          <img
            src={cross}
            alt="cross"
            onClick={onClose}
            className="float-right"
          />

          <ul className="flex flex-col gap-8 my-16">
            {navbarMenu.map((nav) => {
              const { title, id } = nav;
              const showImage = currentPage === title;
              return (
                <li
                  key={id}
                  className="flex gap-4 items-center font-semibold text-xl cursor-pointer"
                  onClick={() => onMenuClick(title)}
                >
                  <AnchorLink href={id}>{title}</AnchorLink>
                  {showImage ? (
                    <img src={waveHandSvg} alt="wave-hand" className="w-7" />
                  ) : (
                    <></>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
