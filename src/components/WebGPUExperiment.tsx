import { OrbitControls } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { MeshBasicNodeMaterial } from "three/examples/jsm/nodes/Nodes";
import WebGPURenderer from "three/examples/jsm/renderers/webgpu/WebGPURenderer";
import { Canvas } from "@react-three/fiber";

extend({ MeshBasicNodeMaterial });

function WebGPUExperiment() {
  return (
    <div id="canvas-container" className="canvas-container">
      <Canvas gl={(canvas) => new WebGPURenderer({ canvas, antialias: true })}>
        <gridHelper />
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
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
