import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import GlobalWrapper from './components/global-wrapper.component';
import H1 from './components/h1.component';
import { OrbitControls, Stars } from '@react-three/drei';
import Nomes from './resources/nomes.svg';
import EarthScene from './components/earth-scene.component';

interface IPcsPageProps {};

const PcsPage = ({}: IPcsPageProps): React.ReactElement => {

  const [intensity, setIntensity] = useState(0.4);
  const [velocity, setVelocity] = useState(0.003);
  const [dataSet1, setDataSet1] = useState(0);
  const [dataSet2, setDataSet2] = useState(1);

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
        top: '40%',
        left: '15px',
        height: '45%',
        width: '10%',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 7,
      }}>
        <h6>Intensidade da luz</h6>
        <input style={{background: '#2f2f2f', color:'#bebebe', borderColor: '#bebebe' }} onChange={(e) => setIntensity(parseFloat(e.target.value))}/>
        <h6>Velocidade do avião</h6>
        <input style={{background: '#2f2f2f', color:'#bebebe', borderColor: '#bebebe' }} onChange={(e) => setVelocity(parseFloat(e.target.value))}/>
        <h6>Dataset avião azul</h6>
        <input style={{background: '#2f2f2f', color:'#bebebe', borderColor: '#bebebe' }} onChange={(e) => {
          if (parseInt(e.target.value) > 7) {
            setDataSet1(7);
          } else {
            setDataSet1(parseInt(e.target.value));
          }
        }}/>
        <h6>Dataset avião vermelho</h6>
        <input style={{background: '#2f2f2f', color:'#bebebe', borderColor: '#bebebe' }} onChange={(e) => {
          if (parseInt(e.target.value) > 7) {
            setDataSet2(7);
          } else {
            setDataSet2(parseInt(e.target.value));
          }
        }}/>

      </div>

      <Canvas style={{ 
        height: '100vh',
        width: '100vw',
      }}>
        <OrbitControls />
        <ambientLight intensity={intensity} />
        <directionalLight color='white' position={[3, 3, -1]} intensity={1} />
        <directionalLight color='white' position={[-3, -1, -1]} intensity={intensity} />
        <EarthScene velocity={velocity} dataSet1={dataSet1} dataSet2={dataSet2} />
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
