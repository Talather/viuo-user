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
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{job.aboutUs}</p>
        </CardContent>
      </Card>

      
      {job.aboutTheRoleHeading && job.aboutTheRoleHeading.length > 0 && (
      <Card>
      <CardHeader>
      <CardTitle>{job.aboutTheRoleHeading}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{job.aboutTheRole}</p>
      </CardContent>
      </Card>
      )}

      {/* Summary */}
      {job.keyResponsibilitiesHeading && job.keyResponsibilitiesHeading.length > 0 && (
      <Card className="">
        <CardHeader>
          <CardTitle>{job.keyResponsibilitiesHeading}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
            {(job.jobSummary ?? []).map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      )}

       {/* Qualifications */}
       {job.qualificationHeading && job.qualificationHeading.length > 0 && (
      <Card className="">
        <CardHeader>
          <CardTitle>{job.qualificationHeading}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
            {(job.qualifications ?? []).map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      )}

    {job.objectives && job.objectives.length > 0 && (
      <Card>
        <CardHeader>
          <CardTitle>What You'll Do </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
            {job.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      )}

       {/* Qualifications */}
       {job.headingfour && job.headingfour.length > 0 && (
      <Card className="">
        <CardHeader>
          <CardTitle>{job.headingfour}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
            {(job.contantfour ?? []).map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      )}

      {/* Qualifications */}
      {job.headingfive && job.headingfive.length > 0 && (
      <Card className="">
        <CardHeader>
          <CardTitle>{job.headingfive}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
            {(job.contantfive ?? []).map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      )}

    {job.headingSix && job.headingSix.length > 0 && (
      <Card className="">
        <CardHeader>
          <CardTitle>{job.headingSix}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{job.contantSix}</p>
        </CardContent>
      </Card>
      )}

      {/* Key Objectives */}
     

      {/* Role responsibilities */}
      {/* {job.roleResponsibilities && job.roleResponsibilities.length > 0 && (
      <Card>
        <CardHeader>
          <CardTitle>Who We're Looking For </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
            {job.roleResponsibilities.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      )} */}

      {/* Daily and weekly tasks */}
      {job.dailyAndWeeklyTasks && job.dailyAndWeeklyTasks.length > 0 && (
      <Card>
        <CardHeader>
          <CardTitle>How to Apply</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="pl-4 space-y-2 text-muted-foreground">
            {job.dailyAndWeeklyTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      )}
      {job.benefits && job.benefits.length > 0 && (
      <Card>
      <CardHeader>
      <CardTitle>Benefits</CardTitle>
      </CardHeader>
      <CardContent>
      <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
        {job.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      </CardContent>
      </Card>
      )}

      {/* Benefits */}
      {/* <Card>
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
      </Card> */}
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
