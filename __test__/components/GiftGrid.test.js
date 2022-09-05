import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifts } from '../../src/hooks/useFetchGifts';

jest.mock('../../src/hooks/useFetchGifts');
const gifts = [
  {
    id: '123',
    title: 'Alex',
    url: 'https://localhost:3000',
  },
  {
    id: '456',
    title: 'Goku',
    url: 'https://localhost:3000',
  },
];

useFetchGifts.mockReturnValue({
  images: [],
  isLoading: true,
});

describe('Test in <GiftGrid/>', () => {
  const category = "Lord of rings"
  test('should show loading initialy', () => {
    render(<GifGrid category={category}/>);
    // screen.debug();
    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
   })

   test('should disply images when trigger useFetch', () => {

    useFetchGifts.mockReturnValue({
      images: gifts,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    screen.debug();
   expect(screen.getAllByRole('img').length).toBe(2)
    })
});
