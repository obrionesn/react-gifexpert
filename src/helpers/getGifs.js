export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vmPhH593ihn3Bl1P8HglByXiIggVXnaR&q=${category}&limit=10`;
    const resp = await fetch ( url );
    const { data } = await resp.json();
    //se puede usar el map, porque data es un arreglo de objetos
    const gifs = data.map(img => ({
      //dentro se desesctructuran los atributos que queremos del objeto
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
  };
  