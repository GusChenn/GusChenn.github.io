import React from 'react';
import './../styles/image-container.scss'

interface IImageContainerProps {
  src: string;
  subtitle: string;
};

const ImageContainer: React.FC<IImageContainerProps> = ({
  src,
  subtitle,
}) => {
  return (
    <div className='imageContainer'>
      <img className='image' src={src} />
      <h6 className='subtitle'>{subtitle}</h6>
    </div>
  );
};

export default ImageContainer;
