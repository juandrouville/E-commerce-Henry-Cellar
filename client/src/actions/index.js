import axios from "axios";

export function getAllproducts(){
    return async (dispatch)=> {
        const res = await axios.get("http://localhost:3001/allproducts")
        const V = res.data;        
        dispatch({type: "GET_ALL_PRODUCTS", payload:V});
        
    };
}