import React, { useState } from 'react';
import ModifierToA4Size from './ModifierToA4Size';
import ShowOriginalDimensions from './ShowOriginalDimensions';

const ImageImporter = () => {

  const [originalSize, setOriginalSize] = useState({ width: 0, height: 0, orientation: 'Vertical' });

  function inputFile(e) {

    let data = e.target.files[0];

    if (e.target.files.length === 0 || !/\.(jpg|png)$/i.test(data.name)) {

      alert('Ingrese una imagen con el formato: .jpg');

    } else {

      let img = new Image();

      img.onload = function () {
        setOriginalSize({
          width: parseInt(this.width.toFixed(0)),
          height: parseInt(this.height.toFixed(0)),
          orientation: this.height > this.width || this.height === this.width ? 'Vertical' : 'Horizontal'
        });
      };

      img.src = URL.createObjectURL(data);

    }

  }

  return (
    <>
      <input type='file' name='file[]' onChange={inputFile} multiple></input>
      <ShowOriginalDimensions originalSize={originalSize} />
      <ModifierToA4Size originalSize={originalSize} />
    </>
  );
};

export default ImageImporter;
