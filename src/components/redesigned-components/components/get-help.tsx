import { Card, CardBody } from "@nextui-org/react";
import { LucideIcon } from "lucide-react";

interface GetHelpCardProps {
  header: string;
  content: string;
  icon: LucideIcon;
}

const GetHelpCard = ({ header, content, icon: Icon }: GetHelpCardProps) => {
  return (
    <Card shadow="none">
      <CardBody className="flex-row items-center p-2 gap-4">
        <div className="size-10 flex items-center justify-center rounded-full bg-button-gpt/10">
          <Icon color="#10a37f" />
        </div>
        <div>
          <h2 className="font-bold">{header}</h2>
          <p>{content}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default GetHelpCard;
