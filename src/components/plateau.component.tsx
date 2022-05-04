import React, { Fragment } from 'react';
import './../styles/plateau.scss';
import ImageContainer from './image-container.component';
import pimas from './../resources/drawn_pepper.png'

const Plateau:React.FC = () => {
  return(
    <div className='container'>
      <div className='pepperCard'>
        <ImageContainer src={pimas} subtitle="texto" />
      </div>
    </div>
  );
};

export default Plateau;
