import { joinUsArr } from "../data";
import Steps from "./steps";

const JoinUs = () => {
  return (
    <Steps
      halfLine={true}
      isReverse
      heading="Lorem Ipsum"
      stepsArray={joinUsArr}
      imageSrc="/assets/images/joinUs.png"
    />
  );
};

export default JoinUs;
