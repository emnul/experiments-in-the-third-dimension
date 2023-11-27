"use client";

import {
  Canvas,
  PlaneGeometryProps,
  SphereGeometryProps,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { Color, ShaderMaterial, Vector2, Vector3 } from "three";
import { ReactElement, useRef } from "react";
import styles from "./shaderExperiment.module.css";
import { OrbitControls } from "@react-three/drei";

interface CustomShaderProps {
  vertexShader: string;
  fragmentShader: string;
  children:
    | ReactElement<PlaneGeometryProps>
    | ReactElement<SphereGeometryProps>;
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
    // TODO Mesh should take up the entire screen if children is type of plane geometry
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
      <Canvas dpr={[1, 2]} scene={{ background: new Color("#e0e0e0") }}>
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
