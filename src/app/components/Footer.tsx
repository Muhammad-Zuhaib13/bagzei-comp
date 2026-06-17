import Image from "next/image";
import React from "react";
import ScreenContainer from "./ScreenContainer";
import Link from "next/link";

const customerCareData = {
  title: "Customer Care",
  links: [
    { label: "Track Your Order", href: "#" },
    { label: "Start a Return", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Shipping & Delivery", href: "#" },
    { label: "Exchanges & Returns", href: "#" },
    { label: "Payment Methods", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
const aboutBagzei = {
  title: "About Bagzei",
  links: [
    { label: "Our Story", href: "#" },
    { label: "Craftsmanship", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Journal", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Store Experience", href: "#" },
    { label: "Luxury Collections", href: "#" },
    { label: "Bagzei Rewards", href: "#" },
    { label: "Affiliate Program", href: "#" },
  ],
};
const copyRightData = {
  text: "Copyright © 2026 BAGZEI. All Rights Reserved.",
};
const termsAndConditionsData = {
  term: "Terms of Service",
  privacy: "Privacy Policy",
  cookies: "Cookies",
};
const newsLetter = {
  title: "Newsletter",
  description:
    "Subscribe to the Bagzei newsletter and enjoy exclusive access to new collections, and special offers.",
};
const socialIcons = [
  { name: "Facebook", href: "#", src: "/assets/icons/facebook.svg", alt: "facebook icon" },
  { name: "Twitter", href: "#", src: "/assets/icons/twitter.svg", alt: "twitter icon" },
  { name: "Instagram", href: "#", src: "/assets/icons/instagram.svg", alt: "instagram icon" },
  { name: "Youtube", href: "#", src: "/assets/icons/youtube.svg", alt: "youtube icon" },
];
const Footer = () => {
  return (
    <div className="relative justify-center items-center ">
      <div className="w-full h-[608px] absolute left-0 right-0  z-[1]">
        <Image src="/assets/images/footer-bg.png" alt="Footer Image" fill />
      </div>

      <div className="relative z-[2] py-[80px] flex items-center justify-center ">
        <ScreenContainer>
          <div className="px-[40px] py-[40px] bg-primary-1">
            <div className="w-full  grid grid-cols-3 gap-[20px]">
              {/* accord 1 */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex">
                  <p className="font-footer-title-20 font-ChronicleDisplay text-primary-2">
                    {customerCareData.title}
                  </p>
                  {/* accord icon will definetely add here */}
                </div>
                <ul className="flex flex-col">
                  {customerCareData.links.map((link, index) => (
                    <li
                      key={index}
                      className="font-footer-link-14 font-Akkurat text-primary-2"
                    >
                      <Link href={link.href} className="hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* accord 2 */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex">
                  <p className="font-footer-title-20 font-ChronicleDisplay text-primary-2">
                    {aboutBagzei.title}
                  </p>
                </div>
                <ul className="flex flex-col">
                  {aboutBagzei.links.map((link, index) => (
                    <li
                      key={index}
                      className="font-footer-link-14 font-Akkurat text-primary-2"
                    >
                      <Link href={link.href} className="hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* accordion 3 is here */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex">
                  <p className="font-footer-title-20 font-ChronicleDisplay text-primary-2">
                    {newsLetter.title}
                  </p>
                </div>
                <div className="flex flex-col gap-[24px]">
                  <p className="font-footer-link-14 font-Akkurat text-primary-2">
                    {newsLetter.description}
                  </p>

                  <div className="flex gap-[20px] items-center">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="bg-primary-1 border border-primary-3 placeholder:text-primary-3 text-primary-2 focus:outline-none"
                    />
                    <button className="bg-primary-2 text-primary-1 hover:bg-primary-3 py-[10px] px-[20px]">
                      Subscribe
                    </button>
                  </div>
                  <div className="flex gap-[20px] items-center">
                    <Link href="#" className="text-primary-2 hover:underline">
                      <Image
                        alt="social media icons"
                        src=""
                        width={16}
                        height={16}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-[34px]">
              <p className="font-footer-copyright-14 font-Akkurat text-primary-2">
                {copyRightData.text}
              </p>
              <ul className="font-footer-copyright-14 font-Akkurat text-primary-2 flex gap-[12px] ">
                <li>
                  <Link href="#" className="hover:underline">
                    {termsAndConditionsData.term}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {termsAndConditionsData.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {termsAndConditionsData.cookies}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </ScreenContainer>
      </div>
    </div>
  );
};

export default Footer;
