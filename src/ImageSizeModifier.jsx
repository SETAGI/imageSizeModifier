import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ModifierToA4Size from './components/ModifierToA4Size';

const ImageSizeModifier = () => {

  const [originalSize, setOriginalSize] = useState({ width: 0, height: 0, orientation: 'Vertical' });
  const [showResults, setShowResults] = useState(false);
  const [back, setBack] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [notAnImage, setNotAnImage] = useState(false);

  function inputFile(e) {
    let data = e.target.files[0];

    if (e.target.files.length === 0 || !/\.(jpg|png)$/i.test(data.name)) {
      setNotAnImage(true);
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
    setNotAnImage(false);
    setShowInput(true);
    setBack(false);
  };

  const openFiles = () => {
    document.querySelector('.input').click();
  };

  return (
    < >
      <Header />
      {
        notAnImage ? <p>Error, the file selected is not an image</p> : (
          <>
            {
              showInput && (
                <>
                  <div className="center-text mb-5">
                    <h2 className="text-secondary">Please select the images</h2>
                  </div>
                  <div className="arrow-down mb-5 btn--animated"></div>
                </>)
            }
            {showInput && (
              <div className='import-button-container mt-5'>
                <button onClick={openFiles} className='pointer btn btn--import btn--animated'><i className="fas fa-camera-retro"></i></button>
              </div>)//mirar si puedo meter esto en un modulo aparte
            }
            <input type='file' name='file[]' onChange={inputFile} multiple className='input'></input>
            {
              showResults && <ModifierToA4Size originalSize={originalSize} />
            }
          </>
        )
      }

      {
        back && <button onClick={initialState} className='btn pointer mt-10'>Back</button>
      }

      <Footer />

    </>
  );
};

export default ImageSizeModifier;
