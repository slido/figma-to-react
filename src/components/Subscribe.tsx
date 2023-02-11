import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-[#1E5AFA] w-full  flex rounded-[10px] p-[20px] mt-[120px] mb-[30px]">
      <div className="left pl-[50px] w-[70%]">
        <h5 className="p-[20px] text-[3rem] text-[#fff] font-semibold">
          Subscribe to get updated
        </h5>
        <p className="p-[20px] w-[80%] text-[1rem] text-[#fff] font-normal leading-[150%] pt-[0] pb-[40px]">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque .
        </p>
      </div>
      <div className="right w-[30%] flex">
        <a
          href="/"
          className="w-[200px] flex justify-center p-[20px] border-[1px] border-[white] rounded-[10px] text-[#fff] mt-[80px] h-[65px]"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Subscribe;
