import { calculationRequiredImageSize } from '../../domain/calculationRequiredImageSize';

describe('Domain Tests', () => {

  test('It should return a square resized', () => {

    const sizeRequiredTest = {
      widthFinal: 796,
      heightFinal: 796,
      orientationFinal: 'Vertical'
    };
    const sizeRequired = calculationRequiredImageSize({ maxWidth: 796, maxHeight: 1123 }, { width: 1000, height: 1000 });
    expect(sizeRequired).toEqual(sizeRequiredTest);
  });

  test('It should return the same size', () => {
    const sizeRequiredTest = {
      widthFinal: 450,
      heightFinal: 450,
      orientationFinal: 'Vertical'
    };
    const sizeRequired = calculationRequiredImageSize({ maxWidth: 796, maxHeight: 1123 }, { width: 450, height: 450 });
    expect(sizeRequired).toEqual(sizeRequiredTest);
  });

  test('it should return the same image in a page horizontal', () => {
    const sizeRequiredTest = {
      widthFinal: 1100,
      heightFinal: 700,
      orientationFinal: 'Horizontal'
    };
    const sizeRequired = calculationRequiredImageSize({ maxWidth: 796, maxHeight: 1123 }, { width: 1100, height: 700 });
    expect(sizeRequired).toEqual(sizeRequiredTest);
  });

  test('it should return the same image in a vertical page', () => {
    const sizeRequiredTest = {
      widthFinal: 796,
      heightFinal: 1123,
      orientationFinal: 'Vertical'
    };
    const sizeRequired = calculationRequiredImageSize({ maxWidth: 796, maxHeight: 1123 }, { width: 796, height: 1123 });
    expect(sizeRequired).toEqual(sizeRequiredTest);
  });

  test('it should return a reduced image in a vertical page', () => {
    const sizeRequiredTest = {
      widthFinal: 796,
      heightFinal: 1084,
      orientationFinal: 'Vertical'
    };
    const sizeRequired = calculationRequiredImageSize({ maxWidth: 796, maxHeight: 1123 }, { width: 2092, height: 2848 });
    expect(sizeRequired).toEqual(sizeRequiredTest);
  });

  test('it should return a reduced image in a horizontal page', () => {
    const sizeRequiredTest = {
      widthFinal: 1084,
      heightFinal: 796,
      orientationFinal: 'Horizontal'
    };
    const sizeRequired = calculationRequiredImageSize({ maxWidth: 796, maxHeight: 1123 }, { width: 2848, height: 2092 });
    expect(sizeRequired).toEqual(sizeRequiredTest);
  });

});