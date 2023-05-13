import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    //tambien se puede desectructurar el target del event y ya no se necesita nada mas .target.value
    //Si se hace de esa manera la funcion del onChange solo se le pasa la referencia de donde se obtien el valor
    const onInputChange= ({target}) =>{
        // console.log(target.value);
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length<=1)return;


        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(onInputChange)}
            />
        </form>
    )
}
