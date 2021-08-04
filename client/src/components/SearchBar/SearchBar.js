
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameProduct } from '../../actions';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [search,setSearch] = useState("");
    
    const handleInputChange = (event) =>{
        event.preventDefault();
      setSearch(event.target.value);
    }

    const handleClick = (event)=>{
        event.preventDefault();
        //dispatch(getNameProduct(product));
    }
    
    return (
        <div class="search-box">
            <input class="search-txt"
            type="search"
            placeholder="Search for products"
            onChange={(e)=> handleInputChange(e)}/>
            <button onClick={(e)=> handleClick(e)}>Find</button>
            
        </div>
        
    )
}

export default SearchBar;