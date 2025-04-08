import { AccordionItem } from "@radix-ui/react-accordion";
import { useState } from "react";

import MaxWidthContainer from "../components/max-width-container";
import PaddingContainer from "../components/redesigned-components/components/padding-container";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "../components/ui/accordion";
import { faqs } from "../data";
import JoinToday from "../components/redesigned-components/components/join-today";
import { NavLink } from "react-router-dom";

const FaqsPage = () => {
  const [activeItem, setActiveItem] = useState("");
  return (
    <div className="">
      <MaxWidthContainer className="pb-32  md:px-8">
        <PaddingContainer className="py-10 md:py-20">
          <div className="text-center">
            <h1 className="mb-6 md:max-w-[70%] mx-auto text-4xl md:text-5xl font-extrabold lg:text-6xl text-primary-text ">
              Frequently Asked Questions
            </h1>
            {/* <Heading>Frequently asked questions</Heading> */}
            <p className="md:max-w-[80%] font-bold mx-auto text-secondary-text">
              Based on available data online and typical FAQs for compliance in
              financial services, here is a comprehensive FAQ section for Vuior,
              focusing on compliance and providing clear information to users.
            </p>
            <p className="md:max-w-[80%] mt-2 mx-auto text-secondary-text">
              Can't find what you're looking for?{" "}
              <NavLink
                className={"text-button-gpt font-semibold hover:underline"}
                to={"/contact-us"}
              >
                Contact Us
              </NavLink>
            </p>
          </div>
        </PaddingContainer>
        <PaddingContainer className="px-2 max-w-4xl mx-auto py-10">
          <div className="w-full ">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={activeItem}
              onValueChange={setActiveItem}
            >
              {faqs.map(({ value, title, content }) => (
                <AccordionItem
                  key={value}
                  value={value}
                  className={`
               rounded-lg mb-2 hover:outline outline-1
              ${
                activeItem === value
                  ? "border bg-white border-black shadow-lg"
                  : "border-border"
              }
              transition-all duration-200
            `}
                >
                  <AccordionTrigger
                    className={`
                px-4 text-left hover:no-underline
                ${activeItem === value ? "text-primary font-medium" : ""}
              `}
                  >
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    {content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </PaddingContainer>
        <PaddingContainer className="py-10 md:py-20">
          <div className="text-center">
            <p className="md:max-w-[80%] font-bold mx-auto text-secondary-text">
              By addressing these frequently asked questions, Vuior ensures
              transparency, compliance, and a clear understanding of our
              services and policies for all members.
            </p>
            <p className="max-w-[80%] mt-10 mx-auto text-secondary-text">
              Can't find what you're looking for?{" "}
              <NavLink
                className={"text-button-gpt font-semibold hover:underline"}
                to={"/contact-us"}
              >
                Contact Us
              </NavLink>
            </p>
          </div>
        </PaddingContainer>
      </MaxWidthContainer>
      <JoinToday />
    </div>
  );
};

export default FaqsPage;
