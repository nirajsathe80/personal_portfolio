import AnchorLink from "react-anchor-link-smooth-scroll";
import HeroImage from "../../assets/images/Hero_Image.jpg";
function Hero() {
  return (
    <div className="flex items-center flex-col gap-5 mx-auto w-full">
      <img
        src={HeroImage}
        alt="hero-image"
        className="mt-4 h-[320px] w-[320px] rounded-full"
      />
      <h1 className="md:text-4xl xsm:text-2xl text-xl md:leading-[50px] leading-8 text-center md:max-w-[600px] ">
        <span className="hero-text">I'm Niraj Sathe,</span> Frontend developer
        with 2+ years of Experience
      </h1>
      <p className="md:max-w-[500px] md:text-xl xsm:text-base text-[12px] text-center leading-7">
        I am frontend developer with 2+ years of experience in multiple
        companies like Snapmint and Campk12
      </p>
      <div className="mb-12 flex justify-center gap-3 xsm:gap-8 w-full ">
        <div className="flex items-center justify-center sm:px-5 sm:py-4 p-3   rounded-[50px] cursor-pointer text-[10px] sm:text-lg xsm:text-base linear-gradient-bg zoom-effect">
          <AnchorLink href="#contact">Contact With Me</AnchorLink>
        </div>

        <a
          href="https://drive.google.com/file/d/1VadmVkVUPIH2uFEXwLTkYdsOS3q6IgW6/view?usp=drive_link"
          download
          target="_blank"
          className="flex items-center justify-center sm:px-5 sm:py-4 p-3   rounded-[50px] cursor-pointer border-2 border-[white] xsm:text-base text-[10px] sm:text-lg hover:border-[#B415ff]"
        >
          Downlaod My Resume{" "}
        </a>
      </div>
    </div>
  );
}

export default Hero;
