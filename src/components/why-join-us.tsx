import JoinCard from "./cards/join-card";

const joinUsArr = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Innovative Environment",
    content:
      "Work with cutting-edge technology and help us revolutionize bill management.",
    list: [
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
    ],
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1531535807748-218331acbcb4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Collaborative Culture",
    content:
      "Our team is driven by collaboration and inclusivity. We value diversity, equity, and inclusion in every aspect of our work. You'll work alongside talented professionals who share your passion for making a positive impact.",
    list: [
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
    ],
  },

  {
    imgSrc:
      "https://images.pexels.com/photos/5833262/pexels-photo-5833262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    heading: "Growth Opportunities",
    content:
      "Vuior is a fast-growing company, and we’re committed to helping our team members grow with us. Whether you're looking to advance your career or learn new skills, Vuior offers a wealth of opportunities to build your future.",
    list: [
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
    ],
  },

  {
    imgSrc: "https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg",
    heading: "Work-Life Balance",
    content:
      "We believe that happy, balanced employees are the key to success. Explore our remote positions!",
    list: [
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
      { content: "Lorem Ipsum " },
    ],
  },
];

const WhyJoinUs = () => {
  return (
    <div className="w-full bg-[#eef9f6] mt-[70px]">
      <div className="w-full mx-auto">
        <div className="flex justify-center items-center px-16 py-12 max-md:px-5">
          <div className="flex flex-col items-center w-full max-w-[1484px] max-md:max-w-full">
            <div className="flex flex-col items-start justify-start text-center font-poppins text-xl font-semibold text-[#0f4a3f] mx-auto min-h-fit w-fit">
              <h1 className="heading">Why Join the Vuior Ecosystem</h1>
              <div className="border-b-4 border-[#23AB84] w-[90%]"></div>
            </div>
            <div className="max-md:max-w-full">
              <div className="flex flex-wrap w-full items-center justify-around gap-5 gap-y-10 max-md:gap-0 place-items-center">
                {joinUsArr.map((item, index) => (
                  <JoinCard key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
