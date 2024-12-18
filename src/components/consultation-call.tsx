import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "./button";
import { ConsultationSchema } from "../validations/schema";

type ConsultationFormData = z.infer<typeof ConsultationSchema>;

const ConsultationCall = ({ hideButton = true }: { hideButton?: boolean }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors, dirtyFields },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(ConsultationSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (values: ConsultationFormData) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Done");
    }
  };

  // const hasErrors = Object.keys(errors).length > 0;
  // const hasDirtyFields = Object.keys(dirtyFields).length > 0;

  // const customErrorMessage = hasErrors
  //   ? "All fields are required."
  //   : !hasDirtyFields
  //   ? "All fields are required."
  //   : "";

  return (
    <div className="min-h-[90vh]">
      <div className="w-full h-full">
        <div className="w-full h-full  flex flex-col md:flex-row items-center">
          <div className="w-full relative md:w-[50%] grow self-stretch ">
            <div className="gradient h-full">
              <img
                className="h-full object-cover  "
                src="/assets/images/consultationImage.png"
                alt="Free Consultation"
              />
            </div>
          </div>
          <div className="w-full md:w-[50%] flex items-center justify-center bg-[#bde6db] grow self-stretch">
            <div className="flex flex-col py-10 gap-y-4 items-center justify-center w-full px-4 md:w-[60%]">
              <h1 className="text-[18px] lg:text-[24px] font-semibold text-[#0e0e0e] text-center capitalize">
                Lorem Ipsum
              </h1>
              <p className="capitalize text-center text-[#444]">
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
              </p>
              <form
                action=""
                className="flex flex-col gap-y-4 md:gap-y-8 w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  id="name"
                  className="w-full py-2 px-4 border rounded-md focus:outline-none"
                  placeholder="Name"
                  {...register("name")}
                />
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full py-2 px-4 border rounded-md focus:outline-none"
                  placeholder="Email"
                />
                <div className="flex items-center gap-4">
                  <input
                    min={1}
                    type="number"
                    {...register("countryCode")}
                    id="countryCode"
                    className=" w-[20%] py-2 px-4 border rounded-md focus:outline-none"
                    placeholder="+1"
                  />
                  <input
                    min={1}
                    type="number"
                    {...register("phoneNumber")}
                    id="countryCode"
                    className="w-full py-2 px-4 border rounded-md focus:outline-none"
                    placeholder="Phone number"
                  />
                </div>
                {/* {customErrorMessage && customErrorMessage.length && (
                  <p className="text-red-500 text-center font-semibold text-sm">
                    {customErrorMessage}
                  </p>
                )} */}
                {!hideButton && <Button type="submit">Schedule A Call</Button>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationCall;
