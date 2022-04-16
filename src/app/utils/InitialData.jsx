import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInitialPage, initialArrays } from "../redux/actions/moviesActions";

const InitialData = () => {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.page);
  const all = useSelector((state) => state.all);
  const array = all.map((element) => element);

  const getCurrentPage = () => {
    if (page === "") {
      const location = useLocation();
      const path = location.pathname;
      dispatch(getInitialPage(path));
    }
  };
  getCurrentPage();

  useEffect(() => {
    if (array.length === 0) {
      dispatch(initialArrays());
    }
  }, []);
};
export default InitialData;
