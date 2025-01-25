import React, { useEffect, useRef, useState } from "react";
import PhoneModel from "./Components/PhoneModel";
import Header from "./Components/Header";
import rightArrow from "./assets/svgs/rightArrow.svg";
import mainCamera from "./assets/images/50Mp.jpg";
import gsap from "gsap";
import telephotoCamera from "./assets/images/telephoto.jpg";
import ultrawideCamera from "./assets/images/ultrawide.webp";
import phoneSvg from "./assets/svgs/phone-svg.svg";
import rightArrow2 from "./assets/svgs/right-arrow.svg";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import matteBlack from "./assets/images/matteBlack.webp";
import matteBlack2 from "./assets/images/matteBlack2.webp";
import googlePixelVideo from "./assets/video/googlePixelVideo.mp4";
import googlePixelVideo2 from "./assets/video/googlePixelVideo2.mp4";
import googlePixelVideo3 from "./assets/video/googlePixelVideo3.mp4";
import googlePixelVideo4 from "./assets/video/googlePixelVideo4.mp4";
import googlePixelVideo5 from "./assets/video/googlePixelVideo5.mp4";
import googlePixelVideo6 from "./assets/video/googlePixelVideo6.mp4";
import Lenis from "@studio-freight/lenis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import photoLeft from "./assets/images/googlePixelPhotoLeft.webp";
import photoRight from "./assets/images/googlePixelPhotoRight.webp";
import VideoPlayer from "./Components/VideoPlayer";
import fivePhones from "./assets/images/5phones.webp";
import section5One from "./assets/svgs/section5One.svg";
import section5Two from "./assets/svgs/section5Two.svg";
import section5Three from "./assets/svgs/section5Three.svg";
import section5Four from "./assets/svgs/section5Four.svg";
import section5Five from "./assets/svgs/section5Five.svg";
import twoPhones from "./assets/svgs/2phones.svg";

gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 2, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 5), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  const [section2CameraFirst, setSection2CameraFirst] = useState(false);
  const [section2CameraSecond, setSection2CameraSecond] = useState(false);
  const [section2CameraThird, setSection2CameraThird] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Video playing state
  const [isEnded, setIsEnded] = useState(false); // Video ended state
  const [videoText, setVideoText] = useState("first");
  const [openSection, setOpenSection] = useState("section1");

  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const thirdImageRef = useRef(null);
  const videoRef = useRef(null); // Reference to the video element

  const handleMouseEnter = (selector, ref) => {
    gsap.to(ref.current, {
      backgroundSize: "150%", // Scale up the background image
      duration: 1, // Animation duration (in seconds)
      ease: "expo.inOut", // Smooth animation
    });
    if (selector === ".first-camera") {
      setSection2CameraFirst(true);
    } else if (selector === ".second-camera") {
      setSection2CameraSecond(true);
    } else if (selector === ".third-camera") {
      setSection2CameraThird(true);
    }

    gsap.to(selector, {
      opacity: 0,
      duration: 0.8,
      ease: "expo.inOut",
    });
  };

  const handleMouseLeave = (selector, ref) => {
    gsap.to(ref.current, {
      backgroundSize: "0%", // Scale back to original size
      duration: 0.2, // Animation duration (in seconds)
      ease: "expo.out", // Smooth animation
      onComplete: () => {
        if (selector === ".first-camera") {
          setSection2CameraFirst(false);
        } else if (selector === ".second-camera") {
          setSection2CameraSecond(false);
        } else if (selector === ".third-camera") {
          setSection2CameraThird(false);
        }
      },
    });

    gsap.to(selector, {
      opacity: 1,
      duration: 0.4,
      ease: "expo.out",
    });
  };

  const scrollToComponent = (id) => {
    gsap.to(window, {
      scrollTo: { y: `#${id}`, offsetY: 70 },
      duration: 1.5,
      ease: "expo.inOut",
    });
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <PhoneModel
          section2CameraFirst={section2CameraFirst}
          section2CameraSecond={section2CameraSecond}
          section2CameraThird={section2CameraThird}
        />
        {/* Header */}
        <Header scrollToComponent={scrollToComponent} />

        {/* Section 1 */}
        <div className="section1 bg-white h-[100vh] pt-32" id="section1">
          <div className="flex items-center justify-between px-2 sm:px-5 xl:px-10 gap-2 sm:gap-4 lg:gap-8 xl:gap-14 bg-blue-200 rounded-[25px] h-[80px] w-[92vw] sm:w-[80vw] xl:w-[60vw] mx-auto">
            <div className="text-[12px] sm:text-[14px] lg:text-[16px] xl:text-lg font-bold text-gray-600 flex items-center justify-between relative gap-2 lg:gap-4 xl:gap-8">
              <img
                src={twoPhones}
                alt=""
                className="w-7 sm:w-8 lg:w-10 h-7 sm:h-8 lg:h-10"
              />
              Trade in your phone and save.
              <div className="border-r border-gray-400 h-7 w-1 opacity-60" />
            </div>
            <div className="text-[10px] sm:text-[12px] lg:text-[14px] font-semibold text-gray-600">
              Apply the value of your old phone to your new phone.
            </div>
            <div className="text-blue-600 text-[12px] sm:text-[14px] lg:text-lg font-semibold flex items-center justify-center gap-1 lg:gap-2">
              Get estimate for trade-in
              <img src={rightArrow2} alt="" className="w-2 lg:w-3 h-2 lg:h-3" />
            </div>
          </div>

          <div className="flex flex-col pt-28 mt-10 pl-32 text-[#353535] bg-blue-200 h-[560px] lg:h-[600px] w-[80vw] lg:w-[90vw] max-w-[1350px] mx-auto rounded-[40px]">
            <div className="hidden lg:block">
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

            <div className="hidden lg:flex justify-between mt-40">
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

        {/* Section 2 */}
        <div className="section2 bg-white flex flex-col items-center justify-center">
          <div className="flex flex-col lg:flex-row justify-between w-[90vw] 2xl:w-[70vw] gap-5">
            <div className="flex flex-col text-[#353535] bg-blue-200 h-[450px] sm:h-[600px] w-[100%] lg:w-[950px] rounded-[40px]">
              <div className="flex items-center justify-center px-6 text-xl lg:text-3xl font-semibold tracking-tight mt-16">
                Award-winning cameras and amazing editing.
              </div>

              <div className="flex items-center justify-center px-6 text-lg lg:text-2xl tracking-tight mt-[240px] sm:mt-[400px]">
                Polished aluminum frame and matte back glass.
              </div>
            </div>

            <div className="w-[90vw] lg:w-[370px] lg:h-[600px] flex flex-wrap lg:flex-col gap-5 justify-between">
              <div
                ref={firstImageRef}
                style={{
                  backgroundImage: section2CameraFirst
                    ? `url(${mainCamera})`
                    : "none",
                }}
                onMouseEnter={() => {
                  handleMouseEnter(".first-camera", firstImageRef);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(".first-camera", firstImageRef);
                }}
                className="bg-blue-200 h-[135px] w-full rounded-[20px] bg-cover bg-no-repeat bg-center flex items-center justify-center text-lg font-semibold px-20 text-center leading-[20px] text-gray-600 cursor-pointer"
              >
                <div className="first-camera">
                  50 MP main camera for even more detail.
                </div>
              </div>

              <div
                ref={secondImageRef}
                style={{
                  backgroundImage: section2CameraSecond
                    ? `url(${ultrawideCamera})`
                    : "none",
                }}
                onMouseEnter={() => {
                  handleMouseEnter(".second-camera", secondImageRef);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(".second-camera", secondImageRef);
                }}
                className="bg-blue-200 h-[135px] w-full rounded-[20px] bg-cover bg-no-repeat bg-center flex items-center justify-center text-lg font-semibold px-20 text-center leading-[20px] text-gray-600 cursor-pointer"
              >
                <div className="second-camera">
                  48 MP ultrawide camera for improved Macro Focus.
                </div>
              </div>

              <div
                ref={thirdImageRef}
                style={{
                  backgroundImage: section2CameraThird
                    ? `url(${telephotoCamera})`
                    : "none",
                }}
                onMouseEnter={() => {
                  handleMouseEnter(".third-camera", thirdImageRef);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(".third-camera", thirdImageRef);
                }}
                className="bg-blue-200 h-[135px] w-full rounded-[20px] bg-cover bg-no-repeat bg-center flex items-center justify-center text-lg font-semibold px-20 text-center leading-[20px] text-gray-600 cursor-pointer"
              >
                <div className="third-camera">
                  48 MP telephoto camera is Pixel’s best zoom ever.
                </div>
              </div>

              <div
                className="bg-blue-200 h-[135px] w-full rounded-[20px] flex items-center justify-center text-lg font-semibold
            px-20 text-center leading-[20px] text-gray-600 cursor-pointer"
              >
                10.5 MP front camera for your sharpest selfies yet.
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between w-[90vw] sm:w-[70vw]">
            <div className="section3 group cursor-pointer flex flex-col text-white bg-blue-200 h-[200px] w-[100%] lg:w-[49%] rounded-[40px] mt-10 relative overflow-hidden">
              <div
                style={{ backgroundImage: `url(${matteBlack})` }}
                className="opacity-50 transform transition-opacity duration-300 ease-in-out  group-hover:opacity-100 absolute right-0 flex w-[100%] h-[100%] pt-[135px] justify-center px-5 text-lg sm:text-2xl font-semibold tracking-tight bg-cover rounded-[40px]"
              >
                Award-winning cameras and amazing editing.
              </div>

              <div
                style={{ backgroundImage: `url(${matteBlack2})` }}
                className="absolute transform duration-300 ease-in-out group-hover:-translate-x-[120%] flex w-[95%] h-[100%] pt-[135px] justify-center px-5 text-lg sm:text-2xl font-semibold tracking-tight bg-cover rounded-[40px]"
              >
                Polished aluminum frame and matte back glass.
              </div>
            </div>
            <div className="section3 flex flex-col text-[#353535] bg-blue-200 h-[200px] w-[100%] lg:w-[49%] rounded-[40px] mt-10"></div>
          </div>
        </div>

        {/* Section 3 */}
        <div
          className="bg-blue-100 mt-10 h-[110vh] flex flex-col items-center"
          id="section2"
        >
          <div className="flex text-3xl px-8 font-semibold tracking-tight mt-14 text-[#353535]">
            Incredible videos on every take.
          </div>

          <div className="flex flex-col gap-8 lg:hidden mt-12 lg:mt-0 w-[80vw]">
            <div>
              <div
                onClick={() => {
                  setVideoText("first");
                  setIsEnded(false);
                  setIsPlaying(true);
                }}
                className="border-b-gray-300 text-[#5f5f5f] text-lg font-bold cursor-pointer flex justify-between w-full"
              >
                Stunning comes standard.{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`w-5 h-5 text-[#353535] transform transition-transform duration-300 ${
                    videoText === "first" ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div className="mt-4">
                {videoText === "first" && (
                  <>
                    <VideoPlayer
                      key={videoText}
                      videoSource={googlePixelVideo}
                    />

                    <div className="mt-4 text-md font-semibold leading-[24px] text-[#454545] text-start">
                      The Pixel Camera records sharp, smooth video with rich
                      color and clear audio, even in crowded, dimly lit places.
                      Google AI applies noise reduction to boost video quality
                      in any light.
                    </div>
                  </>
                )}
              </div>
            </div>

            <div>
              <div
                onClick={() => {
                  setVideoText("second");
                  setIsEnded(false);
                  setIsPlaying(true);
                }}
                className="border-b-gray-300 text-[#5f5f5f] text-lg font-bold cursor-pointer flex justify-between w-full"
              >
                Expert video processing.{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`w-5 h-5 text-[#353535] transform transition-transform duration-300 ${
                    videoText === "second" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div className="mt-4">
                {videoText === "second" && (
                  <>
                    <VideoPlayer
                      key={videoText}
                      videoSource={googlePixelVideo2}
                    />
                    <div className="mt-4 text-md font-semibold leading-[24px] text-[#454545] text-start">
                      Don’t worry about shaky or imperfect videos. Video Boost
                      automatically adjusts color, lighting, stabilization, and
                      graininess. And it enables Night Sight Video on Pixel 8
                      Pro.^
                    </div>
                  </>
                )}
              </div>
            </div>

            <div>
              <div
                onClick={() => {
                  setVideoText("third");
                  setIsEnded(false);
                  setIsPlaying(true);
                }}
                className="border-b-gray-300 text-[#5f5f5f] text-lg font-bold cursor-pointer flex justify-between w-full"
              >
                Beautifully authentic videos with Real Tone.{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`w-5 h-5 text-[#353535] transform transition-transform duration-300 ${
                    videoText === "third" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div className="mt-4">
                {videoText === "third" && (
                  <>
                    <VideoPlayer
                      key={videoText}
                      videoSource={googlePixelVideo3}
                    />
                    <div className="mt-4 text-md font-semibold leading-[24px] text-[#454545] text-start">
                      Real Tone, now in video, represents the nuances of more
                      skin tones accurately. So everyone feels seen.
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex w-[80vw] sm:w-[500px] lg:w-[60vw] h-[450px] sm:h-[500px] lg:h-[550px] rounded-[40px] mt-12 relative">
            <VideoPlayer
              key={videoText}
              videoSource={
                videoText === "first"
                  ? googlePixelVideo
                  : videoText === "second"
                  ? googlePixelVideo2
                  : googlePixelVideo3
              }
            />
          </div>

          <div className="w-[80vw] sm:w-[500px] lg:w-[80vw] hidden lg:flex flex-col items-center justify-center lg:mt-10">
            <div className="flex">
              <div
                onClick={() => {
                  setVideoText("first");
                  setIsEnded(false);
                  setIsPlaying(true);
                }}
                className={`${
                  videoText === "first"
                    ? "border-b-gray-800 text-[#292929]"
                    : "border-b-gray-300 text-[#5f5f5f]"
                } text-xl font-bold py-7 border-b-2  px-5 cursor-pointer hover:bg-[#cedef3aa] transition-all duration-300 ease-in-out rounded-t-lg`}
              >
                Stunning comes standard.
              </div>
              <div
                onClick={() => {
                  setVideoText("second");
                  setIsEnded(false);
                  setIsPlaying(true);
                }}
                className={`${
                  videoText === "second"
                    ? "border-b-gray-800 text-[#292929]"
                    : "border-b-gray-300 text-[#5f5f5f]"
                }  text-xl font-bold py-7 border-b-2 px-5 cursor-pointer hover:bg-[#cedef3aa] transition-all duration-300 ease-in-out rounded-t-lg`}
              >
                Expert video processing.
              </div>
              <div
                onClick={() => {
                  setVideoText("third");
                  setIsEnded(false);
                  setIsPlaying(true);
                }}
                className={`${
                  videoText === "third"
                    ? "border-b-gray-800 text-[#292929]"
                    : "border-b-gray-300 text-[#5f5f5f]"
                }  text-xl font-bold py-7 border-b-2 px-5 max-w-[300px] cursor-pointer hover:bg-[#cedef3aa] transition-all duration-300 ease-in-out rounded-t-lg`}
              >
                Beautifully authentic videos with Real Tone.
              </div>
            </div>

            <div className="mb-10  mt-4 lg:mt-10 text-md font-semibold leading-[24px] text-[#454545] max-w-[100%] lg:max-w-[54%] text-start lg:text-center">
              {videoText === "first" ? (
                <div>
                  The Pixel Camera records sharp, smooth video with rich color
                  and clear audio, even in crowded, dimly lit places. Google AI
                  applies noise reduction to boost video quality in any light.
                </div>
              ) : videoText === "second" ? (
                <div>
                  Don’t worry about shaky or imperfect videos. Video Boost
                  automatically adjusts color, lighting, stabilization, and
                  graininess. And it enables Night Sight Video on Pixel 8 Pro.^
                </div>
              ) : (
                <div>
                  Real Tone, now in video, represents the nuances of more skin
                  tones accurately. So everyone feels seen.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-blue-100 pt-10 flex flex-col items-center pb-10 lg:pb-32">
        <div className="w-[80vw] lg:w-[60vw] relative flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center">
          <div
            style={{ backgroundImage: `url(${photoLeft})` }}
            className="bg-blue-400 w-[80%] sm:w-[500px] lg:w-[50%] min-w-[300px] min-h-[300px] h-auto sm:h-[500px] lg:h-[30vw] rounded-[40px] bg-contain bg-center mt-10 lg:mt-0"
          ></div>

          <div className="sm:w-[100%] lg:w-[45%] h-auto lg:pl-24 flex flex-col items-center justify-center -mt-28 sm:mt-14 lg:mt-0">
            <div className="text-4xl font-semibold tracking-tight text-[#353535]">
              Even more creative control. Even better photos.
            </div>
            <div className="text-md font-semibold tracing-tight text-[#4d4d4d] mt-4">
              Pro controls unlock advanced camera settings like shutter speed,
              ISO, and more.7 And they enable high-resolution images for richer
              detail.
            </div>
          </div>
        </div>

        <div className="w-[80vw] lg:w-[60vw] relative flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-28">
          <div className="sm:w-[100%] lg:w-[45%] h-auto lg:pr-24 flex flex-col items-center justify-center">
            <div className="text-4xl font-semibold tracking-tight text-[#353535]">
              Better low-light photos. It’s like night and day.
            </div>
            <div className="text-md font-semibold tracing-tight text-[#4d4d4d] mt-4">
              The Pixel 8 Pro camera delivers stunning photo quality from dusk
              until dawn with Night Sight and astrophotography.
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${photoRight})` }}
            className="bg-blue-400 w-[80%] sm:w-[500px] lg:w-[50%] min-w-[300px] min-h-[300px] h-auto sm:h-[500px] lg:h-[30vw] rounded-[40px] bg-contain bg-center mt-10 lg:mt-0"
          ></div>
        </div>

        <div className="mt-40">
          <div className="text-3xl sm:text-4xl px-2 lg:text-5xl font-semibold text-[#353535] max-w-[650px] text-center">
            Advanced editing helps you control every detail.
          </div>

          <div className="text-[14px] px-4 sm:text-md font-semibold tracking-tight text-[#353535] max-w-[650px] text-center mt-6">
            With Google AI, you can edit photos in ways you never thought
            possible, so they match your vision.
          </div>
        </div>

        <div className="mt-24">
          <div className="w-[80vw] lg:w-[60vw] relative flex flex-col lg:flex-row justify-between items-center">
            <div className="bg-blue-400 w-[100%] sm:w-[80%] lg:w-[50%] h-auto lg:h-full rounded-[40px] relative">
              <VideoPlayer
                videoSource={
                  openSection === "section2"
                    ? googlePixelVideo5
                    : googlePixelVideo4
                }
              />
            </div>

            <div className="w-[100%] sm:w-[80%] lg:w-[45%] h-[580px] lg:pl-24 -mt-32 lg:mt-0 flex flex-col items-center lg:items-start justify-center">
              {/* Section 1 */}
              <div
                onClick={() => toggleSection("section1")}
                className="text-[22px] leading-[22px] w-full font-semibold tracking-tight text-[#353535] flex justify-between items-center cursor-pointer"
              >
                <div>Reimagine your photos. Right on your phone.</div>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`w-5 h-5 text-[#353535] transform transition-transform duration-300 ${
                    openSection === "section1" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openSection === "section1" ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="text-md font-semibold tracking-tight text-[#4d4d4d] mt-4">
                  Use Magic Editor in Google Photos to add custom edits and
                  studio-quality enhancements to any photo. Improve lighting and
                  background, move a subject, and more, with just a few taps.
                </div>
              </div>

              {/* Section 2 */}
              <div
                onClick={() => toggleSection("section2")}
                className="text-[22px] leading-[22px] w-full font-semibold tracking-tight text-[#353535] mt-10 flex justify-between items-center cursor-pointer"
              >
                <div>Group pics. Group approved.</div>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`w-5 h-5 text-[#353535] transform transition-transform duration-300 ${
                    openSection === "section2" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openSection === "section2" ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="text-md font-semibold tracking-tight text-[#4d4d4d] mt-4">
                  Did someone blink or look away? Pixel’s Best Take combines
                  similar photos into one fantastic picture where everyone looks
                  their best.
                </div>
              </div>
            </div>
          </div>

          <div className="w-[80vw] lg:w-[60vw] relative flex flex-col-reverse lg:flex-row justify-between items-center lg:mt-28">
            <div className="w-[100%] sm:w-[80%] lg:w-[45%] h-[580px] lg:pr-24 flex flex-col items-start justify-center -mt-32 lg:mt-0">
              <div className="text-[34px] leading-[35px] w-full font-semibold tracking-tight text-[#353535] flex justify-between items-center cursor-pointer">
                <div>Video sounds even better.</div>
              </div>
              <div>
                <div className="text-md font-semibold tracking-tight text-[#4d4d4d] mt-5">
                  Audio Magic Eraser uses Google AI to reduce distracting sounds
                  like cars and wind, so you can hear the ones you want.‡‡
                </div>
              </div>

              <div className="mt-5 text-blue-600 font-semibold hover:underline underline-offset-4 cursor-pointer flex items-center gap-2">
                Listen to the demo{" "}
                <img src={rightArrow2} alt="" className="w-2.5 h-2.5" />
              </div>
            </div>

            <div className="bg-blue-400 w-[100%] sm:w-[80%] lg:w-[45%] h-full rounded-[40px] relative -mt-20 lg:mt-0">
              <VideoPlayer videoSource={googlePixelVideo6} />
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div
        className="bg-white text-[#353535] flex flex-col items-center"
        id="section3"
      >
        <div className="mt-20 font-semibold">Safety and security</div>
        <div className="text-[50px] lg:text-[90px] leading-[60px] lg:leading-[90px] font-semibold mt-5 max-w-[900px] text-center mb-24">
          Pixel helps keep you and your info safe.
        </div>

        <img src={fivePhones} alt="5 Phones" className="w-[90vw] lg:w-[75vw]" />

        <div className="w-[90vw] xl:w-[80vw] 2xl:w-[60vw] mt-40 mb-20">
          <div className="flex flex-col lg:flex-row w-full justify-between items-center lg:h-[369px] gap-6 lg:gap-0">
            <div className="w-[90%] sm:w-[49%] h-[100%] bg-[rgb(248,248,248)] rounded-[25px] text-[#353535] flex flex-col items-center justify-center gap-4 px-16 text-center font-semibold">
              <img src={section5One} alt="||" />
              <div className="text-2xl xl:px-24">
                Crisis alerts keep you a step ahead.
              </div>
              <div>
                Pixel sends proactive alerts so you’re informed of a nearby
                hazard, like flooding, fire, or a tornado.
              </div>
            </div>

            <div className="w-[90%] sm:w-[49%] h-[100%] bg-[rgb(248,248,248)] rounded-[25px] text-[#353535] flex flex-col items-center justify-center gap-4 px-16 text-center font-semibold">
              <img src={section5Two} alt="||" />
              <div className="text-2xl xl:px-24">
                Security you can depend on.
              </div>
              <div>
                With Google Tensor G3 and the Titan M2 chip, multiple layers of
                security help keep you and your personal info safe.
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full justify-between items-center lg:h-[369px] mt-5 gap-6 lg:gap-0">
            <div className="w-[90%] sm:w-[49%] lg:w-[32%] h-[100%] bg-[rgb(248,248,248)] rounded-[25px] text-[#353535] flex flex-col items-center justify-center gap-4 px-10 text-center font-semibold">
              <img src={section5Three} alt="||" />
              <div className="text-2xl px-3">
                Extra protection when you’re online.
              </div>
              <div>
                With VPN by Google built in, Pixel helps protect your online
                activity no matter what app or web browser you use.
              </div>
            </div>

            <div className="w-[90%] sm:w-[49%] lg:w-[32%] h-[100%] bg-[rgb(248,248,248)] rounded-[25px] text-[#353535] flex flex-col items-center justify-center gap-4 px-10 text-center font-semibold">
              <img src={section5One} alt="||" />
              <div className="text-2xl px-3">Security updates for 7 years.</div>
              <div>
                To protect you and your sensitive data, Pixel comes with
                security updates, so your Pixel gets even more secure over time.
              </div>
            </div>

            <div className="w-[90%] sm:w-[49%] lg:w-[32%] h-[100%] bg-[rgb(248,248,248)] rounded-[25px] text-[#353535] flex flex-col items-center justify-center gap-4 px-10 text-center font-semibold">
              <img src={section5One} alt="||" />
              <div className="text-2xl px-3">
                Detects a car crash. And calls for help.
              </div>
              <div>
                Pixel can detect if you’ve been in a severe car crash, call
                emergency services, and share your location if you can’t.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
