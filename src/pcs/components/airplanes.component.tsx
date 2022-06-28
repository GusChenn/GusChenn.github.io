import React, { Suspense, useRef } from 'react';
import mockedData from './../resources/flights-mock-data.json';
// @ts-ignore
import { project } from '../../../node_modules/ecef-projector/index';
import { useLoader, useFrame, Euler } from "@react-three/fiber";
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

  const tiltCalculator = (position: number[]): Euler => {
    const baseRotationValue = -0.2;
    let rotation = {x: 0, y: 0, z: 0};
    if (position[0] > 0) {
      if (position[1] > 0) {
        if (position[2] > 0) {
          rotation = { x: baseRotationValue, y: baseRotationValue, z: baseRotationValue };
        } else {
          rotation = { x: baseRotationValue, y: baseRotationValue, z: -baseRotationValue };
        }
      } else {
        if (position[2] > 0) {
          rotation = { x: baseRotationValue, y: -baseRotationValue, z: baseRotationValue };
        } else {
          rotation = { x: baseRotationValue, y: -baseRotationValue, z: -baseRotationValue };
        }
      }
    } else {
      if (position[1] > 0) {
        if (position[2] > 0) {
          rotation = { x: -baseRotationValue, y: baseRotationValue, z: baseRotationValue };
        } else {
          rotation = { x: -baseRotationValue, y: baseRotationValue, z: -baseRotationValue };
        }
      } else {
        if (position[2] > 0) {
          rotation = { x: -baseRotationValue, y: -baseRotationValue, z: baseRotationValue };
        } else {
          rotation = { x: -baseRotationValue, y: -baseRotationValue, z: -baseRotationValue };
        }
      }
    }
    return [rotation.x, rotation.y, rotation.z, 'XYZ'];
  };

  console.log(flightPositions[0]);
  console.log(convertedPositions[0]);

  return (
    <Suspense fallback={null}>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={convertedPositions[2]}
        scale={0.009}
        rotation={tiltCalculator(convertedPositions[2])}
        look
      />
    </Suspense>
  );
};

export default Airplanes;
