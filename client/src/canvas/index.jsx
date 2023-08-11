import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";

import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error }) => {
  // Custom error fallback UI
  return (
    <div>
      <h2>Something went wrong:</h2>
      <p>{error.message}</p>
      {/* Additional error handling or error reporting */}
    </div>
  );
};

const CanvasModel = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </ErrorBoundary>
  );
};

export default CanvasModel;
