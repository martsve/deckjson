import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import CounterWidget from './CounterWidget';

const CW = ({ count }) => {
  const dispatch = useDispatch();

  return (
    <>
    <h1>Counter Widget</h1>
    <CounterWidget count={count} setCounter={() => dispatch({ type: "INCREMENT" })} />
    </>
  );
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(CW);
