"use client";

import vertexShader from "@/shaders/HelloFragCoord/vertex.glsl";
import fragmentShader from "@/shaders/HelloFragCoord/fragment.glsl";
import ShaderExperiment from "components/ShaderExperiment/ShaderExperiment";

function HelloFragCoord() {
  return (
    <ShaderExperiment
      fragmentShader={fragmentShader}
      vertexShader={vertexShader}
    >
      <planeGeometry />
    </ShaderExperiment>
  );
}

export default HelloFragCoord;
