import React, { Suspense, useRef } from 'react';
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import AirplanesWithData from './airplanes-with-data.component';

const earthModelPath = './../earth.glb';
const blueAirplaneModelPath = './../perpendicular_airplane_blue.glb';
const redAirplaneModelPath = './../perpendicular_airplane_red.glb';

interface IEarthSceneProps {
  velocity: number;
};

const EarthScene = ({ velocity }: IEarthSceneProps): React.ReactElement => {
  const earthRef = useRef<any>();
  const blueAirplaneRef = useRef<any>();
  const redAirplaneRef = useRef<any>();
  const blueAirplaneGltf = useLoader(GLTFLoader, blueAirplaneModelPath);
  const redAirplaneGltf = useLoader(GLTFLoader, redAirplaneModelPath);
  const earthGltf = useLoader(GLTFLoader, earthModelPath);

  return (
    <Suspense fallback={null}>
      <primitive
        ref={earthRef}
        object={earthGltf.scene}
        position={[0, 0, 0]}
        scale={0.3}
      />
      <AirplanesWithData blueAirplaneGltf={blueAirplaneGltf} redAirplaneGltf={redAirplaneGltf} blueAirplaneRef={blueAirplaneRef} redAirplaneRef={redAirplaneRef} velocity={velocity} />
    </Suspense>
  );
};

export default EarthScene;
