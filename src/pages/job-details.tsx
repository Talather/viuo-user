import { useOutletContext } from "react-router-dom";
import { JobDescription } from "../data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import ShinyButton from "../components/redesigned-components/components/shiny-button";

const JobDetails = () => {
  const job = useOutletContext<JobDescription>();
  return (
    <div className="flex flex-col gap-2">
      {/* About us */}
      <Card className="">
        <CardHeader>
          <CardTitle>About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{job.aboutUs}</p>
        </CardContent>
      </Card>
      {/* Summary */}
      <Card className="">
        <CardHeader>
          <CardTitle>Job Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{job.jobSummary}</p>
        </CardContent>
      </Card>
      {/* Key Objectives */}
      <Card>
        <CardHeader>
          <CardTitle>Key Objectives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
            {job.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      {/* Role responsibilities */}
      <Card>
        <CardHeader>
          <CardTitle>Role responsibilities</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
            {job.roleResponsibilities.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Daily and weekly tasks */}
      <Card>
        <CardHeader>
          <CardTitle>Daily and Weekly Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
            {job.dailyAndWeeklyTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card>
        <CardHeader>
          <CardTitle> Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <ShinyButton
        href={`/careers/jobs/${job.id}/application`}
        className="py-3 rounded-full mt-3"
      >
        Apply Now
      </ShinyButton>
    </div>
  );
};

export default JobDetails;
