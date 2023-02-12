import React, { useEffect } from "react";

const SignUp = () => {

  return (
    <div className="mt-28 sm:mt-32 mx-auto md:mt-36 bg-[color:var(--main-color)] shadow-[2px_4px_12px_rgba(0,0,0,0.2)] max-w-[480px] md:mx-auto shadow-[color:var(--shadow-color)] rounded-xl p-8">
      <form action="" className="w-4/5 mx-auto">
        <div className="flex flex-col items-center justify-center header">
          <h1 className="text-[color:var(--color-primary)] text-3xl font-semibold mb-2 text-center">
            {"Create An Account"}
          </h1>
          <div className="h-[0.30rem] w-12 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>

        <div className="body">

        </div>

        <div className="flex justify-around mt-8 footer">
        </div>
      </form>
    </div>
  );
};

export default SignUp;