import { Outlet, useHref, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import ScrollToTop from "../../components/scroll-to-top";
import Navbar from "../../components/redesigned-components/components/navbars/navbar";
import MobileNavbar from "../../components/redesigned-components/components/navbars/mobile-navbar";
import { NextUIProvider } from "@nextui-org/system";

const RootLayout = () => {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      {/* <TopHeader /> */}
      <Navbar />
      <MobileNavbar />

      <main id="bodyBlur">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </NextUIProvider>
  );
};

export default RootLayout;
