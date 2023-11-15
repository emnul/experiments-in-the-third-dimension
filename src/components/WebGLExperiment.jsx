import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

function WebGLExperiment({ debug = false }) {
  return (
    <div id="canvas-container" className="canvas-container">
      <Canvas>
        {debug ? <Perf /> : <></>}
        <gridHelper />
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <OrbitControls />
        <mesh>
          <sphereGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default WebGLExperiment;
