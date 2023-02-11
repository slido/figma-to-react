import React, { FC, useState } from "react";

const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClickScroll = (e: string) => {
    const element = document.getElementById(e);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex justify-between" id="home">
      <section className="MOBILE-MENU flex sm:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[40px] h-[40px] cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div
          className={`${
            isNavOpen ? "showMenuNav" : "hideMenuNav"
          } duration-500 ease-out -transition-all`}
        >
          <div
            className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="NAVIGATION-MOBILE-OPEN flex flex-col justify-between min-h-[250px] mt-[50px] pt-[20px] pr-[20px]">
            <li
              className="border-b border-gray-400 my-8 uppercase pl-[20px] cursor-pointer display-block pb-[20px]  border-[#ccc]"
              onClick={() => handleClickScroll("home")}
            >
              Home
            </li>
            <li
              className="border-b border-gray-400 my-8 uppercase  pl-[20px]  cursor-pointer display-block pb-[20px]  border-[#ccc]"
              onClick={() => handleClickScroll("about")}
            >
              About
            </li>
            <li
              className="border-b border-gray-400 my-8 uppercase  pl-[20px]  cursor-pointer display-block pb-[20px]  border-[#ccc]"
              onClick={() => handleClickScroll("clients")}
            >
              Clients
            </li>
            <li
              className="border-b border-gray-400 my-8 uppercase  pl-[20px]  cursor-pointer display-block pb-[20px]  border-[#ccc]"
              onClick={() => handleClickScroll("testimonials")}
            >
              Testimonials
            </li>
          </ul>
        </div>
      </section>

      <ul className="DESKTOP-MENU hidden  sm:flex  mt-12">
        <li
          className="mr-9 text-white text-lg hover:underline cursor-pointer"
          onClick={() => handleClickScroll("home")}
        >
          Home
        </li>
        <li
          className="mr-9 text-white text-lg hover:underline  cursor-pointer"
          onClick={() => handleClickScroll("about")}
        >
          About
        </li>
        <li
          className="mr-9 text-white text-lg hover:underline cursor-pointer"
          onClick={() => handleClickScroll("testimonials")}
        >
          Testimonials
        </li>
        <li
          className="mr-9 text-white text-lg hover:underline cursor-pointer"
          onClick={() => handleClickScroll("clients")}
        >
          Clients
        </li>
      </ul>
      <div className="hidden sm:flex absolute lg:top-[39px] sm:top-[0px] xl:left-[500px]  lg:left-[423px] md:left-[324px] sm:left-[263px] font-sans font-semibold lg:text-[2rem] sm:text-[1.2rem] text-white">
        smartHome
      </div>
      <ul className="lg:h-12 sm:h-10  mt-10 hidden sm:flex">
        <li className="mr-9 text-white text-lg  hover:underline cursor-pointer flex h-10 items-center">
          Login
        </li>
        <li className="mr-9 text-black sm:text-[1.2] lg:text-lg py-2  px-5 bg-white  hover:underline cursor-pointer rounded">
          Sign Up
        </li>
      </ul>
    </div>
  );
};

export default Header;
