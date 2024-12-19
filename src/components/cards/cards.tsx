interface CreateCardProps {
  handleClick: () => void; // Function type for the onClick handler
  title: string; // Title should be a string
  subTitle: string; // SubTitle should also be a string
}

const CreateCard: React.FC<CreateCardProps> = ({
  handleClick,
  title,
  subTitle,
}) => {
  return (
    <div
      className="overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
      onClick={handleClick}
    >
      <div className="p-4">
        <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
        <p className="mt-2 text-gray-500">{subTitle}</p>
      </div>
      <div className="flex justify-end p-4">
        <button className="px-4 py-2 font-semibold text-white transition duration-200 bg-blue-500 rounded-full hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CreateCard;
