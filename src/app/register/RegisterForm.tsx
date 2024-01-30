"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/input/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../components/products/Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
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
