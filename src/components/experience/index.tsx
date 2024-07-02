import { experienceData } from "../data";

function Experience() {
  return (
    <div id="experience" className="py-10 flex flex-col items-center w-full">
      <h1 className="text-4xl font-bold">Experience</h1>
      <div className="w-full py-5">
        {experienceData.map((data, index) => {
          const { srNo, title, points } = data;
          return (
            <div
              className="border-[2px] border-[white] rounded-lg w-full py-4 flex flex-col my-6 px-10 shadow-md hover:border-2 hover:border-[#ff00ff] zoom-effect"
              key={index}
            >
              <p className="text-xl font-semibold">{srNo}</p>
              <p className="text-3xl hero-text font-bold mt-3">{title}</p>
              <ul className="flex flex-col gap-4 my-3 list-disc px-4 font-medium text-xl">
                {points.map((point, idx) => (
                  <li key={idx}>{point}</li>
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
