import { z } from "zod";
import { isValidPhoneNumber } from 'react-phone-number-input';

export const ConsultationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  countryCode: z.string().min(1, "Country Code is required"),
  phoneNumber: z.string().min(1, "Phone number is required."),
});

export const ContactSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  phoneNumber: z.string().optional().refine((value) => {
    if (!value) return true; // Allow empty phone number
    return isValidPhoneNumber(value);
  }, "Please enter a valid phone number"),
  email: z.string().email(),
  message: z.string().min(1, "Message is required"),
  file: z.object({}),
});
