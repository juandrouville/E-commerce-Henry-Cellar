import React, { useEffect} from "react";
import { connect } from "react-redux";
import {getAllproducts} from "../../actions/index";
import Product from "../product/Product";


function AllProducts({ products, GetProducts}) {
  
    useEffect(() => {
        GetProducts();
    }, [])

 
    return (
      <div>
        <div >
  
  
          {products ?
            products.map(p => {
              return (
                <div>
                  <Product
                    name={p.name}
                    image={p.image}
                    price={p.price}
                  />
                </div>)
            })
            : <p>Cargando...</p>
          }
        </div>
  
        
      </div>
    );
  }
  
  
  function mapStateToProps(state) {
    return {
      products: state.getAllProducts,
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      GetProducts: () => dispatch(getAllproducts()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);