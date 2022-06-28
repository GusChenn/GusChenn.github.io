import React, { Suspense, useRef } from 'react';
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import AirplanesWithData from './airplanes-with-data.component';

const earthModelPath = './../earth.glb';
const airplaneModelPath = './../perpendicular_airplane.glb';

const EarthScene = (): React.ReactElement => {
  const earthRef = useRef<any>();
  const airplaneRef = useRef<any>();
  const airplaneGltf = useLoader(GLTFLoader, airplaneModelPath);
  const earthGltf = useLoader(GLTFLoader, earthModelPath);

  return (
    <Suspense fallback={null}>
      <primitive
        ref={earthRef}
        object={earthGltf.scene}
        position={[0, 0, 0]}
        scale={0.3}
      />
      <AirplanesWithData airplaneGltf={airplaneGltf} airplaneRef={airplaneRef} />
    </Suspense>
  );
};

export default EarthScene;
