import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage, getAllproducts } from "../../actions/index";

export default function Pagination() {
  var page = useSelector((state) => state.page);
  var filter = useSelector((state) => state.setPagination.filter);
  var valueFilter = useSelector((state) => state.setPagination.valueFilter);
  var dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          if (page > 0) {
            dispatch(prevPage(page - 1));
            dispatch(getAllproducts(page - 1, filter, valueFilter));
          }
        }}
      >
        prev
      </button>
      <button
        onClick={() => {
          dispatch(nextPage(page + 1));
          dispatch(getAllproducts(page + 1, filter, valueFilter));
        }}
      >
        next
      </button>
    </div>
  );
}
