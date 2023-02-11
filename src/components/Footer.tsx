import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row w-full flex-wrap mb-[40px] mt-[100px]  pl-[40px]">
      <div className="flex-[1 0 25%] w-[25%]">
        <div className="ml-[10px]">
          <h6 className=" font-sans font-semibold lg:text-[2rem] sm:text-[1.2rem] text-[#313131]">
            smartHome
          </h6>
          <p className="text-[#575757] leading-[130%] font-light w-[90%] mt-[15px]">
            Automate your entire healthcare hiring, onboarding and compliance
            with a true technology platform.
          </p>
          <div className="flex flex-row mt-[20px] justify-between w-[90%]">
            <input
              type="text"
              placeholder="E-mail Address"
              className="border p-[10px] font-light w-[55%] rounded bg-[#FAFAFA] border-[#E7EBEE] text-[1rem]"
            />
            <button className=" text-[1rem] border py-[10px] px-[20px]  rounded text-[#011037] border-[#011037]">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="flex-[1 0 25%] w-[25%]">
        <ul className="ml-[40px]">
          <li>
            <h6 className=" font-sans pt-[5px] pb-[30px] lg:text-[1.8rem] sm:text-[1.2rem] text-[#313131]">
              CATEGORIES
            </h6>
          </li>
          <li>
            <a
              href="/"
              className="text-[#575757] leading-[250%] font-light hover:underline"
            >
              Product Management
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              Design / Creatives
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              Education & Training
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              UI/UX Designers
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              Development
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              Customer Support
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-[1 0 25%] w-[25%]">
        <ul className="ml-[40px]">
          <li>
            <h6 className=" font-sans pt-[5px] pb-[30px] lg:text-[1.8rem] sm:text-[1.2rem] text-[#313131]">
              ABOUT
            </h6>
          </li>
          <li>
            <a
              href="/"
              className="text-[#575757] leading-[250%] font-light hover:underline"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              Partnership
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              Finance Experts
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              Project Management
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              Product Manager
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              The Team
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-[1 0 25%] w-[25%]">
        <ul className="ml-[40px]">
          <li>
            <h6 className=" font-sans pt-[5px] pb-[30px] lg:text-[1.8rem] sm:text-[1.2rem] text-[#313131]">
              FOLLOW US
            </h6>
          </li>
          <li>
            <a
              href="/"
              className="text-[#575757] leading-[250%] font-light hover:underline"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="text-[#575757] leading-[250%] font-light hover:underline"
              href="/"
            >
              Tik Tok
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
