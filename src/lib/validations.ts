import { z } from "zod";
import { isValidPhoneNumber } from 'react-phone-number-input';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const RegisterUserSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  agreeToPromotionalMessages: z.boolean().optional(),
  dob: z.string().min(5, "Date of birth is required"),
});

export const ResetPasswordSchema = z.object({
  email: z.string().email(),
  // password: z.string().min(6),
  // confirmPassword: z.string().min(6),
});

export const ContactUsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  subject: z.string().min(1, "Subject is required"),
  phoneNumber: z.string().optional().refine((value) => {
    if (!value) return true; // Allow empty phone number
    return isValidPhoneNumber(value);
  }, "Please enter a valid phone number"),
  message: z.string().min(1, "Message is required"),
  agreeToPromotionalMessages: z.boolean().optional(),
  // file: z
  //   .instanceof(FileList)
  //   .refine((files) => files.length > 0, "File is required")
  //   .refine(
  //     (files) =>
  //       Array.from(files).every((file) =>
  //         ["application/pdf", "application/msword"].includes(file.type)
  //       ),
  //     "Only PDF or Word documents are allowed"
  //   ),
});

export const ConsultationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  date: z.date({
    required_error: "Date is required.",
  }),
  timeSlot: z.string().min(1, "Time slot is required"),

  agreeToPromotionalMessages: z.boolean().optional(),
  phoneNumber: z.string().min(1, "Phone number is required."),
});

// import { z } from 'zod'

export const JobApplicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  whydoyouwanttoworkatvuior: z.string().min(1, "Is required"),
  // jobTitle: z.string().min(1, "Job Title is required"),
  email: z.string().email(),
  phoneNumber: z.string().optional().refine((value) => {
    if (!value) return true; // Allow empty phone number
    return isValidPhoneNumber(value);
  }, "Please enter a valid phone number"),
  agreeToPromotionalMessages: z.boolean().optional(),
  // date: z.date({
  //   required_error: "Date is required.",
  // }),
  // timeSlot: z.string().min(1, "Time slot is required"),
  file: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "File is required")
    .refine(
      (files) =>
        Array.from(files).every((file) =>
          ["application/pdf", "application/msword"].includes(file.type)
        ),
      "Only PDF or Word documents are allowed"
    ),
});
