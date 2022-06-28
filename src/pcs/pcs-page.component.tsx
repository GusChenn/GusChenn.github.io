import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import GlobalWrapper from './components/global-wrapper.component';
import H1 from './components/h1.component';
import { OrbitControls, Stars } from '@react-three/drei';
import Airplanes from './components/airplanes.component';
import Nomes from './resources/nomes.svg';
import EarthScene from './components/earth-scene.component';

interface IPcsPageProps {};

const PcsPage = ({}: IPcsPageProps): React.ReactElement => {
  return (
    <GlobalWrapper>
      <div className='imgContainer'style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <img src={Nomes} style={{ 
          position: 'absolute',
          top: '80vh',
          left: '15px',
          width: '331px',
          height: '93px',
        }} />
      </div>
      <Canvas style={{ 
        height: '100vh',
        width: '100vw',
      }}>
        <OrbitControls />
        <ambientLight intensity={0.4} />
        <directionalLight color='white' position={[3, 3, -1]} intensity={1} />
        <directionalLight color='white' position={[-3, -1, -1]} intensity={0.1} />
        <EarthScene />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </GlobalWrapper>
  );
};

export default PcsPage;
