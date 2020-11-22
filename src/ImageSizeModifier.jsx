import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ModifierToA4Size from './components/ModifierToA4Size';

const ImageSizeModifier = () => {

  const [originalData, setOriginalData] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [notAnImage, setNotAnImage] = useState(false);

  function inputFile(e) {

    let data = e.target.files[0];

    if (e.target.files.length === 0 || !/\.(jpg|png)$/i.test(data.name)) {
      setNotAnImage(true);
    } else {


      let dataName = data.name;
      let name = (dataName).slice(0, (dataName.length - 4)); //modificar

      let img = new Image();

      img.onload = function () {
        setOriginalData({
          namePhoto: name,
          width: parseInt(this.width.toFixed(0)),
          height: parseInt(this.height.toFixed(0)),
        });
      };

      img.src = URL.createObjectURL(data);
    }
    setShowResults(true);
  }

  const openFiles = () => {
    document.querySelector('.input').click();
    setShowResults(false);
    setNotAnImage(false);
  };

  return (
    < >
      <Header />
      {
        notAnImage ? (
          <div className="center-text mb-5">
            <p className="text-secondary">!Error, selected file not allowed¡</p>
          </div>) : (
            <>
              {
                showResults && <ModifierToA4Size originalData={originalData} />
              }
            </>
          )
      }
      <div className="center-text mb-1">
        <h2 className="text-secondary">Select a new image</h2>
      </div>
      <div className="arrow-down btn--animated"></div>

      <div className='import-button-container mt-1'>
        <button onClick={openFiles} className='pointer btn btn--import btn--animated'><i className="fas fa-camera-retro"></i></button>
      </div>

      <input type='file' name='file' onChange={inputFile} className='input'></input>

      <Footer />
    </>
  );
};

export default ImageSizeModifier;
