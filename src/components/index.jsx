import {useState} from 'react';
import './styles.css'

// useState
// useReducer for complex state

const Search = () => {


    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (event) =>{
        const value = event.target;
        // set the updated state
        setInputValue(value)
    }
    console.log(inputValue);
    
    return(
        <form className="search">
            <input name ="search" onChange={handleInputValue} value={inputValue} placeholder="search Recipes" id="search"/>
            <button type= "submit">Search</button>

        </form>
    )
}


export default Search