import React, { Fragment } from 'react';
import { Canvas } from '@react-three/fiber';
import GlobalWrapper from './components/global-wrapper.component';
import H1 from './components/h1.component';

interface IPcsPageProps {};

const PcsPage = ({}: IPcsPageProps): React.ReactElement => {
  return (
    <GlobalWrapper>
      <H1 content='conteudo do h1' />
    </GlobalWrapper>
  );
};

export default PcsPage;
