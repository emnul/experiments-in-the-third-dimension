"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Color, ShaderMaterial, Vector2, Vector3 } from "three";
import { ReactNode, useRef } from "react";
import styles from "./shaderExperiment.module.css";
import { OrbitControls } from "@react-three/drei";

interface CustomShaderProps {
  vertexShader: string;
  fragmentShader: string;
  children?: ReactNode;
  orbitControls?: boolean;
}

function CustomShader({
  children,
  vertexShader,
  fragmentShader,
}: CustomShaderProps) {
  const shaderRef = useRef<ShaderMaterial>(null!);
  const { viewport } = useThree();
  const resolution = new Vector2();

  useFrame((state, delta) => {
    shaderRef.current.uniforms.uResolution.value = resolution.set(
      state.size.width * viewport.dpr,
      state.size.height * viewport.dpr
    );
    shaderRef.current.uniforms.uMouse.value = state.pointer;
    shaderRef.current.uniforms.uTime.value += delta;
  });

  return (
    // Mesh will take up the entire screen
    <mesh>
      {children}
      <shaderMaterial
        ref={shaderRef}
        uniforms={{
          uTime: { value: 0.0 },
          uMouse: { value: new Vector2() },
          uResolution: {
            value: new Vector2(),
          },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

function ShaderExperiment({
  children,
  vertexShader,
  fragmentShader,
  orbitControls,
}: CustomShaderProps) {
  return (
    <main className={styles.canvasContainer}>
      <Canvas scene={{ background: new Color("#e0e0e0") }}>
        <CustomShader
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        >
          {children}
        </CustomShader>
        {orbitControls ? <OrbitControls /> : <></>}
      </Canvas>
    </main>
  );
}

export default ShaderExperiment;
