import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialArrays } from "../redux/actions/moviesActions";

const InitialData = () => {
  const dispatch = useDispatch();
  const all = useSelector((state) => state.all);
  const array = all.map((element) => element);

  useEffect(() => {
    if (array.length === 0) {
      dispatch(initialArrays());
    }
  }, []);
};
export default InitialData;
