import React, { useState } from 'react';
import ModifierToA4Size from './components/ModifierToA4Size';

const ImageSizeModifier = () => {

  const [originalSize, setOriginalSize] = useState({ width: 0, height: 0, orientation: 'Vertical' });
  const [showResults, setShowResults] = useState(false);
  const [back, setBack] = useState(false);
  const [showInput, setShowInput] = useState(true);

  function inputFile(e) {
    let data = e.target.files[0];

    if (e.target.files.length === 0 || !/\.(jpg|png)$/i.test(data.name)) {
      console.log('Ingrese una imagen con el formato: .jpg');
    } else {

      let img = new Image();

      img.onload = function () {
        setOriginalSize({
          width: parseInt(this.width.toFixed(0)),
          height: parseInt(this.height.toFixed(0)),
        });
      };

      img.src = URL.createObjectURL(data);

    }
    setShowResults(true);
    setShowInput(false);
    setBack(true);
  }

  const initialState = () => {
    setShowResults(false);
    setShowInput(true);
    setBack(false);
  };

  return (
    < >
      <h1>Resize images for A4 size sheets</h1>

      {
        showInput && <input type='file' name='file[]' onChange={inputFile} multiple></input>
      }
      {
        showResults && <ModifierToA4Size originalSize={originalSize} />
      }
      {
        back && <button onClick={initialState}>return</button>
      }
    </>
  );
};

export default ImageSizeModifier;
