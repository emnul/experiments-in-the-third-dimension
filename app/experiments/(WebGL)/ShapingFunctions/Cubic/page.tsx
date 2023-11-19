"use client";

import vertexShader from "@/shaders/ShapingFunctions/vertex.glsl";
import fragmentShader from "@/shaders/ShapingFunctions/cubic.glsl";
import ShaderExperiment from "@/components/ShaderExperiment/ShaderExperiment";

function CubicShader() {
  return (
    <ShaderExperiment
      fragmentShader={fragmentShader}
      vertexShader={vertexShader}
    />
  );
}

export default CubicShader;
