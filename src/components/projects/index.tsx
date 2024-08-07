import { projectsData } from "../data";
import waveHandSvg from "../../assets/images/wave-hand.svg";

function Projects() {
  return (
    <div className="flex flex-col items-center gap-5 py-12" id="projects">
      <div className="w-max relative">
        <h1 className="font-bold text-3xl">Projects</h1>
        <img
          src={waveHandSvg}
          alt="wave-hand"
          className="w-[100px] absolute top-2 right-[-30px] z-[-1]"
        />
      </div>
      <div className="w-full my-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-8 gap-6">
        {projectsData.map((project, index) => {
          const { title, disc, technologies, sourceCode } = project;
          return (
            <div
              key={index}
              className="max-w-sm transform overflow-hidden rounded-lg p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl project-box-bg "
            >
              <div>
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="font-normal text-sm text-[#1f2937] mt-2 min-h-12">
                  {disc}
                </p>
                <hr className="w-full h-[1px] bg-[white] mt-4" />
                <div>
                  <p className="text-[#374151] font-normal text-sm mt-5">
                    Technologies:
                  </p>
                  <div className="flex gap-3">
                    {technologies.map((technology, index) => {
                      const { lang } = technology;
                      return (
                        <div
                          className="flex items-center p-1 gap-2 bg-[rgb(153,246,228)] w-max rounded-lg my-2"
                          key={index}
                        >
                          <p className="text-[#374151] text-[12px]">{lang}</p>
                        </div>
                      );
                    })}
                  </div>
                  <hr className="w-full h-[1px] bg-[white] mt-4" />
                </div>
                <div className="flex mt-4">
                  {sourceCode.map((data, index) => {
                    const { title, url } = data;
                    const isGithubText = title.includes("Source");
                    return (
                      <div
                        className="flex items-center justify-between w-full"
                        key={index}
                      >
                        <div
                          className="flex gap-2 items-center cursor-pointer"
                          onClick={() => window.open(url)}
                        >
                          <span className="">
                            {isGithubText ? (
                              <i className="fa-brands fa-github"></i>
                            ) : (
                              <i className="fa-solid fa-globe"></i>
                            )}
                          </span>
                          <p className="text-sm font-normal">{title}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-3 items-center py-3 px-7 border-2 border-[white] rounded-xl mb-8">
        <button
          onClick={() =>
            window.open(
              "https://github.com/nirajsathe80/Background-Color-Change/"
            )
          }
        >
          Show More
        </button>
        <span>
          <i className="fa-sharp fa-solid fa-arrow-right"></i>
        </span>
      </div>
    </div>
  );
}

export default Projects;
