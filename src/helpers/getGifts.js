export const getGifts = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=sFEOcTWTQ1db9b1NpW2GzdqtsE04cTG0&q=${category}&limit=10`;
  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifts = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));
  return gifts;
};