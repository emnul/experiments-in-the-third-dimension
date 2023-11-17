import { OrbitControls } from "@react-three/drei";
import WebGPURenderer from "three/examples/jsm/renderers/webgpu/WebGPURenderer.js";
import { Canvas, MaterialNode, extend } from "@react-three/fiber";
import {  positionLocal, MeshBasicNodeMaterial } from 'three/examples/jsm/nodes/Nodes.js';

extend({ MeshBasicNodeMaterial})

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshBasicNodeMaterial: MaterialNode<MeshBasicNodeMaterial, [MeshBasicNodeMaterial]>
  }
}

function WebGPUR3FExperiment() {
  return (
    <div id="canvas-container" className="canvas-container">
      <Canvas
        gl={(canvas) =>
          new WebGPURenderer({
            canvas: canvas as HTMLCanvasElement,
            antialias: true,
          })
        }
      >
        <gridHelper/>
        <OrbitControls />
        <mesh>
          <sphereGeometry/>
          <meshBasicNodeMaterial colorNode={positionLocal}/>
        </mesh>
      </Canvas>
    </div>
  );
}

export default WebGPUR3FExperiment;
