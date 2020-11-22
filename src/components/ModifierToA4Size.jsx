import React, { useState } from 'react';
import { calculationRequiredImageSize } from '../domain/calculationRequiredImageSize';
import ShowA4Dimensions from './ShowA4Dimensions';
import ShowDimensions from './ShowDimensions';

const ModifierToA4Size = ({ originalData }) => {

  const [a4Size, seta4Size] = useState({ widthFinal: '--', heightFinal: '--', orientationFinal: '--' });
  const [baseSizeSelected, setBaseSizeSelected] = useState(false);
  const [buttonResize, setButtonResize] = useState(true);
  const a4SizeSheet = { maxWidth: 796, maxHeight: 1123 };


  function sizeAndOrientationValidation() {
    const { widthFinal, heightFinal, orientationFinal } = calculationRequiredImageSize(a4SizeSheet, originalData);
    seta4Size({ widthFinal, heightFinal, orientationFinal });
    setBaseSizeSelected(true);
    setButtonResize(false);
  }

  return (
    <>
      {
        buttonResize && (
          <div className='to-A4-button-container mb-5 mt-5'>
            <button onClick={sizeAndOrientationValidation} className='btn pointer' >Press to resize to A4</button>
          </div>
        )
      }

      {
        baseSizeSelected && (
          <div className='response-container mb-5 mt-5'>
            <h2 className='mb-1'>{originalData.namePhoto}</h2>
            <div className='dimensions-container'>
              <ShowDimensions originalSize={originalData} />
              <ShowA4Dimensions a4Size={a4Size} />
            </div>
          </div>)
      }
    </>
  );
};

export default ModifierToA4Size;
