const TeamInfoListItem = ({ content }: { content: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="min-h-[16px] min-w-[16px] bg-[#23AB84] rounded-full"></div>
      <p>{content}</p>
    </div>
  );
};

export default TeamInfoListItem;
