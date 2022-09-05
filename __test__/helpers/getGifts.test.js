import { getGifts } from '../../src/helpers/getGifts';

describe('Pruebas en getGifts', () => {

  test('should return an array of gifts', async()=>{
      const gifts = await getGifts('batman');
      console.log(gifts.length);
      expect(gifts.length).toBeGreaterThan( 0 );
      expect(gifts[0]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
      });
  })
 })