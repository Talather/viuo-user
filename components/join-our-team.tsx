import { NavLink } from "react-router-dom";
import Button from "./button";
import TeamInfoListItem from "./team-info-list-item";

const contents = [
  "Lorem Ipsum Lorem Ipsum",
  "Lorem Ipsum Lorem Ipsum",
  "Lorem Ipsum Lorem Ipsum",
  "Lorem Ipsum Lorem Ipsum",
  "Lorem Ipsum Lorem Ipsum",
];

const JoinOurTeam = () => {
  return (
    <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-0">
      <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
        <div className="flex items-start flex-col grow px-5 font-medium md:mt-10 max-md:max-w-full">
          <h2 className="heading mt-5 md:mt-0 text-xl font-semibold text-emerald-900 capitalize max-md:max-w-full">
            Join the Vuior Ecosystem: Innovate, Empower, Thrive
          </h2>
          <p className="sub-text mt-2 text-[#666] leading-8 md:mt-10 max-md:max-w-full">
            Vuior is on a mission to redefine how people manage and save on
            their bills. As a rapidly growing company, we’re seeking passionate,
            innovative thinkers to join our team.
          </p>
          <div className="flex gap-4 sub-text mt-8 leading-10 text-[#0e0e0e] font-medium max-md:flex-wrap max-md:mt-10">
            <div className="flex-auto max-md:max-w-full">
              {contents.map((content, index) => (
                <TeamInfoListItem content={content} key={index} />
              ))}
            </div>
          </div>
          <div className="mt-8">
            <NavLink to="/careers/open-positions">
              <Button>Apply Now</Button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full ">
        <img
          src="https://images.unsplash.com/photo-1576267423429-569309b31e84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="grow w-full object-cover  max-md:max-w-full -z-10"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default JoinOurTeam;
