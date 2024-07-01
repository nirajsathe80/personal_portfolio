import { achievements, skills } from "../data";

function Skills() {
  return (
    <div id="skills" className="flex items-center flex-col gap-10 py-10">
      <h1 className="text-4xl font-bold">My Skills</h1>

      <div className="flex justify-center gap-16 mx-auto">
        <img
          src="https://greatstack.in/portfolio/assets/about_profile-kNAyOvDL.svg"
          alt="hero-img"
          className="rounded-lg w-[300px]"
        />
        <div>
          <div className="flex flex-col text-xl  gap-4">
            <p>
              I am an experienced Frontend Developer with over 2+ years of
              experience in this field. Throught my career,I have had privilage
              of collabrating with prestigious organizations, contibuting to
              their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experince but also in the enthusiam and dedication I
              bring to each project.
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            {skills.map((skill, index) => {
              const { title, percentage } = skill;
              return (
                <div
                  className="flex gap-5 items-center cursor-pointer zoom-effect"
                  key={index}
                >
                  <p className="min-w-[110px] font-semibold text-lg">{title}</p>
                  <hr
                    className="h-[6px] rounded-lg outline-none border-none linear-gradient-bg"
                    style={{ width: percentage }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between my-5 items-center uppercase px-10">
        {achievements.map((item, index) => {
          const { title, disc } = item;
          const isLastIndex = index === achievements.length - 1;
          return (
            <>
              <div
                className="text-center cursor-pointer zoom-effect"
                key={index}
              >
                <h1 className="hero-text font-bold text-3xl">{title}</h1>
                <p className="font-semibold mt-2">{disc}</p>
              </div>
              {!isLastIndex ? (
                <hr className="h-[2px] bg-[white] w-[70px] rotate-90" />
              ) : (
                <></>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
