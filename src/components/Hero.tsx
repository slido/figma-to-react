import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="text-8xl text-[#fafafa] w-full flex justify-center ">
        <h1 className="lg:w-[570px] sm:w-[570px] xs:w-[270px] text-center font-extrabold mt-16 xs:text-[3rem] sm:text-[5.2rem]">
          Smart Home Application
        </h1>
      </div>
      <div className="text-8xl text-white w-full flex justify-center ">
        <h2 className="text-[2rem] w-[570px] text-[#fafafa] text-sm text-center mt-10 ">
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon him call mile. An pasture he himself believe ferrars
          besides cottage.
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <img src="/assets/hero-phones.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
