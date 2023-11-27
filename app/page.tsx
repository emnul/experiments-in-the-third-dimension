"use client";

import vertexShader from "@/shaders/OrganicSphere/vertex.glsl";
import fragmentShader from "@/shaders/OrganicSphere/fragment.glsl";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { Color, ShaderMaterial, Vector2 } from "three";
import styles from "../components/ShaderExperiment/shaderExperiment.module.css";
import Script from "next/script";
import { v4 as uuidv4 } from "uuid";
import { useControls } from "leva";

const OrganicSphere = () => {
  const organicSphereMaterialRef = useRef<ShaderMaterial>(null!);
  const { viewport } = useThree();
  const resolution = new Vector2();
  const {
    controlDistortionFrequency,
    controlDistortionStrength,
    controlDisplacementFrequency,
    controlDisplacementStrength,
    controlTimeFrequency,
  } = useControls({
    controlDistortionFrequency: 2.0,
    controlDistortionStrength: 1.0,
    controlDisplacementFrequency: 3.0,
    controlDisplacementStrength: 0.2,
    controlTimeFrequency: 0.1,
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0.0 },
      uResolution: { value: resolution },
      uDistortionFrequency: { value: 2.0 },
      uDistortionStrength: { value: 1.0 },
      uDisplacementFrequency: { value: 3.0 },
      uDisplacementStrength: { value: 0.2 },
      uTimeFrequency: { value: 0.1 },
    }),
    []
  );

  useFrame((state, delta) => {
    organicSphereMaterialRef.current.uniforms.uTime.value += delta;

    organicSphereMaterialRef.current.uniforms.uResolution.value =
      resolution.set(
        state.size.width * viewport.dpr,
        state.size.height * viewport.dpr
      );

    organicSphereMaterialRef.current.uniforms.uDistortionFrequency.value =
      controlDistortionFrequency;
    organicSphereMaterialRef.current.uniforms.uDistortionStrength.value =
      controlDistortionStrength;
    organicSphereMaterialRef.current.uniforms.uDisplacementFrequency.value =
      controlDisplacementFrequency;
    organicSphereMaterialRef.current.uniforms.uDisplacementStrength.value =
      controlDisplacementStrength;
    organicSphereMaterialRef.current.uniforms.uTimeFrequency.value =
      controlTimeFrequency;
  });
  return (
    <mesh>
      <sphereGeometry args={[1, 512, 512]} />
      <shaderMaterial
        key={uuidv4()}
        ref={organicSphereMaterialRef}
        uniforms={uniforms}
        vertexShader={resolveLygia(vertexShader)}
        fragmentShader={resolveLygia(fragmentShader)}
      />
    </mesh>
  );
};

function OrganicSphereScene() {
  return (
    <main className={styles.canvasContainer}>
      <Canvas dpr={[1, 2]} scene={{ background: new Color("black") }}>
        <OrganicSphere />
        <OrbitControls />
      </Canvas>
      <Script src="https://lygia.xyz/resolve.js" />
    </main>
  );
}

export default OrganicSphereScene;
