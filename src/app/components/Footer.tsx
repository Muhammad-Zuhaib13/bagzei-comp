import Image from "next/image";
import React from "react";
import ScreenContainer from "./ScreenContainer";

// const data = 
const Footer = () => {
  return (
    <div className="relative justify-center items-center ">
      <div className="w-full h-[608px] absolute left-0 right-0  z-[1]">
        <Image src="/assets/images/footer-bg.png" alt="Footer Image" fill />
      </div>

      <div className="relative z-[2] py-[80px] flex items-center justify-center ">
        '
        <ScreenContainer>
          <div className="w-full px-[40px] py-[40px] bg-primary-1 grid grid-cols-3 gap-[20px]">
            {/* accord 1 */}
            <div className="flex flex-col gap-[30px]">
              <div className="flex">
                <p>Customer Care</p>
                {/* accord icon will definetely add here */}
              </div>
              <ul className="flex flex-col">
                <li>Track Your Order</li>
                <li>Track Your Order</li>
                <li>Track Your Order</li>
                <li>Track Your Order</li>
                <li>Track Your Order</li>
              </ul>
            </div>
            <div className="">2</div>
            <div className="">3</div>
          </div>
        </ScreenContainer>
      </div>
    </div>
  );
};

export default Footer;
