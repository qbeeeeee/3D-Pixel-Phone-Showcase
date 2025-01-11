import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import iphone from "./../assets/googlePixel.glb";
import fieldhdr from "./../assets/hdr/field.hdr";
import lobbyhdr from "./../assets/hdr/lobby.hdr";

gsap.registerPlugin(ScrollTrigger);

const IPhoneModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF(iphone);
  // Set the initial position, rotation, and scale
  scene.position.set(0.7, 2.31, 0);
  scene.rotation.set(0, Math.PI * 1.5, 0);
  scene.scale.set(0.25, 0.25, 0.25);
  return <primitive ref={ref} object={scene} />;
});

const IPhoneScene = () => {
  const [group, setGroup] = useState(null);

  useEffect(() => {
    if (group) {
      const initialPosition = { x: 0.7, y: 2.31, z: 0 };
      const initialRotation = { x: 0, y: Math.PI * 1.5, z: 0 };
      const initialScale = 0.25;

      const triggers = [];

      // ScrollTrigger for .section2
      triggers.push(
        ScrollTrigger.create({
          trigger: ".section2",
          start: "top bottom",
          end: "center center+=250",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Calculate new properties based on progress
            const newY = initialPosition.y - 1.88 * progress;
            const newX = initialPosition.x - 1.23 * progress;
            const newRotationX = initialRotation.x + 4.7 * progress;
            const newRotationY = initialRotation.y - 1.575 * progress;
            const newRotationZ = initialRotation.z + 1.55 * progress;

            const newScale = initialScale + 0.12 * progress;

            // Apply changes
            group.position.set(newX, newY, initialPosition.z);
            group.rotation.set(newRotationX, newRotationY, newRotationZ);
            group.scale.set(newScale, newScale, newScale);
          },
        })
      );

      // ScrollTrigger for .section3
      triggers.push(
        ScrollTrigger.create({
          trigger: ".section3",
          start: "top bottom",
          end: "center center",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Calculate new properties based on progress
            const newY = initialPosition.y + 0.1 - 1.7 * progress;
            const newX = initialPosition.x - 0.3 * progress;
            const newRotation = initialRotation.z + 0.1 * progress;
            const newRotation1 = initialRotation.y - 0.1 - 6.18 * progress;
            const newRotation2 = initialRotation.x - 0 * progress;
            const newScale = 0.15 - 0.03 * progress;

            // Apply changes
            group.position.set(newX, newY, initialPosition.z);
            group.rotation.set(newRotation2, newRotation1, newRotation);
            group.scale.set(newScale, newScale, newScale);
          },
        })
      );

      // Cleanup on unmount
      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    }
  }, [group]);

  const handleRef = (node) => {
    if (node) {
      setGroup(node);
    }
  };

  return (
    <Canvas
      dpr={[1, 1.5]}
      antialias="false"
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
        <IPhoneModel ref={handleRef} />
        <Environment files={fieldhdr} environmentIntensity={0.8} />
      </Suspense>
    </Canvas>
  );
};

export default IPhoneScene;
