import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface QuickAnswerCardProps {
  question: string;
  answer: string;
  icon?: LucideIcon;
}

const QuickAnswerCard = ({
  question,
  answer,
  icon: Icon,
}: QuickAnswerCardProps) => {
  return (
    <Card
      shadow="sm"
      className="group relative bg-[#0a2828] rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-[#0c2f2f]"
    >
      <CardHeader className="w-full">
        <div className="flex w-full justify-between items-start">
          {Icon && <Icon className="w-5 h-5 text-white/60" />}
          <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
        </div>
      </CardHeader>
      <CardBody className="items-center text-center">
        <h3 className="text-xl font-semibold text-white mt-4 mb-2">
          {question}
        </h3>
        <p className="text-[#9ba1a6] text-sm leading-relaxed">{answer}</p>
      </CardBody>
    </Card>
  );
};

export default QuickAnswerCard;
