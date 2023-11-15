import WebGPUExperiment from "./components/WebGPUExperiment.jsx";
import WebGLExperiment from "./components/WebGLExperiment.jsx";
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
