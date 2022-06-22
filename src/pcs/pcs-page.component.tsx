import React from 'react';
import { Canvas } from '@react-three/fiber';
import GlobalWrapper from './components/global-wrapper.component';
import H1 from './components/h1.component';
import Earth from './components/earth.component';
import { OrbitControls } from '@react-three/drei';

interface IPcsPageProps {};

const PcsPage = ({}: IPcsPageProps): React.ReactElement => {
  return (
    <GlobalWrapper>
      <H1 content='Trabalho PCS' />
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.4} />
        <directionalLight color='white' position={[-1, 5, 2]} intensity={1} />
        <Earth />
      </Canvas>
    </GlobalWrapper>
  );
};

export default PcsPage;
