"use client";

import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/input/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../components/products/Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SafeUser } from "../../../types";

interface LoginFormProps {
  currentUser: SafeUser | null | undefined;
}

const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Logged In");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  if (currentUser) {
    return <p className="text-center">Logged in. Redirecting...</p>;
  }

  return (
    <>
      <Heading title="Sign in to Girls" />
      <Button
        label="Continue with Google"
        outline
        icon={FcGoogle}
        onClick={() => {
          signIn("google");
        }}
      />
      <hr className="w-full h-px bg-violet-300" />
      <Input
        id="email"
        label="Email"
        register={register}
        errors={errors}
        disabled={isLoading}
        required
      />
      <Input
        id="password"
        label="Password"
        register={register}
        errors={errors}
        disabled={isLoading}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading" : "Login"}
        disabled={isLoading}
        onClick={handleSubmit(onSubmit)}
      />
      <span>
        Do not have an account?{" "}
        <Link href="/register" className="underline">
          Sign Up
        </Link>
      </span>
    </>
  );
};

export default LoginForm;
