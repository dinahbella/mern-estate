import SignIn from "@/app/component/signin";
import React from "react";
import { AiFillMacCommand } from "react-icons/ai";

const Header = () => {
  return (
    <div className="shadow-lg p-2 flex bg-slate-100 justify-between items-center">
      <div className="flex-col justify-center items-center">
        <AiFillMacCommand className="text-6xl ml-2 text-blue-700" />
        <h4 className="font-bold">RealEstate</h4>
      </div>
      <SignIn />
    </div>
  );
};

export default Header;
