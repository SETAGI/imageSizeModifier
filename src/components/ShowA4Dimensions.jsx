import React from 'react';

const ShowA4Dimensions = ({ a4Size }) => {
  return (
    <div className='result-data-container'>
      <h3 className='mb-1'>Required dimensions</h3>
      <div>
        <p>Width = {a4Size.widthFinal}px </p>
        <p>Heigth = {a4Size.heightFinal}px </p>
        <p>A4 page orientation = {a4Size.orientationFinal} </p>
      </div>
    </div>
  );
};

export default ShowA4Dimensions;