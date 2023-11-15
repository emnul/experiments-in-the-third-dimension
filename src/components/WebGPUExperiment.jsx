import { OrbitControls } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { MeshBasicNodeMaterial } from "three/examples/jsm/nodes/Nodes.js";
import WebGPURenderer from "three/examples/jsm/renderers/webgpu/WebGPURenderer.js";
import { Canvas } from "@react-three/fiber";

extend({ MeshBasicNodeMaterial });

function WebGPUExperiment() {
  return (
    <div id="canvas-container" className="canvas-container">
      <Canvas
        gl={(canvas) =>
          new WebGPURenderer({
            canvas,
            antialias: true,
          })
        }
      >
        <OrbitControls />
        <mesh>
          <sphereGeometry />
          <meshBasicNodeMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default WebGPUExperiment;
