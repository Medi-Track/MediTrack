import React from "react";
import Navbar from "./Navbar";

interface ParentCompProps {
    children?: React.ReactNode;
  }

const Layout:React.FC<ParentCompProps> = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="w-11/12 md:w-10/12  lg:w-4/5 mx-auto max-w-[1440px] m-24">
        <main className="">{props.children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
