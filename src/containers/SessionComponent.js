import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { InputGroup, Form } from 'react-bootstrap';

import { setSessionLength } from '../store';

const SessionComponent = (props) => {
  // console.log({ ...props });
  const {
    sessionLength, sessionLengthHandler, reset,
  } = { ...props };
  const { min, max, step } = { min: 1, max: 1440, step: 1 };
  const [mins, setMins] = useState('');
  const [inputError, setInputError] = useState('invisible');

  const sessionHandler = (evt) => {
    if (evt.target.validity.valid) {
      sessionLengthHandler(evt.target.value * 60);
      reset(true);
      setInputError('invisible');
    } else {
      setInputError('visible');
    }
  };

  useEffect(() => {
    // effect
    setMins(Math.floor(sessionLength / 60));
    return () => {
      // cleanup
    };
  }, [sessionLength]);

  //goldenrod: #daa520
  return (
    <div style={{ width: '51%' }} className="mx-1">
      <div className={`${inputError} text-danger mt-1 ml-2 text-left`} style={{ fontSize: '0.8rem' }}>1 - 1440 mins (24h)</div>
      <InputGroup>
        <Form.Control type="number" onChange={sessionHandler} value={mins} min={min} max={max} step={step} style={{ backgroundColor:'#8697a9' }} className="border-secondary" />
        <InputGroup.Append>
          <InputGroup.Text style={{ backgroundColor:'#daa520' }} className="border-secondary text-dark">Session</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  sessionLengthHandler: (length) => dispatch(setSessionLength(length)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionComponent);
