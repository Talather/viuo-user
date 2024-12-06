import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "../pages/home";
import ContactUs from "../pages/contact-us";
import ErrorPage from "../components/redesigned-components/components/error-element";
import ConsultePage from "../pages/consulte";
import HowItWorks from "../pages/how-it-works";
import FaqsPage from "../pages/faqs-page";
import AboutPage from "../pages/about-us";
import CareersPage from "../pages/careers-page";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "../pages/login-page";
import RegisterUser from "../pages/register-user";
import ForgetPassword from "../pages/forget-password";
import OpenPositions from "../pages/open-positions";
import JobDetails from "../pages/job-details";
import JobApplication from "../pages/job-application";
import JobLayout, { loader as jobLoader } from "./layouts/JobLayout";
import Refresh from "../components/redesigned-components/components/refresh";
import PrivacyPolicy from "../pages/privacy-policy";
import TermsOfService from "../pages/terms-of-service";
import CookiesPolicies from "../pages/cookies-policies";
import DataProtectionPolicy from "../pages/data-protection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            element: <LoginPage />,
            path: "login",
          },
          {
            element: <ForgetPassword />,
            path: "reset-password",
          },
          {
            element: <RegisterUser />,
            path: "create-account",
          },
          {
            path: "/consultation",
            element: <ConsultePage />,
          },
        ],
      },

      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/careers",
        element: <CareersPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cookies-policy",
        element: <CookiesPolicies />,
      },
      {
        path: "/data-protection-policy",
        element: <DataProtectionPolicy />,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService />,
      },
      {
        path: "/careers/open-positions",
        element: <OpenPositions />,
      },
      {
        element: <JobLayout />,
        loader: jobLoader,
        errorElement: <Refresh />,
        children: [
          {
            path: "/careers/jobs/:id",
            element: <JobDetails />,
          },

          {
            path: "/careers/jobs/:id/application",
            element: <JobApplication />,
          },
        ],
      },

      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
      {
        path: "/faqs",
        element: <FaqsPage />,
      },
    ],
  },
]);
