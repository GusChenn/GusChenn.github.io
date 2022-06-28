import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Airplanes from './airplanes.component';

interface IAirplanesWithDataProps {
  blueAirplaneGltf: any;
  redAirplaneGltf: any;
  blueAirplaneRef: any;
  redAirplaneRef: any;
  velocity: number;
  dataSet1: number;
  dataSet2: number;
};

const AirplanesWithData = ({ blueAirplaneGltf, redAirplaneGltf, blueAirplaneRef, redAirplaneRef, velocity, dataSet1, dataSet2 }: IAirplanesWithDataProps): React.ReactElement => {
  const groupRef = useRef<any>();

  useFrame((state, delta) => {
    groupRef.current.rotateZ(-velocity);
    groupRef.current.rotateX(-velocity);
  });

  return (
    <>
      <group
        position={[0,0,0]}
        ref={groupRef}
      >
        <Airplanes airplaneGltf={blueAirplaneGltf} airplaneRef={blueAirplaneRef} airplaneDataSet={dataSet1} />
        <Airplanes airplaneGltf={redAirplaneGltf} airplaneRef={redAirplaneRef} airplaneDataSet={dataSet2}/>
      </group>
    </>
  );
};

export default AirplanesWithData;
