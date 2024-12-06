import { whoAreWeArr } from "../data";
import Steps from "./steps";

const WhoAreWe = () => {
  return (
    <Steps
      halfLine={false}
      heading="Lorem Ipsum"
      stepsArray={whoAreWeArr}
      imageSrc="/assets/images/who-are-we.png"
    />
  );
};

export default WhoAreWe;
