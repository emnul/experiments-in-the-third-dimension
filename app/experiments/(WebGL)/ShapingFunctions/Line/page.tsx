"use client";

import vertexShader from "@/shaders/ShapingFunctions/vertex.glsl";
import fragmentShader from "@/shaders/ShapingFunctions/line.glsl";

import ShaderExperiment from "components/ShaderExperiment/ShaderExperiment";

function LineShader() {
  return (
    <ShaderExperiment
      fragmentShader={fragmentShader}
      vertexShader={vertexShader}
    >
      <planeGeometry />
    </ShaderExperiment>
  );
}

export default LineShader;
