import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const title = 'Gif Expert';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((categories) => [...categories, newCategory]);
  }

  return (
    <>
      <h1>{title}</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
