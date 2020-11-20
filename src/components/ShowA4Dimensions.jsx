import React from 'react';

const ShowA4Dimensions = ({ a4Size }) => {
  return (
    <>
      <h3>Image require dimensions</h3>
      {
        <p>Width: {a4Size.widthFinal} </p>
      }
      {
        <p>Heigth: {a4Size.heightFinal} </p>
      }
      {
        <p>Orientation: {a4Size.orientationFinal} </p>
      }

    </>
  );
};


export default ShowA4Dimensions;