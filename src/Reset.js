import React, { useEffect  } from 'react';
import { useDispatch } from "react-redux";
import { Redirect } from "react-router"

const Reset = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "RESET" });
  });

  return <Redirect to="/" />;
}

export default Reset;