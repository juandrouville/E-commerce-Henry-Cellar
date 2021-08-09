import react from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage, getAllproducts } from "../../actions/index"

export default function Pagination() {
    var page = useSelector((state) => state.page);
    var dispatch = useDispatch();


    return (
        <div>
            <button onClick={() => {
                if (page > 0) {
                    {
                        dispatch(prevPage(page - 1))
                        dispatch(getAllproducts(page - 1))
                    }
                }
            }
            }>prev</button>
            <button onClicl={() => {
                dispatch(nextPage(page + 1))
                dispatch(getAllproducts(page - +1))
            }
            }>next</button>
        </div>
    )
}