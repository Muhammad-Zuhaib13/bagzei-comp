import React from "react";
import BorderLine from "./BorderLine";

const Subscribe = () => {
  return (
    <div className="flex w-full items-center">
      <input
        type="email"
        placeholder="Enter your email here*"
        className="w-full bg-primary-1 font-footer-copyright-14 placeholder:font-footer-copyright-14 font-Akkurat placeholder:text-primary-4  focus:outline-none"
      />
      <button className="font-Akkurat text-primary-2 ">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Subscribe;
