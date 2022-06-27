import React, { Suspense, useRef } from 'react';
import mockedData from './../resources/flights-mock-data.json';
// @ts-ignore
import { project } from '../../../node_modules/ecef-projector/index';
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface IAirplanesProps {
};

type GltfModelRefType =  {
  rotation: {
    x: number,
    y: number,
    z: number,
  }
};

const NORMALIZATION_FACTOR = 3000000;
const modelPath = './../airplane.glb';

const Airplanes = ({}: IAirplanesProps): React.ReactElement => {
  const dataFilter = (data: any) => {
    const flightPositions: any[] = [];
    data.data.forEach((flight: any) => {
      if (flight.live !== null) {
        flightPositions.push([flight.live.latitude, flight.live.longitude, flight.live.altitude]);
      }
    });
    return flightPositions;
  };

  const flightPositions = dataFilter(mockedData);
  const convertedPositions = flightPositions.map((position: any) => project(...position).map((convertedPosition: any) => convertedPosition / NORMALIZATION_FACTOR));
  dataFilter(mockedData);

  const ref = useRef<GltfModelRefType>({ rotation: { x: 0, y: 0, z: 0 } });
  const gltf = useLoader(GLTFLoader, modelPath);

  return (
    <Suspense fallback={null}>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={convertedPositions[0]}
        scale={0.009}
      />
    </Suspense>
  );
};

export default Airplanes;
