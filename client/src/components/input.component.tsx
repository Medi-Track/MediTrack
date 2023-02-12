import React, { ReactElement } from "react";
import { BsFillPhoneFill, BsKeyboard } from "react-icons/bs";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

interface PROPS_INTERFACE {
  errorMessage?: string;
  type: string;
  register: Function;
  name: string;
  placeholder: string;
  rows?: number;
  Icon: React.ElementType;
}

const Input: React.FC<PROPS_INTERFACE> = ({
  type,
  name,
  register,
  errorMessage,
  placeholder,
  rows,
  Icon,
}) => {
  const isError = errorMessage !== undefined;
  if (rows) {
    return (
      <div className="relative">
        <div
          className={twMerge(
            `flex items-centerpx-2 pl-2 py-3 border-[0.12rem] border-gray-100 rounded-md focus-within:border-[color:var(--color-primary)]`
          )}
        >
          <Icon className="text-[color:var(--color-primary)]  mx-1 text-md" />
          <textarea
            name={name}
            className={twMerge(
              `  ml-1 outline-none text-[color:var(--secondary-text-color)] text-sm w-full `
            )}
            type={type}
            placeholder={placeholder}
            {...register(name)}
            rows={rows}
          />
        </div>
        {isError && (
          <p className="text-red-400 text-xs text-left absolute mt-[0.1rem]">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
  return (
    <div className="relative">
      <div
        className={twMerge(
          `flex items-center px-2 py-2.5 border-[0.12rem] border-gray-100 rounded-md focus-within:border-[color:var(--color-primary)]`
        )}
      >
        <Icon className="text-[color:var(--color-primary)]  mx-1 text-md" />
        <input
          name={name}
          className={twMerge(
            `  mx-1.5 outline-none text-[color:var(--secondary-text-color)] text-sm w-full `
          )}
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
      {isError && (
        <p className="text-red-400 text-xs text-left absolute mt-[0.1rem]">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
