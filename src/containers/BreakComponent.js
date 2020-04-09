import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setBreakLength } from '../store';

const BreakComponent = (props) => {
  // console.log({ ...props });
  const { min, max, step } = { min: 1, max: 60, step: 1 };
  const {
    breakLength, breakLengthHandler, reset,
  } = { ...props };
  const [mins, setMins] = useState('');
  const [inputError, setInputError] = useState('d-none');

  const breakHandler = (evt) => {
    evt.persist();
    if (evt.target.validity.valid) {
      breakLengthHandler(evt.target.value * 60);
      reset();
      setInputError('d-none');
    } else {
      setInputError('d-block');
    }
  };

  useEffect(() => {
    // effect
    setMins(breakLength / 60);
    return () => {
      // cleanup
    };
  }, [breakLength]);

  return (
    <div>
      <p>{`break: ${mins}`}</p>
      <input type="number" onChange={breakHandler} value={mins} min={min} max={max} step={step} />
      <span className={inputError}>min 1 / max 60 minutes</span>
    </div>
  );
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  breakLengthHandler: (length) => dispatch(setBreakLength(length)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BreakComponent);
