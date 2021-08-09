import React, {useEffect} from 'react'
import {getAllproducts, sortByPrecio, filtroCategoria, filtroBodega, ASC, DESC} from '../../actions/countriesActions';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './Filtros.css';

export const Filtros = (props) => {
    console.log(props)
    const handleChangeCategory = (e) => {
        console.log(e.target.value)
        if(e.target.value === 'All'){
            props.getAllproducts();
        } else {
            props.filtroCategoria(e.target.value)
        }
    }
    const handleChangeBodega = (e) => {
        console.log(e.target.value)
        if(e.target.value === 'All'){
            props.getAllproducts();
        } else {
            props.filtroBodega(e.target.value)
        }
    }
    const handleChangePrecio = (e) => {
        if(e.target.value === 'Select'){
            props.getAllproducts();
        }
        if (e.target.value === ASC || e.target.value === DESC) {
            props.sortByPrecio(e.target.value)
        }
    }

  
    return (
        <div className='sideBar'>
            <ul className='ulFilters'>
                <li className='filters'>
                    Filter by Continent
                    <select className='hide' onChange={(e) => handleChangeCategory(e)}>
                        <option className='filter'>All</option>
                    </select>
                </li>
                <li className='filters'>
                    Population Sort
                    <select className='hide' onChange={(e) => handleChangePrecio(e)}>
                        <option className='filter'>Select</option>
                        <option className='filter'>Ascendant</option>
                        <option className='filter'>Descendant</option>
                    </select>
                </li>
                <li className='filters'>
                    Area Sort
                    <select className='hide' onChange={(e) => handleChangeBodega(e)}>
                        <option className='filter'>All</option>

                    </select>
                </li>
            </ul>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        getAllproducts: state.countries,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllproducts: () => {
            dispatch(getAllproducts())
        },
        filtroCategoria: (categoria) => {
            dispatch(filtroCategoria(categoria))
        },
        sortByPrecio: (a, b) => {
            dispatch(sortByPrecio(a, b))
        },
        filtroBodega: (bodega) => {
            dispatch(filtroBodega(bodega))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtros)