import WebGPUExperiment from "./components/WebGPUExperiment";
import WebGLExperiment from "./components/WebGLExperiment";
import { useState } from "react";

function App() {
  const [switchScene, setScene] = useState(true);

  return (
    <>
      <button className="btn" onClick={() => setScene(!switchScene)}>
        Change Scene
      </button>
      {switchScene ? <WebGPUExperiment /> : <WebGLExperiment />}
    </>
  );
}

export default App;
