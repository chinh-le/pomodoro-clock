import React from 'react';
import { connect } from 'react-redux';
import { setBreakLength } from '../store';

const BreakComponent = (props) => {
  // console.log({ ...props });
  const {
    breakLength, breakLengthHandler, reset,
  } = { ...props };

  const breakHandler = (evt) => {
    breakLengthHandler(evt.target.value);
    reset();
  };

  return (
    <div>
      <p>{`break: ${breakLength}`}</p>
      <input type="number" onChange={breakHandler} value={breakLength} />
    </div>
  );
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  breakLengthHandler: (length) => dispatch(setBreakLength(length)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BreakComponent);
