interface ContactInputProps {
  label: string;
  id: string;
  name: string;
  type: string;
  textArea?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}
const ContactInput = ({
  label,
  textArea,
  name,
  type,
  id,
  register,
}: ContactInputProps) => {
  return (
    <div className="w-full text-left">
      <label
        htmlFor={id}
        className="block text-lg font-medium text-gray-700 lg:hidden mb-2 px-4"
      >
        {label}
      </label>
      <div className="w-full bg-gray-50 rounded-2xl shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-4 px-4 lg:px-10 py-4 lg:py-5">
          <div className="flex lg:w-[30%] w-full justify-between items-center">
            <label htmlFor={id} className="hidden lg:block lg:mr-2">
              {label}
            </label>
            <p className="hidden lg:block">:</p>
          </div>
          {textArea ? (
            <textarea
              id={id}
              {...register(name)}
              className="w-full lg:w-[60%] bg-gray-50 focus:ring-0 focus:outline-none"
            />
          ) : (
            <input
              type={type}
              {...register(name)}
              id={id}
              className="w-full lg:w-[60%] bg-gray-50 focus:ring-0 focus:outline-none"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInput;
