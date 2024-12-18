import { Outlet } from "react-router-dom";
import MaxWidthContainer from "../../components/max-width-container";
import PaddingContainer from "../../components/redesigned-components/components/padding-container";

const AuthLayout = () => {
  return (
    <MaxWidthContainer className="max-w-7xl">
      <PaddingContainer className="py-10 lg:py-0">
        {/* <div className="grid md:grid-cols-2 gap-12 md:h-screen"> */}
        <div className="w-full md:h-screen flex flex-col items-center justify-center max-w-2xl mx-auto">
          <Outlet />
        </div>
      </PaddingContainer>
    </MaxWidthContainer>
  );
};

export default AuthLayout;
