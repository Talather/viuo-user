import PrincipleListItem from "./principle-list-item";

export const faqData = [
  {
    question: "Lorem Ipsum Lorem Ipsum ?",
    answer:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum ",
  },
  {
    question: "Lorem Ipsum ?",
    answer:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum ",
  },
  {
    question: "Lorem Ipsum?",
    answer:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum ",
  },
  {
    question: "Lorem Ipsum?",
    answer:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum ",
  },
];

const AccordionData = () => {
  return (
    <div className="flex w-full min-h-screen flex-col md:flex-row gap-y-6 mx-auto items-start justify-center xl:gap-20 py-10">
      <div className="font-poppins  w-full lg:max-w-[40vw]">
        <div className="flex flex-col px-5 text-lg font-medium max-w-[626px] text-stone-500">
          <h1 className="w-fit heading font-poppins font-semibold text-[#0f4a3f] capitalize max-md:max-w-full">
            Lorem Ipsum
            <div className="border-b-4 w-[90%] border-[#23ab84]"></div>
          </h1>
          <h2 className="mt-10 w-full text-[18px] lg:text-[24px] leading-9 font-semibold text-black  max-md:mt-10 max-md:max-w-full xl:text-nowrap">
            Lorem Ipsum Lorem Ipsum
          </h2>
          <div className="mt-8 w-full max-md:mt-8 max-md:w-full">
            <ol className="flex flex-col gap-7">
              <li>
                <PrincipleListItem
                  listNumber={1}
                  heading="Lorem Ipsum"
                  content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum "
                />
              </li>
              <li>
                <PrincipleListItem
                  listNumber={2}
                  heading="Lorem Ipsum"
                  content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum "
                />
              </li>
              <li>
                <PrincipleListItem
                  listNumber={3}
                  heading="Lorem Ipsum"
                  content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum "
                />
              </li>
              <li>
                <PrincipleListItem
                  listNumber={4}
                  heading="Lorem Ipsum"
                  content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum "
                />
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* <FaqsPage faqs={faqData} /> */}
    </div>
  );
};

export default AccordionData;
