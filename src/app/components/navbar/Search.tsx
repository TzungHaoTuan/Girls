"use client";

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Search = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) return router.push("/");

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: { searchTerm: data.searchTerm },
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
    reset();
  };

  return (
    <div className="flex items-center">
      <input
        {...register("searchTerm")}
        autoComplete="off"
        type="text"
        className="w-80 p-2 border-2 border-violet-300 focus:outline-none focus:border-violet-400 rounded-l-md"
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className="border-2 border-violet-300 bg-violet-300 text-white p-2 rounded-r-md hover:bg-violet-400 hover:border-violet-400"
      >
        search
      </button>
    </div>
  );
};

export default Search;
