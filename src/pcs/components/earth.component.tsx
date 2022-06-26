import React, { Suspense } from 'react';
import GltfModel from './gltf-model.component';

const Earth = (): React.ReactElement => {

  return (
    <Suspense fallback={null}>
      <GltfModel modelPath={'./../earth.glb'} scale={0.3} position={[0,-0.3,0]} />
    </Suspense>
  );
};

export default Earth;
