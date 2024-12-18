import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../../../ui/form";
import { useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardBody, Checkbox, Divider } from "@nextui-org/react";
import { useAuth } from "../../../../hooks/useAuth";
import { ContactUsSchema } from "../../../../lib/validations";
import { useToast } from "../../../../hooks/use-toast";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";

type ContactUsFormData = z.infer<typeof ContactUsSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useAuth();

  const form = useForm<ContactUsFormData>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      email: user?.email || "",
      message: "",
      name: user?.name || "",
      subject: "",
      agreeToPromotionalMessages: true,
      phoneNumber: "",
    },
    mode: "onChange",
  });

  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = form;

  const onSubmit = async (values: ContactUsFormData) => {
    setIsLoading(true);
    const formData = {
      name: values.name,
      email: values.email,
      phone: values.phoneNumber,
      subject: values.subject,
      message: values.message,
      agreeToPromotionalMessages: `${
        values.agreeToPromotionalMessages ? "Agreed" : "Not Agreed"
      }`,
      // subject: values.subject,
      // email: values.email,
      // name: values.name,
      // message: `
      // Name: ${values.name}
      // Email: ${values.email}
      // Message: ${values.message}
      // Promotional Messages: ${
      //   values.agreeToPromotionalMessages ? "Agreed" : "Not Agreed"
      // }`,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_KEY,
        import.meta.env.VITE_EMAIL_JS_CONTACT_US_TEMPLATE_ID,
        formData,
        {
          publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
        }
      );

      toast({
        title: "Success",
        description: "Message sent. We will get back to you soon.",
      });

      reset({});
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Unable to send message right now",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-4">
      <CardBody>
        <h3 className="text-button-gpt font-semibold">Get in Touch</h3>
        <h2 className="md:text-3xl text-5xl lg:text-5xl font-semibold mt-4 mb-4 ">
          We’re Here to Help
        </h2>
        <p className=" text-secondary-text">
          Have questions or need assistance? Our team is here to make sure you
          have the best experience possible with Vuior. For general inquiries,
          partnership opportunities, or customer support, feel free to reach out
          to us anytime. We’re always ready to help!
        </p>
        <Divider className="my-10" />
        <Form {...form}>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Name</FormLabel> */}
                  <FormControl>
                    <Input
                      variant="bordered"
                      size="md"
                      label="Name"
                      errorMessage={errors.name?.message}
                      isInvalid={!!errors.name?.message}
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Email</FormLabel> */}
                  <FormControl>
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
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Subject</FormLabel> */}
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
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Subject</FormLabel> */}
                  <FormControl>
                    <Input
                      variant="bordered"
                      size="md"
                      label="Subject"
                      errorMessage={errors.subject?.message}
                      isInvalid={!!errors.subject?.message}
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Message</FormLabel> */}
                  <FormControl>
                    <Textarea
                      variant="bordered"
                      size="lg"
                      label="Message"
                      errorMessage={errors.message?.message}
                      isInvalid={!!errors.message?.message}
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage /> */}
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
            <Button
              radius="sm"
              className="text-white font-bold mt-5 w-fit ml-auto hover:bg-button-gpt-hover bg-button-gpt"
              isLoading={isLoading}
              variant="faded"
              type="submit"
            >
              Send message
            </Button>
          </form>
        </Form>
      </CardBody>
    </Card>
  );
};

export default ContactForm;
