import React from "react";
import {
  Scroll,
  ScrollControls,
  RandomizedLight,
  Sparkles,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const ComputersCanvas = React.lazy(() =>
  import("./components/canvas").then((module) => ({
    default: module.ComputersCanvas,
  }))
);
import { About, Hero, Tech, Experience } from "./components";
import "./App.css";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor";

const App = () => {
  return (
    <div className="appContainer">
      <Canvas
        camera={{ position: [20, 3, 5], fov: 30 }}
        style={{ width: "100%" }}
        frameloop="demand"
        shadows
        gl={{ preserveDrawingBuffer: true }}
      >
        {/* <RandomizedLight
          castShadow
          amount={4}
          frames={100}
          position={[5, 5, -10]}
        /> */}
        <ScrollControls pages={4} damping={0.25}>
          <Sparkles scale={[10, 10, 20]} count={100} size={10} />
          <ComputersCanvas />
          <Content />
        </ScrollControls>
      </Canvas>
      <SplashCursor />
    </div>
  );
};

const Content = () => {
  return (
    <Scroll html>
      <div style={{ width: "100vw" }}>
        <div>
          <Hero />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Tech />
        </div>
      </div>
    </Scroll>
  );
};

export default App;
