interface PrincipleListItemProps {
  listNumber: number;
  heading: string;
  content: string;
}

const PrincipleListItem = ({
  listNumber,
  heading,
  content,
}: PrincipleListItemProps) => {
  return (
    <div className="flex items-start  gap-1">
      <span className=" text-[#0e0e0e] text-[15px]  lg:text-[17px]">
        {listNumber}
      </span>
      <div>
        <span className="text-[#0e0e0e] font-bold text-[15px] lg:text-[17px]">
          {heading} :{" "}
        </span>
        <span className="text-[#666] text-[15px] lg:text-[17px]">
          {content}
        </span>
      </div>
    </div>
  );
};

export default PrincipleListItem;
