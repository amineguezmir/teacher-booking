"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook, Github } from "lucide-react";
import { LoginFormInputs } from "../../../types/types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const router = useRouter(); // Move useRouter here

  async function onSubmit(data: LoginFormInputs) {
    setIsLoading(true);
    try {
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        toast.error("Sign-in error: Check your credentials");
        setShowNotification(true);
      } else {
        setShowNotification(false);
        toast.success("Login Successful");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error("It seems something is wrong with your Network");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e1b4b] p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#1e1b4b]">
          Sign In
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {showNotification && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="font-medium">Sign-in error!</span> Please Check
              your credentials
            </Alert>
          )}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </Label>
            <Input
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e1b4b] focus:border-transparent"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password", { required: "Password is required" })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e1b4b] focus:border-transparent pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register("rememberMe")}
                className="h-4 w-4 text-[#1e1b4b] focus:ring-[#1e1b4b] border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[#1e1b4b] hover:text-[#2d2a5d]"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#1e1b4b] hover:bg-[#2d2a5d] text-white font-semibold py-2 rounded-md transition duration-300 ease-in-out"
            disabled={isLoading} // Optionally disable the button while loading
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="w-full border border-gray-300 hover:border-gray-400 text-gray-700"
            >
              <Github className="h-5 w-5 mr-2" />
              Google
            </Button>
            <Button
              variant="outline"
              className="w-full border border-gray-300 hover:border-gray-400 text-gray-700"
            >
              <Facebook className="h-5 w-5 mr-2" />
              Facebook
            </Button>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-[#1e1b4b] hover:text-[#2d2a5d]"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
