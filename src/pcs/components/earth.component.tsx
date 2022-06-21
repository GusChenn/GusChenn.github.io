import React from 'react';

const Earth = (): React.ReactElement => {
  return (
    <mesh>
      <sphereGeometry args={[2, 30, 15]}/>
      <meshLambertMaterial color="blue"/>
    </mesh>
  );
};

export default Earth;
