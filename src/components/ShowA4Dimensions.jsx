import React from 'react';

const ShowA4Dimensions = ({ a4Size }) => {
  return (
    <div className='result-data-container'>
      <h3 className='mb-1'>Required Dimensions</h3>
      <div>
        <p>Width = {a4Size.widthFinal} </p>
        <p>Heigth = {a4Size.heightFinal} </p>
        <p>Orientation = {a4Size.orientationFinal} </p>
      </div>
    </div>
  );
};

export default ShowA4Dimensions;