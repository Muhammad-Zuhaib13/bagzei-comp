import Image from "next/image";
import React from "react";
import ScreenContainer from "./ScreenContainer";
import Link from "next/link";
import Subscribe from "./Subscribe";

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
  {
    name: "Youtube",
    href: "#",
    src: "/assets/icons/youtube.svg",
    alt: "youtube icon",
  },
  {
    name: "Facebook",
    href: "#",
    src: "/assets/icons/facebook.svg",
    alt: "facebook icon",
  },
  {
    name: "Twitter",
    href: "#",
    src: "/assets/icons/twitter.svg",
    alt: "twitter icon",
  },
  {
    name: "Instagram",
    href: "#",
    src: "/assets/icons/instagram.svg",
    alt: "instagram icon",
  },
];
const paymentData = [
  {
    name: "Visa",
    src: "/assets/icons/pay/ppay.svg",
    alt: "visa icon",
  },
  {
    name: "Visa",
    src: "/assets/icons/pay/visa.svg",
    alt: "visa icon",
  },
  {
    name: "Mastercard",
    src: "/assets/icons/pay/bankTransfer.svg",
    alt: "mastercard icon",
  },
  {
    name: "American Express",
    src: "/assets/icons/pay/americanPay.svg",
    alt: "american express icon",
  },
  {
    name: "American Express",
    src: "/assets/icons/pay/jcb.svg",
    alt: "american express icon",
  },
  {
    name: "Union Pay",
    src: "/assets/icons/pay/unionpay.svg",
    alt: "american express icon",
  },
  {
    name: "Apple Pay",
    src: "/assets/icons/pay/applePay.svg",
    alt: "american express icon",
  },
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
                <div className="flex flex-col h-full justify-between">
                  <div className="flex flex-col gap-[24px]">
                    <p className="font-footer-link-14 font-Akkurat text-primary-2">
                      {newsLetter.description}
                    </p>

                    <Subscribe />
                    <div className="flex gap-[20px] items-center">
                      {socialIcons.map((icon, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="text-primary-2 hover:underline"
                        >
                          <Image
                            alt={icon.alt}
                            src={icon.src}
                            width={16}
                            height={16}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="font-footer-copyright-14 font-Akkurat text-primary-2">
                      BAGZEI ACCEPTS
                    </p>
                    <div className="flex gap-[17px]">
                      {paymentData?.map((icon, index) => (
                        <Image
                          key={index}
                          alt={icon.alt}
                          src={icon.src}
                          width={40}
                          height={24}
                        />
                      ))}
                    </div>
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
