import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifts } from '../../src/hooks/useFetchGifts';

describe('Test in useFetchGifts', () => {
  test('should return initialstate', () => {
    const { result } =renderHook( ()=> useFetchGifts('Alex'));
    console.log(result)
    const {images, isLoading} = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
   })
  test('should return an array of images and isLoading in true', async () => {
    const { result } =renderHook( ()=> useFetchGifts('Alex'));

    await waitFor(
      () => expect( result.current.images.length).toBeGreaterThan(0),
    )
       const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
   })
});
