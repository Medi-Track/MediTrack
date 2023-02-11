import React from "react";

interface PropInterface{
    children?:React.ReactNode,
    className:string,
    type:any
}

const Button:React.FC<PropInterface> = ({ children, className, ...props }) => {
  return (
    <button
      className={` border-2 border-[color:var(--color-primary)]  rounded-full font-semibold duration-500 ease-in-out  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;