import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div className="flex items-center flex-col gap-5 mx-auto">
      <img
        src="https://greatstack.in/portfolio/assets/profile_img-isMTF2gD.svg"
        alt="hero image"
        className="mt-4"
      />
      <h1 className="text-4xl leading-[60px] text-center w-[70%]">
        <span className="hero-text">I'm Niraj Sathe,</span>frontend developer
        with 2+ years of Experience
      </h1>
      <p className="w-[50%] text-xl text-center leading-7">
        I am frontend developer with 2+ years of experience in multiple
        companies like Snapmint and Campk12
      </p>
      <div className="flex gap-5 mb-12">
        <div className="navbar-btn">
          <AnchorLink href="#contact" className="">
            Contact With Me
          </AnchorLink>
        </div>
        <div className="px-5 py-4 rounded-[50px] cursor-pointer border-2 border-[white] hover:border-[#B415ff]">
          Downlaod My Resume{" "}
        </div>
      </div>
    </div>
  );
}

export default Hero;
