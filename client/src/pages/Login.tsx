import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/input.component";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data: object) => {
    console.log(data);
  };

  return (
    <div className="mt-28 sm:mt-32 mx-auto md:mt-36 bg-[color:var(--main-color)] shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[480px] md:mx-auto shadow-[color:var(--shadow-color)] rounded-xl p-8">
      <form
        action=""
        className="w-4/5 mx-auto"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-col items-center justify-center header">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-semibold mb-2 text-center">
            {"LogIn To Account"}
          </h1>
          <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>

        <div className="flex flex-col gap-4 mt-12">
          <Input
            register={register}
            type="text"
            name="email"
            placeholder="email..."
            errorMessage={errors.email?.message as string}
          />
          
          <Input
            register={register}
            type="password"
            name="password"
            placeholder="password..."
            errorMessage={errors.password?.message as string}
          />
          
        </div>

        <div className="flex justify-around mt-8 footer">
        <button
                type="submit"
                className="px-4 py-2 border-2 border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white rounded-full font-semibold hover:bg-white hover:text-[color:var(--color-primary)]"
              >
                LogIn
              </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
