
import { GiftItem } from './GiftItem.jsx';
import { useFetchGifts } from '../hooks/useFetchGifts.js';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifts(category);
      return (
        <>
          <h3>{category}</h3>
          {isLoading && (<h2>Cargando...</h2>)}
          <div className='card-grid'>
            {images.map((img) => (
              <GiftItem key={img.id} {...img} />
            ))}
          </div>
        </>
      );
};
