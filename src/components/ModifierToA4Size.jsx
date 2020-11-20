import React, { useState } from 'react';
import { domain } from '../domain/domain';
import ShowA4Dimensions from './ShowA4Dimensions';
import ShowDimensions from './ShowDimensions';

const ModifierToA4Size = ({ originalSize }) => {

  const [a4Size, seta4Size] = useState({ widthFinal: '--', heightFinal: '--', orientationFinal: '' });
  const a4SizeSheet = { maxWidth: 796, maxHeight: 1123 };

  const sizeAndOrientationValidation = () => {
    const { widthFinal, heightFinal, orientationFinal } = domain(a4SizeSheet, originalSize);
    seta4Size({ widthFinal, heightFinal, orientationFinal });
  };

  return (
    <>
      <button onClick={sizeAndOrientationValidation} >Validation Size</button>
      <ShowDimensions originalSize={originalSize} />
      <ShowA4Dimensions a4Size={a4Size} />
    </>
  );
};

export default ModifierToA4Size;
