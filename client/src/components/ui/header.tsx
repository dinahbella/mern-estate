import Link from "next/link";
import React from "react";
import { AiFillMacCommand } from "react-icons/ai";

const Header = () => {
  return (
    <div className="shadow-lg p-2 flex bg-slate-100 justify-between items-center">
      <div className="flex-col justify-center items-center">
        <AiFillMacCommand className="text-6xl ml-2 text-blue-700" />
        <h4 className="font-bold">RealEstate</h4>
      </div>
      <input
        type="search"
        name="search"
        placeholder="search"
        className="focus:outline-none rounded-md h-8"
      />
      <div className="flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link
          href={"/signin"}
          className="bg-blue-700 px-4  text-white rounded-md"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
