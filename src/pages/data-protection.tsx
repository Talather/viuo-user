// @ts-nocheck
import {
  Shield,
  Check,
  Minimize,
  RefreshCw,
  ClipboardList,
  Users,
  Download,
  Trash2,
  Clock,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";
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

const DataProtectionPolicy = () => {
  const sections = [
    {
      title: "Objective",
      content:
        "This Data Protection Policy outlines how Vuior complies with GDPR, CCPA, and other data privacy laws to protect user information.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Principles",
      content: [
        {
          subtitle: "Lawfulness, Fairness, Transparency",
          description:
            "Data is collected and processed lawfully and transparently.",
          icon: <Check className="h-4 w-4" />,
        },
        {
          subtitle: "Data Minimization",
          description:
            "Only data necessary for specific purposes is collected.",
          icon: <Minimize className="h-4 w-4" />,
        },
        {
          subtitle: "Accuracy",
          description: "Data is accurate and up-to-date.",
          icon: <RefreshCw className="h-4 w-4" />,
        },
        {
          subtitle: "Accountability",
          description:
            "Vuior is responsible for demonstrating compliance with data protection laws.",
          icon: <ClipboardList className="h-4 w-4" />,
        },
      ],
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Roles and Responsibilities",
      content: [
        {
          subtitle: "Data Controller",
          description:
            "Vuior is responsible for deciding how and why data is processed.",
          icon: <Users className="h-4 w-4" />,
        },
        {
          subtitle: "Data Processor",
          description:
            "Third-party vendors processing data on behalf of Vuior comply with our policies.",
          icon: <Users className="h-4 w-4" />,
        },
      ],
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "User Data Rights",
      content: [
        {
          subtitle: "Access and Rectification",
          description: "Users can view and correct personal data.",
          icon: <Check className="h-4 w-4" />,
        },
        {
          subtitle: "Portability",
          description: "Users can request data in a portable format.",
          icon: <Download className="h-4 w-4" />,
        },
        {
          subtitle: "Erasure (Right to Be Forgotten)",
          description: "Users can request deletion of data.",
          icon: <Trash2 className="h-4 w-4" />,
        },
      ],
      icon: <ClipboardList className="h-5 w-5" />,
    },
    {
      title: "Data Retention",
      content:
        "Data is retained only as long as necessary for business purposes or legal compliance.",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      title: "Data Breaches",
      content: [
        "All breaches are reported to the relevant authorities within 72 hours if required by law.",
        "Affected users are notified promptly.",
      ],
      icon: <AlertTriangle className="h-5 w-5" />,
    },
    {
      title: "Contact Information",
      content:
        "Questions about data protection should be directed to support@vuio.com",
      icon: <HelpCircle className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex md:items-center md:flex-row flex-col md:justify-between">
            <CardTitle className="text-3xl font-bold">
              Vuior Data Protection Policy
            </CardTitle>
            <Badge variant="secondary" className="w-fit mt-2 md:mt-0">
              Effective Date: June 1, 2023
            </Badge>
          </div>
          <CardDescription>
            Our commitment to protecting your personal data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="default" className="mb-6">
            <Shield className="h-4 w-4" />
            <AlertTitle>Data Protection</AlertTitle>
            <AlertDescription>
              Vuior is committed to protecting your personal data in compliance
              with GDPR, CCPA, and other applicable data privacy laws.
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
                    <li key={itemIndex} className="flex items-start">
                      {item.icon && (
                        <span className="mt-1 mr-2">{item.icon}</span>
                      )}
                      <div>
                        {item.subtitle && (
                          <h3 className="font-semibold">{item.subtitle}</h3>
                        )}
                        <p>{item.description || item}</p>
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

export default DataProtectionPolicy;
