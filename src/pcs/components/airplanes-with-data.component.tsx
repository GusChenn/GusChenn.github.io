import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Airplanes from './airplanes.component';

interface IAirplanesWithDataProps {
  airplaneGltf: any;
  airplaneRef: any;
};

const AirplanesWithData = ({ airplaneGltf, airplaneRef }: IAirplanesWithDataProps): React.ReactElement => {
  const groupRef = useRef<any>();

  useFrame((state, delta) => {
    groupRef.current.rotateZ(-0.001);
  });

  return (
    <group
      position={[0,0,0]}
      ref={groupRef}
    >
      <Airplanes airplaneGltf={airplaneGltf} airplaneRef={airplaneRef} />
    </group>
  );
};

export default AirplanesWithData;
