import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import GlobalWrapper from './components/global-wrapper.component';
import H1 from './components/h1.component';
import H6 from './components/h6.component';
import { OrbitControls, Stars } from '@react-three/drei';
import Nomes from './resources/nomes.svg';
import EarthScene from './components/earth-scene.component';
import Input from './components/input.component';

interface IPcsPageProps {};

const PcsPage = ({}: IPcsPageProps): React.ReactElement => {

  const [intensity, setIntensity] = useState(0.4);
  const [velocity, setVelocity] = useState(0.003);

  return (
    <GlobalWrapper>
      <div className='imgContainer'style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      </div>

      <H1 content='International flight tracker' />
      <div className='controls' style={{
        color: '#bebebe',
        position: 'absolute',
        top: '30%',
        left: '15px',
        height: '45%',
        width: '10%',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 7,
      }}>
        <h6>Intensidade da luz</h6>
        <input onChange={(e) => setIntensity(parseFloat(e.target.value))}/>
        <p></p>
        <h6>Velocidade do avião</h6>
        <input onChange={(e) => setVelocity(parseFloat(e.target.value))}/>

      </div>

      <Canvas style={{ 
        height: '100vh',
        width: '100vw',
      }}>
        <OrbitControls />
        <ambientLight intensity={intensity} />
        <directionalLight color='white' position={[3, 3, -1]} intensity={1} />
        <directionalLight color='white' position={[-3, -1, -1]} intensity={intensity} />
        <EarthScene velocity={velocity} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
      <img src={Nomes} style={{ 
        position: 'absolute',
        top: '80vh',
        left: '15px',
        width: '331px',
        height: '93px',
      }} />
    </GlobalWrapper>
  );
};

export default PcsPage;
