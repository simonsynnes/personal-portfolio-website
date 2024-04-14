"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/library/helpers";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    console.log(process.env);
    console.log(process.env.RESEND_API_KEY);
    data = await resend.emails.send({
      from: `onboarding@resend.dev`,
      to: "simonsynnes@gmail.com",
      subject: `Message from contact form - ${senderEmail}`,
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
