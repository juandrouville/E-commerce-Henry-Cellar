import React, {useEffect} from 'react'
import {getAllproducts, sortByPrecio, filtroCategoria, filtroBodega, ASC, DESC} from "../../actions/index"
import { Link } from 'react-router-dom';
import { useDispatch  } from 'react-redux';

export const Filtros = () => {
    
    var dispatch = useDispatch();
    const handleChangeCategory = (e) => {
        console.log(e.target.value)
        if(e.target.value === 'All'){
            dispatch(getAllproducts());
        } else {
           dispatch(filtroCategoria(e.target.value));
        }
    }
    const handleChangeBodega = (e) => {
        console.log(e.target.value)
        if(e.target.value === 'All'){
            dispatch(getAllproducts());
        } else {
            dispatch(filtroBodega(e.target.value));
        }
    }
    const handleChangePrecio = (e) => {
        if(e.target.value === 'Select'){
            dispatch(getAllproducts());
        }
        if (e.target.value === ASC || e.target.value === DESC) {
            dispatch(sortByPrecio(e.target.value))
        }
    }

  
    return (
        <div className='sideBar'>
            <ul className='ulFilters'>
                <li className='filters'>
                    Filter by Category
                    <select className='hide' onChange={(e) => handleChangeCategory(e)}>
                        <option className='filter'>All</option>
                        <option className='filter'>Wine</option>
                        <option className='filter'>Tinto</option>
                        <option className='filter'>Merlot</option>
                        <option className='filter'>Blanco</option>
                        <option className='filter'>Chardonnay</option>
                        <option className='filter'>Torrontes</option>
                        <option className='filter'>Blend</option>
                        <option className='filter'>Rosado</option>
                        <option className='filter'>Syrah</option>
                        <option className='filter'>accessories</option>
                    </select>
                </li>
                <li className='filters'>
                    Filter By price
                    <select className='hide' onChange={(e) => handleChangePrecio(e)}>
                        <option className='filter'>Select</option>
                        <option className='filter'>Ascendant</option>
                        <option className='filter'>Descendant</option>
                    </select>
                </li>
                <li className='filters'>
                    Filter by Wineries
                    <select className='hide' onChange={(e) => handleChangeBodega(e)}>
                        <option className='filter'>All</option>

                    </select>
                </li>
            </ul>
    </div>
    )
}





export default Filtros;