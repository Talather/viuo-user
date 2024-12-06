import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";

const ChooseCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default ChooseCard;
