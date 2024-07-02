import { conatctData } from "../data";

function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center gap-5 py-12">
      <h2 className="font-bold text-3xl">Contact Me</h2>
      <div className="text-center">
        <div>
          <h3 className="font-semibold text-3xl my-4 hero-text">Let's talk</h3>
          <p className="max-w-[450px] text-[#d8d8d8] text-base">
            I am currently open to work, so feel free to send me a message.
            <br /> I am open for work. You can contact me anytime
          </p>
          <div className="flex flex-col gap-4 my-6">
            {conatctData.map((contact) => {
              const { title, className } = contact;
              return (
                <div key={title} className="flex items-center  gap-5">
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
