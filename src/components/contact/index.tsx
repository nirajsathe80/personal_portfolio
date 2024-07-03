import { conatctData } from "../data";
import waveHandSvg from "../../assets/images/wave-hand.svg";

function Contact() {
  const handleClick = (url: string) => {
    if (!url) {
      return;
    }
    window.open(url, "_blank");
  };

  return (
    <div id="contact" className="flex flex-col items-center gap-5 py-12">
      <div className="w-max relative">
        <h2 className="font-bold text-3xl z-10">Contact Me</h2>
        <img
          src={waveHandSvg}
          alt="wave-hand"
          className="absolute w-[100px] right-[-30px] top-1 z-[-1]"
        />
      </div>
      <div className="text-center">
        <div>
          <h3 className="font-semibold text-3xl my-4 hero-text">Let's talk</h3>
          <p className="max-w-[450px] text-[#d8d8d8] text-base">
            I am currently open to work, so feel free to send me a message.
            <br /> I am open for work. You can contact me anytime
          </p>
          <div className="flex flex-col gap-4 my-6">
            {conatctData.map((contact) => {
              const { title, className, url } = contact;
              return (
                <div
                  key={title}
                  className={`flex items-center gap-5 ${
                    url ? "cursor-pointer" : ""
                  }`}
                  onClick={() => handleClick(url)}
                >
                  <span>
                    <i className={className}></i>
                  </span>
                  <p className="text-[#d8d8d8] text-lg font-normal ">{title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
