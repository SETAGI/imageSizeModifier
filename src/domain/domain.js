
export function domain({ maxWidth, maxHeight }, { width, height }) {

  const A4_AREA = maxWidth * maxHeight;
  const RATIO_IMAGE = width / height;


  if (RATIO_IMAGE === 1) {

    const FACT = (width / maxWidth);

    if ((width <= maxWidth)) return ({ widthFinal: width, heightFinal: width, orientationFinal: 'Vertical' });
    else return ({ widthFinal: Math.round(width / FACT), heightFinal: Math.round(height / FACT), orientationFinal: 'Vertical' });
  }


  if (RATIO_IMAGE > 1) {

    const FACT = (width / maxHeight);
    const HORIZONTAL_FACT = (height / maxWidth);
    const AREA_IMAGEN_REDUCIDA = (width / FACT) * (height / FACT);

    if ((width <= maxWidth)) return ({ widthFinal: width, heightFinal: height, orientationFinal: 'Vertical' });

    else if ((width <= maxHeight) && (height <= maxWidth))
      return ({ widthFinal: width, heightFinal: height, orientationFinal: 'Horizontal' });

    else if ((width > maxHeight) && (height <= maxWidth))
      return ({ widthFinal: Math.floor(width / FACT), heightFinal: Math.floor(height / FACT), orientationFinal: 'Horizontal' });

    else {

      if (AREA_IMAGEN_REDUCIDA > A4_AREA) {
        return ({ widthFinal: Math.round(width / HORIZONTAL_FACT), heightFinal: Math.round(height / HORIZONTAL_FACT), orientationFinal: 'Horizontal' });
      } else {
        return ({ widthFinal: Math.round(width / FACT), heightFinal: Math.round(height / FACT), orientationFinal: 'Horizontal' });
      }

    }

  }


  if (RATIO_IMAGE < 1) {

    const FACT = (height / maxHeight);
    const VERTICAL_FACT = (width / maxWidth);
    const AREA_IMAGEN_REDUCIDA = (width / FACT) * (height / FACT);

    if ((height <= maxHeight) && (width <= maxWidth)) return ({ widthFinal: width, heightFinal: height, orientationFinal: 'Vertical' });

    else if ((height > maxHeight) && (width <= maxWidth))
      return ({ widthFinal: Math.round(width / FACT), heightFinal: Math.round(height / FACT), orientationFinal: 'Vertical' });

    else {

      if (AREA_IMAGEN_REDUCIDA > A4_AREA) {
        return ({ widthFinal: Math.round(width / VERTICAL_FACT), heightFinal: Math.round(height / VERTICAL_FACT), orientationFinal: 'Vertical' });
      } else {
        return ({ widthFinal: Math.round(width / FACT), heightFinal: Math.round(height / FACT), orientationFinal: 'Vertical' });
      }

    }

  }

}