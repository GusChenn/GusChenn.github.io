import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Airplanes from './airplanes.component';

interface IAirplanesWithDataProps {
  blueAirplaneGltf: any;
  redAirplaneGltf: any;
  blueAirplaneRef: any;
  redAirplaneRef: any;
  velocity: number;
};

const AirplanesWithData = ({ blueAirplaneGltf, redAirplaneGltf, blueAirplaneRef, redAirplaneRef, velocity }: IAirplanesWithDataProps): React.ReactElement => {
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
        <Airplanes airplaneGltf={blueAirplaneGltf} airplaneRef={blueAirplaneRef} airplaneDataSet={0} />
        <Airplanes airplaneGltf={redAirplaneGltf} airplaneRef={redAirplaneRef} airplaneDataSet={1}/>
      </group>
    </>
  );
};

export default AirplanesWithData;
