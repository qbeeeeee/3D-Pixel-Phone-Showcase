import React, { useEffect } from "react";
import logo from "./../assets/images/googleLogo.webp";

const Header = ({ scrollToComponent }) => {
  useEffect(() => {
    const header = document.getElementById("main-header");

    if (header) {
      const onScroll = () => {
        if (window.scrollY > header.offsetHeight) {
          header.classList.add("fixed", "top-0", "shadow-lg", "opacity-100");
          header.classList.remove("absolute");
        } else {
          header.classList.remove("fixed", "top-0", "shadow-lg", "opacity-100");
          header.classList.add("absolute");
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  return (
    <div
      id="main-header"
      className="absolute bg-[#bee0ff] flex pt-1 h-[70px] left-0 right-0 z-50 opacity-100 transition-all duration-300 mx-auto"
    >
      {/* Foreground content */}
      <div className="container mx-auto px-2 sm:px-10 lg:px-20 xl:px-24 flex justify-between items-center z-10">
        <div className="flex items-center gap-4 sm:gap-7 text-[14px] sm:text-[16px] lg:text-lg font-semibold">
          <img
            src={logo}
            className="w-[40px] sm:w-[60px]"
            alt="Google"
            loading="lazy"
          />
          <div>Google Pixel 8 Pro</div>
          <div
            className="cursor-pointer opacity-60"
            onClick={() => scrollToComponent("section1")}
          >
            Section1
          </div>
          <div
            className="cursor-pointer opacity-60"
            onClick={() => scrollToComponent("section2")}
          >
            Section2
          </div>
          <div
            className="cursor-pointer opacity-60"
            onClick={() => scrollToComponent("section3")}
          >
            Section3
          </div>
          {/* <div className="cursor-pointer opacity-60">Section4</div> */}
        </div>

        <div className="hidden lg:flex text-end items-center justify-center gap-4">
          <div>
            <div className="text-[14px]">From $999</div>
            <div className="text-[10px] xl:text-[14px]">
              or $27.75/month with 36-month financing*
            </div>
          </div>

          <button className="w-20 h-10 rounded-lg bg-[#336cf2] text-white text-lg font-semibold">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
