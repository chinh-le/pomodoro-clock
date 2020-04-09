import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { InputGroup, Form } from 'react-bootstrap';

import { setSessionLength } from '../store';

const SessionComponent = (props) => {
  // console.log({ ...props });
  const { min, max, step } = { min: 1, max: 1440, step: 1 };
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
    <InputGroup>
      <Form.Control type="number" onChange={sessionHandler} value={mins} min={min} max={max} step={step} />
      <InputGroup.Append>
        <InputGroup.Text id="session">Session</InputGroup.Text>
      </InputGroup.Append>
      <InputGroup.Text className={`${inputError}`}>1 - 1440 mins (24h)</InputGroup.Text>
    </InputGroup>
  );
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  sessionLengthHandler: (length) => dispatch(setSessionLength(length)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionComponent);
