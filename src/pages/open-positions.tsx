import { Select, SelectItem } from "@nextui-org/react";
import { Dot } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { initialJobs } from "../data";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

const OpenPositions = () => {
  const [department, setDepartment] = useState<string>("all");
  const [location, setLocation] = useState<string>("all");
  const [employmentType, setEmploymentType] = useState<string>("all");

  const filteredJobs = initialJobs.filter((job) => {
    const departmentMatch =
      department === "all" || job.department === department;
    const locationMatch = location === "all" || job.location === location;
    const typeMatch = employmentType === "all" || job.type === employmentType;
    return departmentMatch && locationMatch && typeMatch;
  });

  const departments = Array.from(
    new Set(initialJobs.map((job) => job.department))
  );
  const locations = Array.from(new Set(initialJobs.map((job) => job.location)));
  const types = Array.from(new Set(initialJobs.map((job) => job.type)));

  const jobsByDepartment = departments.reduce((acc, dept) => {
    acc[dept] = filteredJobs.filter((job) => job.department === dept);
    return acc;
  }, {} as Record<string, Job[]>);

  return (
    <section className="max-w-3xl mb-20 mt-10 mx-auto px-4 py-8">
      <h3 className=" md:max-w-[70%] mx-auto mb-20 text-4xl md:text-5xl font-extrabold lg:text-6xl text-primary-text ">
        Open Positions
      </h3>
      <div className="mb-8">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground ">Filters:</h2>
            <h2>Open Positions ({filteredJobs.length})</h2>
          </div>
          <div className=" flex flex-col md:flex-row gap-4">
            <Select
              value={department}
              onSelectionChange={(value) =>
                setDepartment(`${value.currentKey}`)
              }
              className="w-full"
              placeholder="Select department"
            >
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </Select>
            <Select
              value={location}
              onSelectionChange={(value) => setLocation(`${value.currentKey}`)}
              className="w-full"
              placeholder="Select location"
            >
              {locations.map((locs) => (
                <SelectItem key={locs} value={locs}>
                  {locs}
                </SelectItem>
              ))}
            </Select>

            <Select
              value={employmentType}
              onSelectionChange={(value) =>
                setEmploymentType(`${value.currentKey}`)
              }
              className="w-full"
              placeholder="Select type"
            >
              {types.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {departments.map((dept) => {
          const jobs = jobsByDepartment[dept];
          if (!jobs.length) return null;
          return (
            <div className="" key={dept}>
              <h2>{dept}</h2>
              <div className="space-y-2">
                {jobs.map((job) => (
                  <div className="group" key={job.id}>
                    <NavLink
                      to={`/careers/jobs/${job.id}`}
                      className={
                        "block space-y-3 hover:bg-muted p-4 rounded-lg transition-colors"
                      }
                    >
                      <h3 className="text-lg font-medium text-primary">
                        {job.title}
                      </h3>
                      <p className="text-sm flex items-center text-muted-foreground">
                        {job.department} <Dot /> {job.location} <Dot />{" "}
                        {job.type}
                      </p>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OpenPositions;
