"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/input/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../components/products/Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Account created");
        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.push("/cart");
            router.refresh();
            toast.success("Logged In");
          }
          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <Heading title="Sign up for Girls" />
      <Button
        label="Sign up with Google"
        outline
        icon={FcGoogle}
        onClick={() => {}}
      />
      <hr className="w-full h-px bg-violet-300" />
      <Input
        id="name"
        label="Name"
        register={register}
        errors={errors}
        disabled={isLoading}
        required
      />
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
        label={isLoading ? "Loading" : "Sign Up"}
        disabled={isLoading}
        onClick={handleSubmit(onSubmit)}
      />
      <span>
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Log in
        </Link>
      </span>
    </>
  );
};

export default RegisterForm;
