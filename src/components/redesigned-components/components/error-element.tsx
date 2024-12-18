import { useNavigate, useRouteError } from "react-router-dom";
import ShinyButton from "./shiny-button";

interface RouterError {
  statusText: string;
  message: string;
}

const ErrorPage = () => {
  const error = useRouteError() as RouterError;
  const navigate = useNavigate();

  return (
    <div className="    px-4 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="  h-screen flex items-center justify-center w-full xl:w-1/2 relative ">
        <div className="relative">
          <div className="absolute">
            <div className="text-center flex flex-col  items-center justify-center">
              <h1 className="my-2 text-primary-text font-bold text-2xl">
                Looks like you've found the doorway to the great nothing
              </h1>
              <p className="my-2 text-secondary-text">
                Sorry about that! Please visit our homepage to get where you
                need to go.
              </p>
              {error.message && (
                <p className="my-2 text-secondary-text">{error.message}</p>
              )}
              <ShinyButton
                onClick={() => navigate("/")}
                className="w-fit my-2 py-3 px-8 text-center"
              >
                Take me there
              </ShinyButton>
              {/* <button
                  onClick={() => navigate("/")}
                  className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-button-gpt text-white hover:bg-button-gpt-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                >
                  Take me there!
                </button> */}
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
