import React from 'react';
import { useDispatch } from "react-redux";

const Configuration = (props) => {
  const dispatch = useDispatch();

  function reset() {
    dispatch({ type: "RESET" });
    props.history.push('/');
  }

  return (<>
    <div className="Main">
    <h1>Configuration</h1>
    <button onClick={reset}>
      Reset localstorage
    </button>
    </div>
  </>);
}

export default Configuration;