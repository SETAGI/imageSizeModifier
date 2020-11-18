import React from 'react';

const ShowDimensions = ({ originalSize }) => {
  return (
    <>
      {
        <p>Width: {originalSize.width} </p>
      }
      {
        <p>Heigth: {originalSize.height} </p>
      }
      {
        <p>Orientation: {originalSize.orientation} </p>
      }

    </>
  );
};

export default ShowDimensions;
