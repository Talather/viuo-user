import { z } from "zod";
import { JobApplicationSchema } from "../lib/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { cn } from "../lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../components/ui/calendar";

type JobApplicationData = z.infer<typeof JobApplicationSchema>;

const JobApplication = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<JobApplicationData>({
    resolver: zodResolver(JobApplicationSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      agreeToPromotionalMessages: true,
      phoneNumber: "",
      timeSlot: "",
    },
  });
  // const fileRef = form.register("file");

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const onSubmit = async (values: JobApplicationData) =>
    // values: JobApplicationData
    {
      setIsLoading(true);
      const selectedDate = format(values.date, "PPP");

      const formData = {
        subject: "New Job Application Received",
        name: `${values.firstName} ${values.lastName}`,
        email: `${values.email}`,
        phone: values.phoneNumber,
        selectedDate: selectedDate,
        timeSlot: values.timeSlot,
        agreeToPromotionalMessages: `${
          values.agreeToPromotionalMessages ? "Agreed" : "Not Agreed"
        }`,
      };

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAIL_JS_SERVICE_KEY,
          import.meta.env.VITE_EMAIL_JS_JOB_TEMPLATE_ID,
          formData,
          {
            publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
          }
        );
        toast({
          title: "Success",
          description: "Application Submitted",
        });
        form.reset();
      } catch (error) {
        toast({
          title: "Error",
          description: "Unable to submit application",
          variant: "destructive",
        });
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

  return (
    <div className="w-full flex-col flex items-center justify-center ">
      <div className="mb-5 w-full">
        <h2 className="md:text-3xl text-4xl md:mb-2 font-semibold mb-5">
          Details about you
        </h2>
      </div>
      <Form {...form}>
        <form
          className="flex w-full flex-col gap-8 lg:gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="relative items-center ">
                  <div className="w-full">
                    <FormControl>
                      <Input
                        variant="bordered"
                        size="md"
                        type="firstName"
                        label="First Name"
                        errorMessage={errors.firstName?.message}
                        isInvalid={!!errors.firstName?.message}
                        {...field}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="relative items-center ">
                  <div className="w-full">
                    <FormControl>
                      <Input
                        variant="bordered"
                        size="md"
                        type="lastName"
                        label="Last Name"
                        errorMessage={errors.lastName?.message}
                        isInvalid={!!errors.lastName?.message}
                        {...field}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative items-center ">
                <div className="w-full">
                  <FormControl>
                    <Input
                      variant="bordered"
                      size="md"
                      type="email"
                      label="Email"
                      errorMessage={errors.email?.message}
                      isInvalid={!!errors.email?.message}
                      {...field}
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="relative items-center ">
                <div className="w-full">
                  <FormControl>
                    <Input
                      variant="bordered"
                      size="md"
                      label="Phone Number"
                      errorMessage={errors.phoneNumber?.message}
                      isInvalid={!!errors.phoneNumber?.message}
                      {...field}
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="file"
            render={() => {
              return (
                <FormItem>
                  <FormLabel>Upload Resume</FormLabel>
                  <FormControl>
                    <Input type="file" placeholder="shadcn" {...fileRef} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          /> */}
          <Select
            {...register("timeSlot")}
            variant="bordered"
            size="lg"
            placeholder="Select a time slot"
            errorMessage={errors.timeSlot?.message}
            isInvalid={!!errors.timeSlot?.message}
          >
            <SelectItem key="Morning 6-11am">Morning 6-11am</SelectItem>
            <SelectItem key="Afternoon 12-6pm">Afternoon 12-6pm</SelectItem>
            <SelectItem key="Evening 7-11pm">Evening 7-11pm</SelectItem>
          </Select>
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                {/* <FormLabel>Date of birth</FormLabel> */}
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="bordered"
                        size="lg"
                        disableRipple
                        className={cn(
                          " pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="center">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date("1900-01-01")}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <Checkbox {...register("agreeToPromotionalMessages")}>
            <p className="text-xs">
              By checking this box I agree to receive automated promotional
              messages. This agreement is not a condition of purchase. Message
              frequency varies. Reply STOP to opt out or HELP for help. Message
              & data rates apply.{" "}
              <NavLink
                className={"underline text-button-gpt"}
                to={"/terms-of-service"}
              >
                Terms
              </NavLink>{" "}
              and{" "}
              <NavLink
                className={"underline text-button-gpt"}
                to={"/privacy-policy"}
              >
                privacy policy
              </NavLink>
              .
            </p>
          </Checkbox>
          <div className="flex items-center justify-between mt-10">
            <div></div>

            <Button
              radius="sm"
              className="text-white font-bold hover:bg-button-gpt-hover bg-button-gpt"
              isLoading={isLoading}
              variant="faded"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default JobApplication;
