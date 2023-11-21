"use client";

import vertexShader from "@/shaders/ShapingFunctions/vertex.glsl";
import fragmentShader from "@/shaders/ShapingFunctions/step.glsl";

import ShaderExperiment from "components/ShaderExperiment/ShaderExperiment";

function StepShader() {
  return (
    <ShaderExperiment
      fragmentShader={fragmentShader}
      vertexShader={vertexShader}
    >
      <planeGeometry />
    </ShaderExperiment>
  );
}

export default StepShader;
