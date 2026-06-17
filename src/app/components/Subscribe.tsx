import React from 'react'

const Subscribe = () => {
  return (
    <div className="flex gap-[20px] justify-between items-center">
      <input
        type="email"
        placeholder="Enter your email here*"
        className="bg-primary-1 font-footer-copyright-14 placeholder:font-footer-copyright-14 font-Akkurat placeholder:text-primary-4  focus:outline-none"
      />
      <button className="font-Akkurat text-primary-2 hover:bg-primary-3 py-[10px] px-[20px]">
        SUBSCRIBE
      </button>
    </div>
  );
}

export default Subscribe
