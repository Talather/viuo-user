import { useNavigate } from "react-router-dom";
import ShinyButton from "./shiny-button";

const Refresh = () => {
  const navigate = useNavigate();

  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <h2>Something went wrong</h2>
      <ShinyButton
        hideIcon
        className="rounded-3xl py-2 mt-3"
        onClick={() => navigate(0)}
      >
        Retry
      </ShinyButton>
    </div>
  );
};

export default Refresh;
