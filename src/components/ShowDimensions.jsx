import React from 'react';

const ShowDimensions = ({ originalSize }) => {
  return (
    <>
      <h3>Image  dimensions</h3>
      {
        <p>Width: {originalSize.width} </p>
      }
      {
        <p>Heigth: {originalSize.height} </p>
      }
    </>
  );
};

export default ShowDimensions;
