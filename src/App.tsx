import WebGPUR3FExperiment from "./components/WebGPU-R3F-Experiment.tsx";
import WebGLExperiment from "./components/WebGLExperiment.tsx";
import { useState } from "react";

function App() {
  const [switchScene, setScene] = useState(true);

  return (
    <>
      <button className="btn" onClick={() => setScene(!switchScene)}>
        Change Scene
      </button>
      {switchScene ? <WebGPUR3FExperiment /> : <WebGLExperiment />}
    </>
  );
}

export default App;
