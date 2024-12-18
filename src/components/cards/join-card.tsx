interface ListItem {
  content: string;
}
interface JoinCardProps {
  imgSrc: string;
  heading: string;
  content: string;
  list: ListItem[];
}

const JoinCard = ({ imgSrc, heading, content, list }: JoinCardProps) => {
  return (
    <div className="group relative flex flex-col max-md:ml-0 w-full md:max-w-[460px] gap-5 self-stretch">
      <div className="flex flex-col items-start py-8 pr-16 pl-7 mt-1 w-full font-medium bg-white rounded-2xl shadow-sm text-stone-950 max-md:px-5 max-md:mt-10 max-md:max-w-full h-full">
        <img
          src={imgSrc}
          alt=""
          className="w-32 rounded-full object-cover aspect-square"
        />
        <h2 className="mt-7 text-[18px] lg:text-[22px] font-semibold capitalize">
          {heading}
        </h2>
        <p className="mt-3 text-[16px] lg:text-[1vw] leading-8 text-stone-500">
          {content}
        </p>
        <div className="flex gap-2.5 mt-5 leading-10 capitalize">
          <div className="flex-auto">
            <div className="flex flex-col items-start text-[16px] lg:text-[18px]">
              {list.map((item, index) => (
                <JoinCardItem key={index} content={item.content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCard;

const JoinCardItem = ({ content }: { content: string }) => {
  return (
    <div className="flex gap-2 items-start">
      <div className="min-h-[16px] min-w-[16px] mt-2 ">
        <img src="/assets/icons/check.png" alt="tick" />
      </div>
      <p className="text-[#0E0E0E] ">{content}</p>
    </div>
  );
};
