import React from "react";

const ContentSection = () => {
  return (
    <div>
      <div className="w-full justify-center flex">
        <ul className="flex lg:w-[50%] xs:w-[100%] sm:w-[50%] justify-center h-30 xs:mt-[-20px] sm:mt-[0px] md:mt-[-50px] lg:mt-[-40px]">
          <li className="mr-20 sm:mr-[40px] m-5 xs:w-[30%] sm:w-[30%] md:w-[100%]">
            <a href="/">
              <img src="./assets/gdl.png" alt="" className="shadow-xl" />
            </a>
          </li>
          <li className="m-5 xs:w-[30%] sm:w-[30%] md:w-[100%]">
            <a href="/">
              <img src="./assets/adl.png" alt="" className="shadow-xl" />
            </a>
          </li>
        </ul>
      </div>
      <div
        id="about"
        className="w-full justify-center flex lg:mt-[100px] md:mt-[50px] sm:mt-[20px] xs:mt-[70px] relative z-[8]"
      >
        <h2 className="text-8xl font-bold text-[#313131]">About us</h2>
      </div>
      {/* phone item start */}
      <div className="w-full justify-center flex sm:mt-[20px] lg:mt-[50px] relative z-[5]">
        <div className="left w-[50%] relative">
          <img
            src="./assets/115.png"
            alt=""
            className="w-[2000px] max-w-[1250px] absolute z-[2] top-[-170px] xl:left-[-394px] lg:left-[-431px] md:left-[-498px] sm:left-[-518px] xs:left-[-518px]"
          />
          <div className="absolute w-full h-[390px] top-[382px]  xl:left-[-66px] lg:left-[-66px] md:left-[-66px] sm:left-[-16px] z-[1] rounded-[10px] bg-[#1E5AFA]">
            &nbsp;
          </div>
        </div>
        <div className="right  w-[50%] left-[30px] relative z-[3] pt-[40px]">
          <h3 className="text-[3.5rem] font-medium leading-[110%] pt-[109px] text-[#000F37]">
            Smart Home’s Smart Services
          </h3>
          <p className="text-[1.5rem] leading-[180%] mt-[50px] text-[#575757] w-[97%] font-extralight">
            Ye am depending propriety sweetness distrusts belonging collected.
            Smiling mention he in thought equally musical. Wisdom new and valley
            answer. Contented it so is discourse recommend. Man its upon him
            call mile. An pasture he himself believe ferrars besides cottage.
          </p>
          <button className="p-[20px]  bg-[#000F37] text-[white] mt-[50px] rounded-[5px] text-[1.2rem] px-[50px]">
            Learn More
          </button>
        </div>
      </div>
      {/* phone item end */}
      {/* phone item start */}
      <div className="w-full justify-center flex sm:mt-[20px] lg:mt-[50px]">
        <div className="left w-[50%] relative z-[5] sm:pl-[10px] md:pl-[0px]">
          <h3 className="text-[3.5rem] font-medium leading-[110%] pt-[150px] text-[#000F37]">
            Smart Home’s Smart Services
          </h3>
          <p className="text-[1.5rem] leading-[180%] mt-[50px] text-[#575757] w-[97%] font-extralight">
            Ye am depending propriety sweetness distrusts belonging collected.
            Smiling mention he in thought equally musical. Wisdom new and valley
            answer. Contented it so is discourse recommend. Man its upon him
            call mile. An pasture he himself believe ferrars besides cottage.
          </p>
          <button className="p-[20px] bg-[#000F37] text-[white] mt-[50px] rounded-[5px] text-[1.2rem] px-[50px]">
            Learn More
          </button>
        </div>
        <div className="right  w-[50%] left-[30px] relative z-[3] pt-[40px]">
          <img
            src="./assets/315.png"
            alt=""
            className="w-[2000px] max-w-[1120px] absolute z-[2] top-[-170px] xl:right-[-205px] lg:right-[-240px] md:right-[-302px] sm:right-[-372px]  xs:right-[-372px]"
          />
          <div className="absolute w-full h-[390px] top-[382px] right-[0px] z-[1] rounded-[10px] bg-[#1E5AFA]">
            &nbsp;
          </div>
        </div>
      </div>
      {/* phone item end */}
      {/* phone item start */}
      <div className="w-full justify-center flex sm:mt-[20px] lg:mt-[70px]">
        <div className="left w-[50%] relative">
          <img
            src="./assets/2215.png"
            alt=""
            className="w-[2000px] max-w-[1120px] absolute z-[2] top-[-170px] xl:left-[-386px] lg:left-[-422px] md:left-[-485px] sm:left-[-501px] xs:left-[-501px]"
          />
          <div className="absolute w-full h-[390px] top-[382px]   xl:left-[-66px] lg:left-[-66px] md:left-[-66px] sm:left-[-16px] z-[1] rounded-[10px] bg-[#1E5AFA]">
            &nbsp;
          </div>
        </div>
        <div className="right  w-[50%] left-[30px] relative z-[3] pt-[40px]">
          <h3 className="text-[3.5rem] font-medium leading-[110%] pt-[109px] text-[#000F37]">
            Smart Home’s Smart Services
          </h3>
          <p className="text-[1.5rem] leading-[180%] mt-[50px] text-[#575757] w-[97%] font-extralight">
            Ye am depending propriety sweetness distrusts belonging collected.
            Smiling mention he in thought equally musical. Wisdom new and valley
            answer. Contented it so is discourse recommend. Man its upon him
            call mile. An pasture he himself believe ferrars besides cottage.
          </p>
          <button className="p-[20px] bg-[#000F37] text-[white] mt-[50px] rounded-[5px] text-[1.2rem] px-[50px]">
            Learn More
          </button>
        </div>
      </div>
      {/* phone item end */}
    </div>
  );
};

export default ContentSection;
