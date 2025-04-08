import { AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

export default function TermsOfService() {
  const sections = [
    {
      title: "Agreement Overview",
      content:
        "By accessing or using Vuior services, you agree to these Terms of Service. If you disagree with any part, discontinue use immediately.",
    },
    {
      title: "Eligibility",
      content:
        "You must be at least 18 years old or meet the age of majority in your jurisdiction.",
    },
    {
      title: "Services Provided",
      content:
        "Vuior offers bill management, financial tracking, and early payment savings systems through the Vuior platform.",
    },
    {
      title: "User Obligations",
      content: [
        "Provide accurate and up-to-date information.",
        "Maintain confidentiality of login credentials.",
        "Use the platform for lawful purposes only.",
      ],
    },
    {
      title: "Prohibited Activities",
      content: [
        "Resale or misuse of our services.",
        "Attempting to hack or disrupt our platform.",
        "Uploading malicious software.",
      ],
    },
    {
      title: "Termination",
      content:
        "Vuior reserves the right to suspend or terminate accounts for violations of these terms.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Vuior is not liable for indirect damages, including data loss, service interruptions, or third-party misuse of your data.",
    },
    {
      title: "Contact Information",
      content: "Questions about this policy should be sent to support@vuio.com",
    },
  ];

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <CardTitle className="text-3xl font-bold">
              Vuior Terms of Service
            </CardTitle>
            <Badge variant="secondary" className="w-fit mt-2 md:mt-0">
              Effective Date: November 29, 2024
            </Badge>
          </div>
          <CardDescription>
            Please read these terms carefully before using our services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>
              By using Vuior services, you agree to these Terms of Service. If
              you do not agree, please do not use our services.
            </AlertDescription>
          </Alert>
          {/* <ScrollArea className="h-[600px] rounded-md border p-4"> */}
          {sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul className="list-disc pl-5 space-y-1">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
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
}
