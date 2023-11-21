"use client";

import vertexShader from "@/shaders/ShapingFunctions/vertex.glsl";
import fragmentShader from "@/shaders/ShapingFunctions/smoothstep.glsl";

import ShaderExperiment from "components/ShaderExperiment/ShaderExperiment";

function SmoothStepShader() {
  return (
    <ShaderExperiment
      fragmentShader={fragmentShader}
      vertexShader={vertexShader}
    >
      <planeGeometry />
    </ShaderExperiment>
  );
}

export default SmoothStepShader;
