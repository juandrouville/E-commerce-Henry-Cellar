import axios from "axios";
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const SORT_BY_PRECIO = 'SORT_BY_PRECIO';
export const FILTRO_BODEGA = 'FILTRO_BODEGA';
export const FILTRO_CATEGORIA = 'FILTRO_CATEGORIA';
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";
export const ASC = 'Ascendant';
export const DESC = 'Descendant';

export function getAllproducts() {
	return async (dispatch) => {
		const res = await axios.get("http://localhost:3001/allproducts")
		const V = res.data;
		dispatch({ type: GET_ALL_PRODUCTS, payload: V });

	};
}
export function sortByPrecio(order) {
	return function (dispatch) {
		axios.get(`"http://localhost:3001/allproducts?order=${order}`)
			.then(res => {

				dispatch({ type: GET_ALL_PRODUCTS, payload: res.data })
			})
	}
}
export function filtroCategoria(categoria) {
	return function (dispatch) {
		axios.get(`"http://localhost:3001/allproducts?order=${categoria}`)
			.then(res => {

				dispatch({ type: GET_ALL_PRODUCTS, payload: res.data })
			})
	}
}
export function filtroBodega(bodega) {
	return function (dispatch) {
		axios.get(`"http://localhost:3001/allproducts?order=${bodega}`)
			.then(res => {

				dispatch({ type: GET_ALL_PRODUCTS, payload: res.data })
			})
	}
}
export function getProductDetail(id) {
	return async (dispatch) => {
		const res = await axios.get("http://localhost:3001/product/" + id)
		const V = res.data;
		dispatch({ type: PRODUCT_DETAIL, payload: V });

	};
}
export function clearProductDetail() {
	return {
		type: PRODUCT_DETAIL,
		payload: undefined,
	};
};