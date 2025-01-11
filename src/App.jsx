import React from "react";
import PhoneModel from "./Components/PhoneModel";
import Header from "./Components/Header";
import rightArrow from "./assets/svgs/rightArrow.svg";

const App = () => {
  return (
    <div className="relative">
      <PhoneModel />
      {/* Header */}
      <Header />

      {/* Section 1 */}
      <div className="section1 bg-white h-[100vh] pt-32">
        <div className="flex items-center justify-center gap-14 bg-blue-200 rounded-[25px] h-[80px] w-[60vw] mx-auto">
          <div className="text-lg font-bold text-gray-600 flex gap-8 -ml-10">
            Trade in your phone and save.
            <div className="border-r border-gray-400 h-7 w-1 opacity-60" />
          </div>
          <div className="text-[14px] font-semibold text-gray-600 -ml-7">
            Apply the value of your old phone to your new phone.
          </div>
          <div className="text-blue-600 font-semibold ml-10">
            Get estimate for trade-in
          </div>
        </div>

        <div className="flex flex-col pt-28 mt-10 pl-32 text-[#353535] bg-blue-200 h-[600px] w-[70vw] mx-auto rounded-[40px]">
          <div className="text-5xl font-semibold tracking-tight">
            <div>The best of Google.</div>
            <div>Even more pro.</div>
          </div>

          <div className="mt-4 text-2xl font-bold">From $999</div>
          <div className="mt-2 text-base font-semibold">
            or $27.75/month with 36-month financing*
          </div>

          <button className="w-16 h-10 rounded-md bg-[#336cf2] text-white text-[16px] font-semibold mt-5">
            Buy
          </button>

          <div className="flex justify-between mt-40">
            <div>
              <div className="flex gap-3">
                <div className="rounded-full cursor-pointer w-6 h-6 bg-black border-2 border-white"></div>
                <div className="rounded-full cursor-pointer w-6 h-6 bg-blue-200 border-2 border-white"></div>
                <div className="rounded-full cursor-pointer w-6 h-6 bg-green-100 border-2 border-white"></div>
                <div className="rounded-full cursor-pointer w-6 h-6 bg-pink-100 border-2 border-white"></div>
              </div>
              <div className="mt-3">Color: Black</div>
            </div>

            <div className="mr-6 mt-4 bg-white font-bold rounded-full w-32 h-10 flex items-center justify-evenly">
              <img
                src={rightArrow}
                alt="Right Arrow"
                className="w-5 rotate-180 opacity-65"
              />
              1/4
              <img
                src={rightArrow}
                alt="Right Arrow"
                className="w-5 opacity-65"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section2 bg-white h-[100vh] flex justify-center">
        <div className="flex justify-between w-[70vw]">
          <div className="flex flex-col text-[#353535] bg-blue-200 h-[600px] w-[950px] rounded-[40px]">
            <div className="flex items-center justify-center text-3xl font-semibold tracking-tight mt-16">
              Award-winning cameras and amazing editing.
            </div>

            <div className="flex items-center justify-center text-2xl tracking-tight mt-[400px]">
              Polished aluminum frame and matte back glass.
            </div>
          </div>

          <div className="w-[370px] h-[600px] flex flex-col justify-between">
            <div
              className="bg-blue-200 h-[135px] w-full rounded-[20px] flex items-center justify-center text-lg font-semibold
            px-20 text-center leading-[20px] text-gray-600"
            >
              50 MP main camera for even more detail.
            </div>

            <div
              className="bg-blue-200 h-[135px] w-full rounded-[20px] flex items-center justify-center text-lg font-semibold
            px-20 text-center leading-[20px] text-gray-600"
            >
              48 MP ultrawide camera for improved Macro Focus.
            </div>

            <div
              className="bg-blue-200 h-[135px] w-full rounded-[20px] flex items-center justify-center text-lg font-semibold
            px-20 text-center leading-[20px] text-gray-600"
            >
              48 MP telephoto camera is Pixel’s best zoom ever.
            </div>

            <div
              className="bg-blue-200 h-[135px] w-full rounded-[20px] flex items-center justify-center text-lg font-semibold
            px-20 text-center leading-[20px] text-gray-600"
            >
              10.5 MP front camera for your sharpest selfies yet.
            </div>
          </div>
        </div>
      </div>

      <div className="section3 bg-black h-[100vh] flex justify-center items-center text-white">
        <h1>React App</h1>
      </div>
    </div>
  );
};

export default App;
