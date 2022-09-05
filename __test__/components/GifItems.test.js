import { render, screen } from '@testing-library/react';
import { GiftItem } from '../../src/components';

describe('Pruebas en <GifItem.jsx/>', () => {
   const title = 'Alex';
   const url = 'http://google.com/';

   test('should match with snapshopt', () => {
      const { container } =render( <GiftItem title={title} url={url}/>)
      expect (container).toMatchSnapshot();
   })

   test('should sohow the url image and the alt attributte', () => {
      render( <GiftItem title={title} url={url}/>)
      // screen.debug();
      const {src, alt} = screen.getByRole('img');
      console.log(url);
      expect( src ).toBe(url)
      expect( alt ).toBe(title)
   })

   test('should show title in component', () => {
    render(<GiftItem title={title} url={url} />);
    expect( screen.getByText(title)).toBeTruthy();
   })

});
