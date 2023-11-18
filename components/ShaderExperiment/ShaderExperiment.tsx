"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Color, ShaderMaterial, Vector2, Vector3 } from "three";
import { useRef } from "react";

interface CustomShaderProps {
  vertexShader: string;
  fragmentShader: string;
}

function CustomShader({ vertexShader, fragmentShader }: CustomShaderProps) {
  const shaderRef = useRef<ShaderMaterial>(null!);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    shaderRef.current.uniforms.uResolution.value = new Vector2(
      state.size.width * viewport.dpr,
      state.size.height * viewport.dpr
    );
    shaderRef.current.uniforms.uMouse.value = state.pointer;
    shaderRef.current.uniforms.uTime.value += delta;
  });

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
            value: new Vector2(),
          },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

function ShaderExperiment({ vertexShader, fragmentShader }: CustomShaderProps) {
  return (
    <main>
      <Canvas
        className={"canvasContainer"}
        camera={{ position: [0, 0, 1.5], fov: 55, near: 1, far: 1000 }}
        scene={{ background: new Color("#e0e0e0") }}
      >
        <CustomShader
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </Canvas>
    </main>
  );
}

export default ShaderExperiment;
