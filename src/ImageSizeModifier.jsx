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

  const openFiles = () => {
    document.querySelector('.input').click();
  };


  return (
    < >
      <header className='header'>
        <div className="header__text-box">
          <h1 className="text-header-main">
            <span className="text-header-main--primary">Image converter</span>
            <span className="text-header-main--secondary">The best place to modify the size of your images</span>
          </h1>
        </div>
      </header>
      <div className="utility-center-text mb-5">
        <h2 className="text-secondary">
          Please select the images
					</h2>
      </div>
      <div className="flecha-down mb-5"></div>

      {showInput && (
        <div className='buttonContainer mt-5'>
          <button onClick={openFiles} className='pointer btn btn--white btn--animated'><i className="fas fa-camera-retro"></i></button>
        </div>)
      }

      <input type='file' name='file[]' onChange={inputFile} multiple className='input'></input>

      {
        showResults && <ModifierToA4Size originalSize={originalSize} />
      }

      {
        back && <button onClick={initialState}>return</button>
      }
      <footer className='footer mt-10 '>
        <p>&copy; Created by Sebastian Tamayo Giraldo - 2020</p>
      </footer>

    </>
  );
};

export default ImageSizeModifier;
