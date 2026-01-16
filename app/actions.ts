'use server'

import { z } from 'zod';
import Airtable from 'airtable';

// 1. Define the validation schema
// This ensures we only accept valid emails.
const schema = z.object({
  email: z.string().email("Please enter a valid work email."),
});

// 2. Define the return type for our form
export type FormState = {
  success: boolean;
  message: string;
  errors?: {
    email?: string[];
  };
};

// 3. The main function called when the user clicks "Submit"
export async function submitRsvp(prevState: FormState, formData: FormData): Promise<FormState> {
  // Extract the email from the form input
  const email = formData.get('email') as string;

  // Validate the data using Zod
  const validatedFields = schema.safeParse({ email });

  // If validation fails, return errors to the UI
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // If validation passes, send to Airtable
  try {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_BASE_ID!
    );

    await base(process.env.AIRTABLE_TABLE_NAME!).create([
      {
        fields: {
          Email: validatedFields.data.email,
          Status: 'Pending',
          Source: 'Landing Page',
        },
      },
    ]);

    return {
      success: true,
      message: "You're on the list! We'll be in touch shortly.",
    };
  } catch (error) {
    console.error("Airtable Error:", error);
    return {
      success: false,
      message: "System error. Please try again later.",
    };
  }
}