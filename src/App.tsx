import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { EquirectangularReflectionMapping } from "three/src/constants.js";
import { Suspense } from "react";

function App() {
  const [envMap] = useLoader(TextureLoader, [
    "public/blockadesLabsSkybox/alien-cave.jpg",
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
              <shaderMaterial />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
