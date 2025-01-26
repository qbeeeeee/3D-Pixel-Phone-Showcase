import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import iphone from "./../assets/googlePixel2.glb";
import fieldhdr from "./../assets/hdr/field.hdr";
import lobbyhdr from "./../assets/hdr/lobby.hdr";
import test from "./../assets/svgs/googleCircle.png";

gsap.registerPlugin(ScrollTrigger);

const IPhoneModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF(iphone); // Load the GLTF model

  return (
    <group {...props} ref={ref} dispose={null}>
      {/* Attach the scene to the group without modifying its transform */}
      <primitive object={scene} />

      {/* Ensure the Html component follows the group's transform */}
      <Html position={[0, 0, 0]} scale={0.2}>
        {props.animationSection2Finished && (
          <div>
            <div
              className={`mt-[-110px] ml-[200px] w-10 h-10 m-4 relative ${
                props.section2CameraFirst ? "opacity-100" : "opacity-0"
              } transform duration-300 ease-in-out`}
            >
              <div className="flex flex-col justify-center items-center absolute bottom-0 -right-52">
                <img
                  src={test}
                  alt=""
                  className="w-20 absolute -bottom-3 right-[188px]"
                />
                <div className="text-4xl text-blue-400 font-semibold">50MP</div>
                <div className="font-semibold text-lg text-gray-500">
                  (Main)
                </div>
              </div>

              <div className="h-[1px] bg-white w-28 absolute top-4 left-9" />
            </div>

            <div
              className={`mt-[24px] ml-[200px] w-10 h-10 m-4 relative ${
                props.section2CameraSecond ? "opacity-100" : "opacity-0"
              } transform duration-300 ease-in-out`}
            >
              <div className="flex flex-col justify-center items-center absolute bottom-0 -right-52">
                <img
                  src={test}
                  alt=""
                  className="w-20 absolute -bottom-3 right-[188px]"
                />
                <div className="text-4xl text-blue-400 font-semibold">48MP</div>
                <div className="font-semibold text-lg text-gray-500">
                  (Ultrawide)
                </div>
              </div>

              <div className="h-[1px] bg-white w-24 absolute top-4 left-9" />
            </div>

            <div
              className={`mt-[20px] ml-[200px] w-10 h-10 m-4 relative ${
                props.section2CameraThird ? "opacity-100" : "opacity-0"
              } transform duration-300 ease-in-out`}
            >
              <div className="flex flex-col justify-center items-center absolute bottom-0 -right-52">
                <img
                  src={test}
                  alt=""
                  className="w-20 absolute -bottom-3 right-[188px]"
                />
                <div className="text-4xl text-blue-400 font-semibold">
                  48MP 5x
                </div>
                <div className="font-semibold text-lg text-gray-500">
                  (Telephoto)
                </div>
              </div>

              <div className="h-[1px] bg-white w-16 absolute top-4 left-9" />
            </div>
          </div>
        )}
      </Html>
    </group>
  );
});

const IPhoneScene = ({
  section2CameraFirst,
  section2CameraSecond,
  section2CameraThird,
}) => {
  const [group, setGroup] = useState(null);
  const [animationSection2Finished, setAnimationSection2Finished] =
    useState(false);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsPhone(window.innerWidth < 640);
    };

    // Initial check
    checkScreenWidth();

    // Add event listener for resizing
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (group) {
      if (isPhone) {
        group.position.set(0, 2.65, 0);
        group.rotation.set(0, Math.PI * 1.5, 0);
        group.scale.set(0.2, 0.2, 0.2);
      } else {
        group.position.set(0, 2.38, 0);
        group.rotation.set(0, Math.PI * 1.5, 0);
        group.scale.set(0.25, 0.25, 0.25);
      }
    }
  }, [group, isPhone]);

  useEffect(() => {
    if (group) {
      const initialPosition = { x: 0, y: isPhone ? 2.65 : 2.38, z: 0 };
      const initialRotation = { x: 0, y: Math.PI * 1.5, z: 0 };
      const initialScale = isPhone ? 0.2 : 0.25;
      const triggers = [];

      const ctx = gsap.context(() => {
        // ScrollTrigger for .section2
        triggers.push(
          ScrollTrigger.create({
            trigger: ".section2",
            start: "top bottom",
            end: isPhone ? "center center+=600" : "center center+=250",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;

              // Calculate new properties based on progress
              const newY = isPhone
                ? initialPosition.y - 1.3 * progress
                : initialPosition.y - 1.9 * progress;
              const newX = isPhone
                ? initialPosition.x - 0 * progress
                : initialPosition.x - 1.23 * progress;
              const newRotationX = initialRotation.x + 4.7 * progress;
              const newRotationY = initialRotation.y - 1.575 * progress;
              const newRotationZ = initialRotation.z + 1.55 * progress;

              const newScale = isPhone
                ? initialScale - 0.05 * progress
                : initialScale + 0.12 * progress;

              // Apply changes
              group.position.set(newX, newY, initialPosition.z);
              group.rotation.set(newRotationX, newRotationY, newRotationZ);
              group.scale.set(newScale, newScale, newScale);
            },
            onLeave: () => {
              setAnimationSection2Finished(true);
            },
            onEnterBack: () => {
              setAnimationSection2Finished(false);
            },
          })
        );

        // ScrollTrigger for .section3
        triggers.push(
          ScrollTrigger.create({
            trigger: ".section3",
            start: "top bottom-=100",
            end: isPhone ? "top center-=300" : "top center",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;

              // Calculate new properties based on progress
              const newY = isPhone
                ? initialPosition.y - 1.3 - 2.78 * progress
                : initialPosition.y - 1.9 - 1.24 * progress;
              const newX = isPhone
                ? initialPosition.x - 0 + 0 * progress
                : initialPosition.x - 1.23 + 1.45 * progress;
              const newRotation = initialRotation.z + 1.55 + 0.022 * progress;
              const newRotation1 = initialRotation.y - 1.575 - 0 * progress;
              const newRotation2 = initialRotation.x + 4.7 + 4.65 * progress;
              const newScale = isPhone
                ? initialScale - 0.05 - 0 * progress
                : initialScale + 0.12 - 0.1 * progress;

              // Apply changes
              group.position.set(newX, newY, initialPosition.z);
              group.rotation.set(newRotation2, newRotation1, newRotation);
              group.scale.set(newScale, newScale, newScale);
            },
          })
        );
      });

      return () => {
        triggers.forEach((trigger) => trigger.kill());
        ctx.revert(); // Revert the gsap context animations
      };
    }
  }, [group, isPhone]);

  const handleRef = (node) => {
    if (node) {
      setGroup(node);
    }
  };

  return (
    <Canvas
      dpr={[1, 1.5]}
      antialias="false"
      className="right-1/2 transform translate-x-[0%] lg:translate-x-[14%]"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <directionalLight
          position={[0, 0, 4]}
          intensity={1}
          castShadow={true}
        />
        <ambientLight intensity={4} />

        {/* iPhone Model */}
        <IPhoneModel
          ref={handleRef}
          animationSection2Finished={animationSection2Finished}
          section2CameraFirst={section2CameraFirst}
          section2CameraSecond={section2CameraSecond}
          section2CameraThird={section2CameraThird}
        />
        <Environment files={fieldhdr} environmentIntensity={0.8} />
      </Suspense>
    </Canvas>
  );
};

export default IPhoneScene;
