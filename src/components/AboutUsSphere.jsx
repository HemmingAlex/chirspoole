"use client";

import React, { useRef, useState, useCallback } from "react";
import { useScroll } from "framer-motion";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

// Global model storage
let guitarModel = null;

// Simple fallback guitar
const FallbackGuitar = () => (
  <group>
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[2, 3, 0.5]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
    <mesh position={[0, 3, 0]}>
      <boxGeometry args={[0.5, 3, 0.3]} />
      <meshStandardMaterial color="#A0522D" />
    </mesh>
  </group>
);

// Context loss detector and handler
const ContextLossDetector = () => {
  const { gl } = useThree();

  React.useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.log("WebGL context lost - preventing default behavior");
    };

    const handleContextRestored = () => {
      console.log("WebGL context restored - scene should rebuild");
    };

    const canvas = gl.domElement;
    canvas.addEventListener("webglcontextlost", handleContextLost, false);
    canvas.addEventListener(
      "webglcontextrestored",
      handleContextRestored,
      false
    );

    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);
    };
  }, [gl]);

  return null;
};

// The guitar model component - only responsible for rendering, not loading
const GuitarModel = ({ scrollYProgress }) => {
  const groupRef = useRef();
  const [rotation, setRotation] = useState(0);

  // Handle scroll rotation
  React.useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setRotation(latest * Math.PI * 4);
    });
  }, [scrollYProgress]);

  // Apply rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotation;
      groupRef.current.rotation.x = 0.2 + rotation * 0.05;
      groupRef.current.rotation.z = Math.sin(rotation * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {guitarModel ? <primitive object={guitarModel} /> : <FallbackGuitar />}
    </group>
  );
};

// Main component with manual load button
const AboutUsSphere = () => {
  const { scrollYProgress } = useScroll();
  const [isCanvasVisible, setIsCanvasVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [key, setKey] = useState(0);

  // Manual model loading function
  const loadModel = () => {
    setIsLoading(true);
    console.log("Manually loading model");

    // Only load if not already loaded
    if (guitarModel) {
      console.log("Model already loaded");
      setIsCanvasVisible(true);
      setIsLoading(false);
      return;
    }

    import("three/examples/jsm/loaders/GLTFLoader")
      .then(({ GLTFLoader }) => {
        const loader = new GLTFLoader();

        loader.load(
          "/models/gitar.glb",
          (gltf) => {
            if (gltf.scene) {
              const newModel = gltf.scene.clone();

              // Calculate bounding box
              const box = new THREE.Box3().setFromObject(newModel);
              const size = box.getSize(new THREE.Vector3());
              const center = box.getCenter(new THREE.Vector3());

              // Scale it up
              const scale = 4 / Math.max(size.x, size.y, size.z);

              // Apply transformations
              newModel.scale.set(scale, scale, scale);
              newModel.position.set(
                -center.x * scale,
                -center.y * scale,
                -center.z * scale
              );

              // Store globally

              guitarModel = newModel;

              console.log("Model loaded successfully");
              setIsCanvasVisible(true);
              setIsLoading(false);
            }
          },
          (progress) => {
            const percentComplete = (progress.loaded / progress.total) * 100;
            console.log(`Loading progress: ${percentComplete.toFixed(0)}%`);
          },
          (error) => {
            console.error("Error loading guitar model:", error);
            setIsLoading(false);
          }
        );
      })
      .catch((error) => {
        console.error("Error importing GLTFLoader:", error);
        setIsLoading(false);
      });
  };

  // Force remount of the Canvas
  const handleRecover = useCallback(() => {
    console.log("Forcing Canvas remount");
    setKey((prev) => prev + 1);
  }, []);


  return (
    <div className="fixed inset-0 z-0">
      {/* Only show Canvas if visible flag is set */}
      {isCanvasVisible && (
        <div
          className="pointer-events-none"
          style={{ width: "100%", height: "100%" }}
        >
          <Canvas
            key={key}
            camera={{ position: [0, 0, 10], fov: 45 }}
            dpr={[0.5, 1.5]}
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
              preserveDrawingBuffer: true,
              failIfMajorPerformanceCaveat: false,
              desynchronized: false,
            }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
            }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <spotLight
              position={[-5, 5, 5]}
              angle={0.15}
              penumbra={1}
              intensity={1}
            />

            <ContextLossDetector />
            <GuitarModel scrollYProgress={scrollYProgress} />

            <Environment preset="sunset" background={false} />
          </Canvas>
        </div>
      )}

      {/* Control buttons */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {!isCanvasVisible && (
          <button
            onClick={loadModel}
            disabled={isLoading}
            className="bg-black bg-opacity-80 text-white p-2 rounded pointer-events-auto hover:bg-opacity-100 transition-opacity"
          >
            {isLoading ? "Loading..." : "Load 3D Guitar"}
          </button>
        )}

        {isCanvasVisible && (
          <>
            <button
              onClick={handleRecover}
              className="bg-black bg-opacity-80 text-white p-2 rounded pointer-events-auto hover:bg-opacity-100 transition-opacity"
            >
              Recover WebGL
            </button>

            <button
              onClick={() => setIsCanvasVisible(false)}
              className="bg-red-800 bg-opacity-80 text-white p-2 rounded pointer-events-auto hover:bg-opacity-100 transition-opacity"
            >
              Hide 3D
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AboutUsSphere;
