const ContactFaqs = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <div className="w-full bg-[#eef9f6] mt-10">
      <div className="w-full  mx-auto">
        <div className="flex flex-col items-center lg:px-16 lg:p-12 pb-7">
          <div className="w-full max-w-[1500px] max-md:max-w-full">
            <div className="flex gap-8 md:gap-16 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full mt-5">
                <img
                  src={imageSrc}
                  className="object-cover h-[350px] lg:h-[500px] object-top rounded-2xl md:mt-14 w-full max-md:max-w-full"
                />
              </div>
              {/* <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full max-md:px-5">
                <div className="flex flex-col max-md:max-w-full">
                  <Faqs faqs={faqData} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFaqs;
