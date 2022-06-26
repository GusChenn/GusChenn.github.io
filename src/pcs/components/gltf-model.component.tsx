import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface IGltfModelProps {
  modelPath: string;
  scale?: number;
  position?: number[];
}

type GltfModelRefType =  {
  rotation: {
    x: number,
    y: number,
  }
};

const GltfModel = ({ modelPath, scale = 0.5, position = [0, 0, 0] }: IGltfModelProps): React.ReactElement => {

  const ref = useRef<GltfModelRefType>({ rotation: { x: 0, y: 0 } });
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, hover] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.003));
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={hovered ? scale * 1 : scale}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      />
    </>
  );
};

export default GltfModel;
