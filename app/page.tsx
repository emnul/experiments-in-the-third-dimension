"use client";

import ShaderExperiment from "components/ShaderExperiment/ShaderExperiment";
import vertexShader from "@/shaders/OrganicSphere/vertex.glsl";
import fragmentShader from "@/shaders/OrganicSphere/fragment.glsl";

function OrganicSphere() {
  return (
    <ShaderExperiment
      fragmentShader={fragmentShader}
      vertexShader={vertexShader}
      orbitControls={true}
    >
      <sphereGeometry />
    </ShaderExperiment>
  );
}

export default OrganicSphere;
