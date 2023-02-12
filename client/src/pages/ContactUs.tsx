import React from "react";
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { twMerge } from "tailwind-merge";
import Input from "../components/input.component";

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data: object) => {
    console.log(data);
  };
  return (
    <div className="mx-auto mt-28">
      <div className="flex flex-col items-center justify-center header">
        <h1 className="text-[color:var(--color-primary)] text-4xl font-semibold mb-2 text-center">
          Contact Us
        </h1>
        <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
        <p
          className={twMerge(
            "mt-4 text-sm"
            // isDarkMode ? "text-gray-300" : "text-gray-400"
          )}
        >
          Any question and remarks? Just write us a message!
        </p>
      </div>
      <div className="mt-6 bg-[color:var(--main-color)] shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[780px] md:mx-auto shadow-[color:var(--shadow-color)] rounded-xl p-4  flex flex-col-reverse sm:flex-row ">
        <div
          className={twMerge(
            "bg-gradient-to-r from-[color:var(--color-primary)] to-teal-300 right-half p-8 basis-1/2 flex flex-col  rounded-xl justify-between"
            // isDarkMode ? "text-black" : "text-white"
          )}
        >
          <div>
            <h3 className="text-2xl">Contact Information</h3>
            <p className="mt-2 text-sm">
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>
          </div>
          <div className="mt-12 ">
            <ul className="flex flex-col items-start justify-center gap-6 text-sm">
              <li className="flex items-center justify-center gap-2">
                <BsFillTelephoneFill /> 011 1124567
              </li>
              <li className="flex items-center justify-center gap-1">
                <MdEmail className="text-lg" /> meditrack@gmail.com
              </li>
              <li className="flex items-center justify-center gap-1">
                <ImLocation className="text-lg" /> Jamia Nagar New Delhi
              </li>
            </ul>
          </div>
          <div className="flex justify-between mt-12 text-2xl items-ceter">
            <button
              className={twMerge(
                "hover:scale-110  duration-500 ease-in-out"
                // isDarkMode ? "hover:text-white" : "hover:text-black"
              )}
            >
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
            </button>
            <button
              className={twMerge(
                "hover:scale-110  duration-500 ease-in-out"
                // isDarkMode ? "hover:text-white" : "hover:text-black"
              )}
            >
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </button>
            <button
              className={twMerge(
                "hover:scale-110  duration-500 ease-in-out"
                // isDarkMode ? "hover:text-white" : "hover:text-black"
              )}
            >
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <BsTwitter />
              </a>
            </button>
            <button
              className={twMerge(
                "hover:scale-110  duration-500 ease-in-out"
                // isDarkMode ? "hover:text-white" : "hover:text-black"
              )}
            >
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </button>
          </div>
        </div>
        <div className="p-8 basis-1/2">
          <form
            action=""
            className="mx-auto"
            onSubmit={handleSubmit(submitForm)}
          >
            <div className="flex flex-col gap-8 body">
              <Input
                register={register}
                type="text"
                name="username"
                placeholder="username..."
                errorMessage={errors.username?.message as string}
              />
              <Input
                register={register}
                type="text"
                name="email"
                placeholder="email..."
                errorMessage={errors.email?.message as string}
              />
              <Input
                register={register}
                type="text"
                name="message"
                placeholder="username..."
                errorMessage={errors.message?.message as string}
                rows={6}
              ></Input>
            </div>

            <div className="flex justify-around mt-8 footer">
              <button
                type="submit"
                className="px-4 py-2 border-2 border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white rounded-full font-semibold hover:bg-white hover:text-[color:var(--color-primary)]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
