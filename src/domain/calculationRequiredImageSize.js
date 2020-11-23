
export function calculationRequiredImageSize({ maxWidth, maxHeight }, { width, height }) {

  const BASE_AREA = maxWidth * maxHeight;
  const VERTICAL_ORIENTATION = 'Vertical';
  const HORIZONTAL_ORIENTATION = 'Horizontal';

  if (width === height) {
    return calculateForSquare();
  }

  if (width > height) {
    return calculareForHorizontalRectangle();
  }

  if (width < height) {
    return calculareForVerticalRectangle();
  }

  function calculateForSquare() {
    const FACTOR = (width / maxWidth);
    if ((width <= maxWidth)) return ({ widthFinal: width, heightFinal: width, orientationFinal: VERTICAL_ORIENTATION });
    else return calculateFinalResult(FACTOR, VERTICAL_ORIENTATION);
  }

  function calculareForHorizontalRectangle() {
    const FACTOR = (width / maxHeight);
    const ALTERNATIVE_FACT = (height / maxWidth);
    const REDUCED_AREA = (width / FACTOR) * (height / FACTOR);

    if ((width <= maxWidth)) return ({ widthFinal: width, heightFinal: height, orientationFinal: VERTICAL_ORIENTATION });

    else if ((width <= maxHeight) && (height <= maxWidth))
      return ({ widthFinal: width, heightFinal: height, orientationFinal: HORIZONTAL_ORIENTATION });

    else if ((width > maxHeight) && (height <= maxWidth))
      return calculateFinalResult(FACTOR, HORIZONTAL_ORIENTATION);

    else {

      if (REDUCED_AREA > BASE_AREA) {
        return calculateFinalResult(ALTERNATIVE_FACT, HORIZONTAL_ORIENTATION);
      } else {
        return calculateFinalResult(FACTOR, HORIZONTAL_ORIENTATION);
      }
    }
  }

  function calculareForVerticalRectangle() {
    const FACTOR = (height / maxHeight);
    const ALTERNATIVE_FACT = (width / maxWidth);
    const REDUCED_AREA = (width / FACTOR) * (height / FACTOR);

    if ((height <= maxHeight) && (width <= maxWidth)) return ({ widthFinal: width, heightFinal: height, orientationFinal: VERTICAL_ORIENTATION });

    else if ((height > maxHeight) && (width <= maxWidth))
      return calculateFinalResult(FACTOR, VERTICAL_ORIENTATION);
    else {

      if (REDUCED_AREA > BASE_AREA) {
        return calculateFinalResult(ALTERNATIVE_FACT, VERTICAL_ORIENTATION);
      } else {
        return calculateFinalResult(FACTOR, VERTICAL_ORIENTATION);
      }
    }
  }

  function calculateFinalResult(factor, orientation) {
    return ({
      widthFinal: Math.round(width / factor),
      heightFinal: Math.round(height / factor),
      orientationFinal: orientation
    });
  }
}