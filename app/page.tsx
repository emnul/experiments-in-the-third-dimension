"use client";

import vertexShader from "@/shaders/OrganicSphere/vertex.glsl";
import fragmentShader from "@/shaders/OrganicSphere/fragment.glsl";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Color, ShaderMaterial, Vector2 } from "three";
import styles from "../components/ShaderExperiment/shaderExperiment.module.css";
import Script from "next/script";

const OrganicSphere = () => {
  const shaderRef = useRef<ShaderMaterial>(null!);
  const { viewport } = useThree();
  const resolution = new Vector2();

  useFrame((state, delta) => {
    shaderRef.current.uniforms.uTime.value += delta;

    shaderRef.current.uniforms.uResolution.value = resolution.set(
      state.size.width * viewport.dpr,
      state.size.height * viewport.dpr
    );
  });
  return (
    <mesh>
      <sphereGeometry args={[1, 512, 512]} />
      <shaderMaterial
        ref={shaderRef}
        uniforms={{
          uTime: { value: 0.0 },
          uResolution: {
            value: resolution,
          },
        }}
        vertexShader={resolveLygia(vertexShader)}
        fragmentShader={resolveLygia(fragmentShader)}
      />
    </mesh>
  );
};

function OrganicSphereScene() {
  return (
    <main className={styles.canvasContainer}>
      <Canvas scene={{ background: new Color("black") }}>
        <OrganicSphere />
        <OrbitControls />
      </Canvas>
      <Script src="https://lygia.xyz/resolve.js" />
    </main>
  );
}

export default OrganicSphereScene;
