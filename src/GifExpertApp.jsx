//Se debe de importar el hook que vamos a utilizar
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
//Lo estamos inicializando como un arreglo con el valor predeterminado de OnePunch
    const [categories, setCategories] = useState(['OnePunch']);
    const onAddCategory = (newCategory) => {
        // categories.push('SNk'); no se utiliza push, debido a que es mas utilizado para mutaciones de objetos
        //por lo que se debe crear un nuevo estado, un nuevo arreglo para ello se utiliza setCategories
        
        // categories.push(newCategory);
        if (categories.includes(newCategory))return;
        
        setCategories([newCategory,...categories]); 
        // setCategories(cat => [...cat,'SNK']); Otra forma de agregar el elemento

    }
    return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory
            //  setCategories={setCategories}
            onNewCategory = {(value) => onAddCategory(value)}
            // currentCategories={categories}
        />
        
        {/* Listado de Gifs  */}
{/*        <ol>
{EL map me permite recorrer todo el arreglo y traer los elementos de cada uno como si fuera uno nuevo arreglo}
            {categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category}/>      
                
                ))
            }
            {<li>ABC</li> }
        </ol>
            {Gif Item} 
*/}
        {categories.map((category) => (
                <GifGrid 
                    key={category} 
                    category={category}/>      
            
            ))
        }




    </>
  )
}
