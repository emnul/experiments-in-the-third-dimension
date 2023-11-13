import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { EquirectangularReflectionMapping } from "three/src/constants.js";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import vertexShader from "./shaders/vertex.glsl?raw";
import fragmentShader from "./shaders/fragment.glsl?raw";

function App() {
  const [envMap] = useLoader(TextureLoader, [
    "/blockadesLabsSkybox/alien-cave.jpg",
  ]);
  envMap.mapping = EquirectangularReflectionMapping;

  return (
    <>
      <div
        id="canvas-container"
        className="fixed top-0 left-0 w-full h-full overflow-hidden"
      >
        <Canvas scene={{ background: envMap, environment: envMap }}>
          <ambientLight intensity={0.1} />
          <Suspense fallback={null}>
            <mesh>
              <sphereGeometry />
              <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
              />
            </mesh>
          </Suspense>
          <OrbitControls makeDefault />
        </Canvas>
      </div>
    </>
  );
}

export default App;
