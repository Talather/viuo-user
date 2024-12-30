import { useForm } from "react-hook-form";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { RegisterUserSchema } from "../lib/validations";
import { useAuth } from "../hooks/useAuth";
import { useToast } from "../hooks/use-toast";
// import { dummyUser } from "../components/constants/dummyuser";
import { Form, FormControl, FormField, FormItem } from "../components/ui/form";
import { Checkbox, Image } from "@nextui-org/react";

// import emailjs from "@emailjs/browser";

type RegisterUserFormData = z.infer<typeof RegisterUserSchema>;

const RegisterUser = () => {
  const { registerUser } = useAuth();
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const form = useForm<RegisterUserFormData>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      phoneNumber: "",
      agreeToPromotionalMessages: true,
    },
    mode: "onChange",
  });
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (values: RegisterUserFormData) => {
    setIsLoading(true);
    try {
      // const formData = {
      //   subject: "New User Registered",
      //   name: `${values.name}`,
      //   email: `${values.email}`,
      //   message: `
      //   Name: ${values.name}
      //   Email: ${values.email}
      //   Promotional Messages: ${
      //     values.agreeToPromotionalMessages ? "Agreed" : "Not Agreed"
      //   }`,
      // };

      // await emailjs.send(
      //   import.meta.env.VITE_EMAIL_JS_SERVICE_KEY,
      //   import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
      //   formData,
      //   {
      //     publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
      //   }
      // );

      setIsLoading(false);
      const timeZone:any=Intl.DateTimeFormat().resolvedOptions().timeZone

      registerUser(values.email, values.password,timeZone);

      toast({
        title: "Account Created Successfully.",
        description: "Use your email and password to login again anytime.",
      });
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast({
        title: "Error",
        description: `Unable to create account right now.`,
        variant: "destructive",
      });
    }
  };
  return (
    <div className="md:min-h-screen gap-5 lg:gap-10  md:mt-5  lg:mt-16 px-4 w-[95vw] grid md:grid-cols-2">
      <div className="relative hidden md:block">
        <Image
          src="/assets/brand/signup.jpeg"
          alt="Customer service representative"
          className="object-contain xl:object-cover h-[90vh]"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="w-full mb-5">
          <h2 className="text-4xl font-semibold md:text-3xl md:mb-2 md:mt-5">
            Create Account
          </h2>
          <p className="mb-3 text-xs text-secondary-text">
            Get access to exclusive features by creating an account
          </p>
        </div>
        <Form {...form}>
          <form
            className="flex flex-col w-full gap-5 lg:gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid gap-5 md:grid-cols-2 md:gap-2">
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem className="relative items-center ">
                    {/* <FormLabel className="">Email</FormLabel> */}
                    <div className="w-full">
                      <FormControl>
                        <Input
                          variant="bordered"
                          size="md"
                          type="name"
                          label="Name"
                          errorMessage={errors.name?.message}
                          isInvalid={!!errors.name?.message}
                          {...field}
                        />
                      </FormControl>
                      {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative items-center ">
                    {/* <FormLabel className="">Email</FormLabel> */}
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
                      {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative items-center  lg:gap-3">
                  {/* <FormLabel>Password</FormLabel> */}
                  <div className="w-full">
                    <FormControl>
                      <Input
                        variant="bordered"
                        size="md"
                        label="Password"
                        errorMessage={errors.password?.message}
                        isInvalid={!!errors.password?.message}
                        {...field}
                        endContent={
                          <button
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                            aria-label="toggle password visibility"
                          >
                            {isVisible ? (
                              <EyeOpenIcon className="text-2xl pointer-events-none text-default-400" />
                            ) : (
                              <EyeClosedIcon className="text-2xl pointer-events-none text-default-400" />
                            )}
                          </button>
                        }
                        type={isVisible ? "text" : "password"}
                      />
                    </FormControl>
                    {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="relative items-center ">
                  {/* <FormLabel className="">Email</FormLabel> */}
                  <div className="w-full">
                    <FormControl>
                      <Input
                        variant="bordered"
                        size="md"
                        type="number"
                        label="Phone number"
                        errorMessage={errors.phoneNumber?.message}
                        isInvalid={!!errors.phoneNumber?.message}
                        {...field}
                      />
                    </FormControl>
                    {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                  </div>
                </FormItem>
              )}
            />
            <Checkbox {...register("agreeToPromotionalMessages")}>
              <p className="text-xs">
                By checking this box I agree to receive automated promotional
                messages. This agreement is not a condition of purchase. Message
                frequency varies. Reply STOP to opt out or HELP for help.
                Message & data rates apply.{" "}
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

            <div className="flex items-center justify-between">
              <div></div>

              <Button
                radius="sm"
                className="font-bold text-white hover:bg-button-gpt-hover bg-button-gpt"
                isLoading={isLoading}
                variant="faded"
                type="submit"
              >
                Register
              </Button>
            </div>
          </form>
        </Form>
        {/* <Separator className="mt-10" /> */}
        <div className="flex items-center gap-2 mt-5">
          <p>Already have an account?</p>
          <NavLink
            to={"/login"}
            className={
              "text-button-gpt font-semibold hover:underline transition-all"
            }
          >
            Login here
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
