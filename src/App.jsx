import React from "react";
import PhoneModel from "./Components/PhoneModel";

const App = () => {
  return (
    <div className="relative">
      <PhoneModel />
      <div className="section1 bg-white h-[100vh]">
        <div className="container mx-auto px-28 mt-40 flex justify-between items-center">
          <div className="flex items-end gap-6 text-[16px] font-semibold">
            <div className="text-2xl">Pixel 8 Pro</div>
            <div>Section1</div>
            <div>Section2</div>
            <div>Section3</div>
            <div>Section4</div>
          </div>

          <div className="text-end flex gap-4">
            <div>
              <div className="mt-6 text-[14px]">From $999</div>
              <div className="text-[14px]">
                or $27.75/month with 36-month financing*
              </div>
            </div>

            <button className="w-32 h-14 rounded-sm bg-[#336cf2] text-white text-2xl font-semibold mt-5">
              Buy
            </button>
          </div>
        </div>

        <div className="flex flex-col pt-28 pl-32 text-[#353535] bg-blue-200 h-[600px] w-[70%] mx-auto rounded-[40px] mt-10">
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
        </div>
      </div>

      <div className="section2 bg-white h-[100vh] flex justify-center items-center">
        <h1>React App</h1>
      </div>

      <div className="section3 bg-black h-[100vh] flex justify-center items-center text-white">
        <h1>React App</h1>
      </div>
    </div>
  );
};

export default App;
