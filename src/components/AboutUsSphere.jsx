"use client";

import React, { useRef, useEffect, useState, Suspense } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

// Simple fallback guitar for when model is loading
const FallbackGuitar = () => (
  <group>
    {/* Guitar body */}
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[2, 3, 0.5]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
    {/* Guitar neck */}
    <mesh position={[0, 3, 0]}>
      <boxGeometry args={[0.5, 3, 0.3]} />
      <meshStandardMaterial color="#A0522D" />
    </mesh>
  </group>
);

// Store the loaded guitar to prevent reloading on refresh
let cachedGuitar = null;

// The 3D Guitar component with enhanced stability
const RotatingGuitar = ({ scrollYProgress }) => {
  const groupRef = useRef();
  const [rotation, setRotation] = useState(0);
  const [loadingState, setLoadingState] = useState(cachedGuitar ? 'success' : 'loading');
  const [guitar, setGuitar] = useState(cachedGuitar);
  
  // Update rotation based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setRotation(latest * Math.PI * 4);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  // Load the model with robust error handling and caching
  useEffect(() => {
    // If we already have a cached guitar, use it
    if (cachedGuitar) {
      setGuitar(cachedGuitar);
      setLoadingState('success');
      return;
    }
    
    const loadGuitarModel = async () => {
      setLoadingState('loading');
      
      try {
        // Path to your model
        const guitarModelPath = '/models/gitar.glb';
        
        // Load 3D libraries asynchronously
        const dreiModule = await import('@react-three/drei');
        const { useGLTF } = dreiModule;
        
        // Use a promise to ensure loading completes or fails definitively
        const loadModel = () => new Promise((resolve, reject) => {
          try {
            // Preload the model
            useGLTF.preload(guitarModelPath);
            
            // Load the model
            const result = useGLTF(guitarModelPath);
            
            if (!result || !result.scene) {
              reject(new Error('Model loaded but scene is undefined'));
              return;
            }
            
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
        
        // Wait for model to load with timeout
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Model loading timed out')), 10000);
        });
        
        // Race between loading and timeout
        const result = await Promise.race([loadModel(), timeoutPromise]);
        
        // Process the loaded model
        const clone = result.scene.clone();
        
        // Calculate bounding box for proper scaling and centering
        const box = new THREE.Box3().setFromObject(clone);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        
        // Scale based on largest dimension to make it fill the view
        const scale = 4 / Math.max(size.x, size.y, size.z);
        
        // Apply transforms
        clone.scale.set(scale, scale, scale);
        clone.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
        clone.rotation.set(0.2, 0, 0);
        
        // Cache the prepared model
        cachedGuitar = clone;
        
        // Update state
        setGuitar(clone);
        setLoadingState('success');
        
        console.log('Guitar model loaded and configured successfully');
      } catch (error) {
        console.error('Error loading guitar model:', error);
        setLoadingState('error');
      }
    };
    
    // Start loading immediately
    loadGuitarModel();
  }, []);
  
  // Apply rotation to the guitar
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotation;
      groupRef.current.rotation.x = 0.2 + (rotation * 0.05);
      groupRef.current.rotation.z = Math.sin(rotation * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {loadingState !== 'success' ? (
        <FallbackGuitar />
      ) : (
        guitar && <primitive object={guitar} />
      )}
    </group>
  );
};

// Scene setup with better loading management
const Scene = ({ scrollYProgress }) => {
  return (
    <>
      <color attach="background" args={["rgba(0,0,0,0)"]} />
      
      {/* Improved lighting for better visibility */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <spotLight position={[-5, 5, 5]} angle={0.15} penumbra={1} intensity={1} />
      <spotLight position={[0, -5, 5]} angle={0.5} penumbra={1} intensity={0.5} />
      
      <Suspense fallback={<FallbackGuitar />}>
        <RotatingGuitar scrollYProgress={scrollYProgress} />
      </Suspense>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        enableRotate={false}
      />
      
      <Environment preset="sunset" background={false} />
    </>
  );
};

// Main component with refresh-stable structure
const AboutUsSphere = () => {
  // Use global scroll
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[0.5, 1.5]}
        gl={{ 
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true
        }}
        style={{
            opacity:0.2,
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      >
        <Scene scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
};

export default AboutUsSphere;