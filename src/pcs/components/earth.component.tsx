import React, { Suspense, useRef } from 'react';
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type GltfModelRefType =  {
  rotation: {
    x: number,
    y: number,
    z: number,
  }
};

const modelPath = './../earth.glb';

const Earth = (): React.ReactElement => {
  const ref = useRef<GltfModelRefType>({ rotation: { x: 0, y: 0, z: 0 } });
  const gltf = useLoader(GLTFLoader, modelPath);

  return (
    <Suspense fallback={null}>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={[0, 0, 0]}
        scale={0.3}
      />
    </Suspense>
  );
};

export default Earth;
