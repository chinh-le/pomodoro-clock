import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSessionLength } from '../store';

const SessionComponent = (props) => {
  // console.log({ ...props });
  const { min, max, step } = { min: 1, max: 1440, step: 5 };
  const {
    sessionLength, sessionLengthHandler, reset,
  } = { ...props };
  const [mins, setMins] = useState('');
  const [inputError, setInputError] = useState('d-none');

  const sessionHandler = (evt) => {
    if (evt.target.validity.valid) {
      sessionLengthHandler(evt.target.value * 60);
      reset(true);
      setInputError('d-none');
    } else {
      setInputError('d-block');
    }
  };

  useEffect(() => {
    // effect
    setMins(Math.floor(sessionLength / 60));
    return () => {
      // cleanup
    };
  }, [sessionLength]);

  return (
    <div>
      <p>{`session: ${mins}`}</p>
      <input type="number" onChange={sessionHandler} value={mins} min={min} max={max} step={step} />
      <span className={inputError}>by 5 / min 1 /max 1440 minutes (24 hours)</span>
    </div>
  );
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  sessionLengthHandler: (length) => dispatch(setSessionLength(length)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionComponent);
