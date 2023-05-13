// import { useEffect, useState } from 'react';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  /*nunca se deben de colocar ejecuciones de funciones dentro de los funcional components,
  debido a que cuando se renderiza nuevamente nuestro componente, se vuelve a ejcutar 
  la funcion y vuelve a realizar la peticion https, que es algo que no queremos*/

  //Es recomendable hacer un customHook para ahorrarse la logica y linead de codigo
  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // }

  // useEffect(() => {
  //   getImages();

  // },[])

  const { images, isLoading } = useFetchGifs(category);
  console.log({ images, isLoading });

  return (
    <>
      <h3>{category}</h3>
      {
        //operador ternario pero ocupa mucho codigo
        // isLoading ?
        // (<h2>Cargando...</h2>)
        // : null
        //Mejor hacer un if corto, and logicos
        //si isLoading esta en true regresa eso, si no pues ya no sigue
        isLoading && ((<h2>Cargando...</h2>))
      }



      <div className="card-grid">
        {/* Esto es para poder mostrar la imagenes en la pantalla
          se recorre el images del useState que es quien guarda todas las imagenes
          posteriormente se manda a llamar el id y title de las imagenes
          se pueden desestructurar estos elementos dentro del map, para así ya no declarar el image.title
          */}
        {images.map((image) => (
          // <li key={id}>{title}</li> //otra manera de mostrar el titulo
          <GifItem
            key={image.id}
            //esparcir las props
            {...image}

            //Otra forma traer la url y el titulo
            // title={image.title}
            // url={image.url}
          />
        ))}
      </div>
    </>
  );
};
