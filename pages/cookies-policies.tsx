import { Cookie, Info, Settings, Target, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Separator } from "../components/ui/separator";

const CookiesPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      content:
        "Vuior uses cookies and similar technologies to enhance user experience, analyze website traffic, and support marketing efforts.",
      icon: <Info className="h-5 w-5" />,
    },
    {
      title: "What Are Cookies?",
      content:
        "Cookies are small text files placed on your device to store data.",
      icon: <Cookie className="h-5 w-5" />,
    },
    {
      title: "Types of Cookies We Use",
      content: [
        {
          subtitle: "Essential Cookies",
          description:
            "Necessary for core functionalities, such as user authentication.",
          icon: <Zap className="h-4 w-4" />,
        },
        {
          subtitle: "Performance Cookies",
          description:
            "Track how you interact with the platform to improve user experience.",
          icon: <Settings className="h-4 w-4" />,
        },
        {
          subtitle: "Targeting Cookies",
          description: "Used for personalized advertising.",
          icon: <Target className="h-4 w-4" />,
        },
      ],
      icon: <Cookie className="h-5 w-5" />,
    },
    {
      title: "Managing Cookies",
      content:
        "You can control or disable cookies via browser settings. However, doing so may affect service functionality.",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: "Third-Party Cookies",
      content:
        "Vuior may allow trusted partners to use cookies for analytics and targeted advertising.",
      icon: <Target className="h-5 w-5" />,
    },
    {
      title: "Contact Information",
      content: "For inquiries about cookies, email us at support@vuio.com",
      icon: <Info className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex md:items-center flex-col md:flex-row md:justify-between">
            <CardTitle className="text-3xl font-bold">
              Vuior Cookie Policy
            </CardTitle>
            <Badge variant="secondary" className="w-fit mt-2 md:mt-0">
              Effective Date: November 29, 2023
            </Badge>
          </div>
          <CardDescription>
            Understanding how we use cookies to improve your experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="default" className="mb-6">
            <Cookie className="h-4 w-4" />
            <AlertTitle>Cookie Usage</AlertTitle>
            <AlertDescription>
              We use cookies to enhance your browsing experience and provide
              personalized services. By continuing to use our site, you agree to
              our use of cookies.
            </AlertDescription>
          </Alert>
          {/* <ScrollArea className="h-[600px] rounded-md border p-4"> */}
          {sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                {section.icon}
                <span className="ml-2">{section.title}</span>
              </h2>
              {Array.isArray(section.content) ? (
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      {item.icon}
                      <div className="ml-2">
                        <h3 className="font-semibold">{item.subtitle}</h3>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
              {index < sections.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
          {/* </ScrollArea> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default CookiesPolicy;
