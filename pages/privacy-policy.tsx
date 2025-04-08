import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
// import { ScrollArea } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content:
        "Vuior, LLC ('Vuior', 'we', 'us', or 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our services, in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), Children's Online Privacy Protection Act (COPPA), and other relevant laws.",
    },
    {
      title: "Information We Collect",
      content: [
        "Personal Information: Name, address, phone number, email address, payment information.",
        "Non-Personal Information: Browser type, device ID, IP address, usage data, and cookies.",
        "Sensitive Data: Only if explicitly consented to, such as demographic details or financial data for specific services.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and improve our services.",
        "For billing, account management, and customer support.",
        "To send updates, promotional content, and security alerts.",
        "To comply with legal obligations and enforce terms of service.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "GDPR: Right to access, correct, delete, or restrict processing of your data.",
        "CCPA: Right to know what personal data is collected, delete it, or opt-out of data sale.",
        "Children: We do not knowingly collect data from individuals under 13.",
      ],
    },
    {
      title: "Sharing Your Data",
      content:
        "We do not sell your data. Data may be shared with trusted third parties for: Payment processing, Customer support tools, Legal compliance.",
    },
    {
      title: "Security Measures",
      content:
        "Vuior employs industry-standard measures, including encryption, secure servers, and routine security audits, to safeguard your data.",
    },
    {
      title: "Contact Information",
      content:
        "For inquiries about this Privacy Policy, contact us at support@vuio.com",
    },
  ];

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex md:items-center md:flex-row flex-col md:justify-between">
            <CardTitle className="text-3xl font-bold">
              Vuior Privacy Policy
            </CardTitle>
            <Badge variant="secondary" className="w-fit mt-2 md:mt-0">
              Effective Date: November 29, 2024
            </Badge>
          </div>
          <CardDescription>
            Protecting your privacy and ensuring the security of your data
          </CardDescription>
        </CardHeader>
        <CardContent>
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
