import {
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { initialJobs, JobDescription } from "../../data";
import { Card, CardContent } from "../../components/ui/card";
import { ArrowLeft, Building2, Clock, DollarSign, MapPin } from "lucide-react";
import { Button, Divider, Tab, Tabs } from "@nextui-org/react";
import { useEffect, useState } from "react";

const JobLayout = () => {
  const { job } = useLoaderData<{ job: JobDescription | undefined }>();
  const location = useLocation();

  const navigate = useNavigate();
  const [selected, setSelected] = useState(location.pathname);

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  const onTabClick = (value: string) => {
    if (value) {
      navigate(value);
    }
  };

  if (!job) {
    return <div className="text-center">No Job Found</div>;
  }

  return (
    <div className="container px-2 mx-auto py-6 mt-5 max-w-5xl">
      <div className="flex items-center mb-6 gap-2">
        <Button
          onClick={() => navigate(`/careers/open-positions`)}
          isIconOnly
          className="rounded-full"
          variant="flat"
        >
          <ArrowLeft />
        </Button>
        <h1 className="text-3xl font-bold">{job.title}</h1>
      </div>
      <div className="grid md:grid-cols-[300px_1fr] gap-6">
        <Card className="h-fit">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{job.location}</span>
            </div>
            <Divider />
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span>{job.department}</span>
            </div>
            <Divider />
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{job.type}</span>
            </div>
            <Divider />
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span>
                ${job.salaryExpectations.min.toLocaleString()} - $
                {job.salaryExpectations.max.toLocaleString()}
              </span>
            </div>
          </CardContent>
        </Card>

        <div>
          <Tabs
            selectedKey={selected}
            className="mb-5"
            onSelectionChange={(value) => {
              onTabClick(value as string);
              setSelected(value as string);
            }}
            variant={"underlined"}
            aria-label="Tabs "
          >
            <Tab key={`/careers/jobs/${job.id}`} title="Overview" />
            <Tab
              key={`/careers/jobs/${job.id}/application`}
              title="Application"
            />
          </Tabs>
          <Outlet context={job} />
        </div>
      </div>
    </div>
  );
};

export const loader = ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const job = initialJobs.find((job) => job.id === id);
  return { job };
};

export default JobLayout;
