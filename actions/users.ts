"use server";

import { prismaClient } from "@/lib/db";
import { RegisterFormInputs } from "../types/types";
import bcrypt from "bcrypt";
import { Resend } from "resend";
import EmailTemplate from "@/components/Emails/email-template";

export async function createUser(formData: RegisterFormInputs) {
  console.log("createUser function called"); // Log for function invocation
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, role, password } = formData;

  try {
    console.log("Checking for existing user...");
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    console.log("Existing user check complete");

    if (existingUser) {
      console.error(
        `User with this email (${email}) already exists in the Database`
      );
      return {
        data: null,
        error: `User with this email (${email}) already exists in the Database`,
        status: 409,
      };
    }

    // Encrypt the Password => bcrypt
    console.log("Encrypting password...");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password encrypted successfully.");

    // Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const userToken = generateToken();
    console.log("Generated token:", userToken);

    const newUser = await prismaClient.user.create({
      data: {
        name: name,
        email,
        password: hashedPassword,
        role,
        token: userToken,
      },
    });

    console.log("New user created:", newUser);

    const token = newUser.token;
    const userId = newUser.id;
    const firstName = newUser.name?.split(" ")[0];
    const linkText = "Verify your Account";
    const message =
      "Thank you for registering with Gecko. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website:";

    console.log("Attempting to send email...");
    try {
      const sendMail = await resend.emails.send({
        from: "TechMentor <info@TechMentor.com>",
        to: email,
        subject: "Verify Your Email Address",
        react: EmailTemplate({ firstName, token, linkText, message }),
      });

      console.log("Email sent response:", sendMail);

      if (sendMail) {
        console.log(`Email sent successfully to ${email}`);
      } else {
        console.error(`Failed to send email to ${email}`);
      }
    } catch (error) {
      console.error("Failed to send email:", error);
    }

    console.log(`Token generated: ${token}`);
    return {
      data: newUser,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      data: null,
      error: error instanceof Error ? error.message : "An error occurred",
      status: 500,
    };
  }
}
