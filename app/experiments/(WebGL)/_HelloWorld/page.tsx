"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Color, DoubleSide, ShaderMaterial, Vector2, Vector3 } from "three";
import vertexShader from "@/shaders/HelloWorld/vertex.glsl";
import fragmentShader from "@/shaders/HelloWorld/fragment.glsl";
import styles from "../../experiment.module.css";
import { useRef } from "react";
import { easing } from "maath";

function CustomShader() {
  const shaderRef = useRef<ShaderMaterial>(null!);

  useFrame((state, delta) => {
    shaderRef.current.uniforms.uTime.value += delta * 5.2;
    easing.damp2(
      shaderRef.current.uniforms.uMouse.value,
      state.pointer,
      0.2,
      delta
    );
    shaderRef.current.uniforms.uResolution.value = new Vector2();
  });

  const { viewport, size } = useThree();

  return (
    // Mesh will take up the entire screen
    <mesh scale={new Vector3(viewport.width, viewport.height, 1)}>
      <planeGeometry />
      <shaderMaterial
        ref={shaderRef}
        uniforms={{
          uTime: { value: 0.0 },
          uMouse: { value: new Vector2() },
          uResolution: {
            value: new Vector2(
              size.width * viewport.dpr,
              size.height * viewport.dpr
            ),
          },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={DoubleSide}
      />
    </mesh>
  );
}

function HelloWorld() {
  return (
    <main>
      <Canvas
        className={styles.canvasContainer}
        camera={{ position: [0, 0, 1.5], fov: 55, near: 1, far: 1000 }}
        scene={{ background: new Color("#e0e0e0") }}
      >
        <OrbitControls />
        <CustomShader />
      </Canvas>
    </main>
  );
}

export default HelloWorld;
