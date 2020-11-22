import React from 'react';

const ShowDimensions = ({ originalSize }) => {
  return (
    <div className='result-data-container'>
      <h3 className='mb-1'>Original dimensions</h3>
      <div>
        <p>Width = {originalSize.width} </p>
        <p>Heigth = {originalSize.height} </p>
      </div>
    </div>
  );
};

export default ShowDimensions;
