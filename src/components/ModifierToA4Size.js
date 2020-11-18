import React, { useState } from 'react';
import { domain } from '../domain/domain';
import ShowA4Dimensions from './ShowA4Dimensions';

const ModifierToA4Size = ({ originalSize }) => {

  const [a4Size, seta4Size] = useState({ widthFinal: 0, heightFinal: 0, orientationFinal: 'without data' });
  const a4SizeSheet = { maxWidth: 796, maxHeight: 1123 };

  const sizeAndOrientationValidation = () => {
    const { widthFinal, heightFinal, orientationFinal } = domain(a4SizeSheet, originalSize);
    seta4Size({ widthFinal, heightFinal, orientationFinal });
  };

  return (
    <>
      <button onClick={sizeAndOrientationValidation} >Validation Size</button>
      <ShowA4Dimensions a4Size={a4Size} />
    </>
  );
};

export default ModifierToA4Size;
