import React, { Suspense, useRef } from 'react';
import mockedData from './../resources/flights-mock-data.json';
// @ts-ignore
import { project } from '../../../node_modules/ecef-projector/index';
import { useFrame } from "@react-three/fiber";

interface IAirplanesProps {
  airplaneGltf: any;
  airplaneRef: any;
  airplaneDataSet: number;
};

const NORMALIZATION_FACTOR = 3300000;

const Airplanes = ({ airplaneGltf, airplaneRef, airplaneDataSet }: IAirplanesProps): React.ReactElement => {
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

  useFrame((state, delta) => {
    airplaneRef.current.lookAt(0,0,0);
  });

  return (
    <>
      <primitive
        ref={airplaneRef}
        object={airplaneGltf.scene}
        position={convertedPositions[airplaneDataSet]}
        scale={0.005}
      />
    </>
    
  );
};

export default Airplanes;
