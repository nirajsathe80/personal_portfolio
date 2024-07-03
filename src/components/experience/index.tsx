import { experienceData } from "../data";
import waveHandSvg from "../../assets/images/wave-hand.svg";

function Experience() {
  return (
    <div id="experience" className="py-10 flex flex-col items-center w-full">
      <div className="w-max relative">
        <h1 className="text-4xl font-bold">Experience</h1>
        <img
          src={waveHandSvg}
          alt="wave-hand"
          className="w-[100px] absolute top-2 right-[-30px] z-[-1]"
        />
      </div>
      <div className="w-full py-5">
        {experienceData.map((data) => {
          const { srNo, title, points } = data;
          return (
            <div
              className="border-[2px] border-[white] rounded-lg w-full py-4 flex flex-col my-6 md:px-10 pl-4 shadow-md hover:border-[#ff00ff] zoom-effect"
              key={srNo}
            >
              <p className="md:text-xl text-base font-semibold">{srNo}</p>
              <p className="md:text-3xl text-2xl  hero-text font-bold mt-3">
                {title}
              </p>
              <ul className="flex flex-col gap-4 my-3 list-disc px-4 font-medium text-sm md:text-xl">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
