import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import iphone from "./../assets/googlePixel.glb";

gsap.registerPlugin(ScrollTrigger);

const IPhoneModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF(iphone);
  // Set the initial position, rotation, and scale
  scene.position.set(0.03, -0.5, 2);
  scene.rotation.set(0, -1.56, 0);
  scene.scale.set(0.4, 0.4, 0.4);
  return <primitive ref={ref} object={scene} />;
});

const IPhoneScene = () => {
  const [group, setGroup] = useState(null);

  useEffect(() => {
    if (group) {
      const initialPosition = { x: 0.03, y: -0.5, z: 2 };
      const initialRotation = { x: 0, y: -1.56, z: 0 };
      const initialScale = 0.4;

      const triggers = [];

      // ScrollTrigger for .section2
      triggers.push(
        ScrollTrigger.create({
          trigger: ".section2",
          start: "top bottom",
          end: "center center",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Calculate new properties based on progress
            const newY = initialPosition.y + 0.1 * progress;
            const newRotation = initialRotation.y + -6.4 * progress;
            const newScale = initialScale - 0.25 * progress;

            // Apply changes
            group.position.set(initialPosition.x, newY, initialPosition.z);
            group.rotation.set(
              initialRotation.x,
              newRotation,
              initialRotation.z
            );
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
          position={[1, 3, 4]}
          intensity={1}
          castShadow={false}
        />
        <ambientLight intensity={4} />

        {/* iPhone Model */}
        <IPhoneModel ref={handleRef} />
      </Suspense>
    </Canvas>
  );
};

export default IPhoneScene;
