import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { InputGroup, Form } from 'react-bootstrap';
import { setSessionLength } from '../store';
import theme from '../theme';

const SessionComponent = (props) => {
  const {
    sessionLength, sessionLengthHandler, change, isSession,
  } = { ...props };
  const { min, max, step } = { min: 1, max: 1440, step: 1 };
  const [mins, setMins] = useState('');
  const [inputError, setInputError] = useState('invisible');
  const [bgColor, setBgColor] = useState(theme.session.labelBg.on);

  const sessionHandler = (evt) => {
    if (evt.target.validity.valid) {
      sessionLengthHandler(evt.target.value * 60);
      change();
      setInputError('invisible');
    } else {
      setInputError('visible');
    }
  };

  useEffect(() => {
    setBgColor(isSession ? theme.session.labelBg.on : theme.session.labelBg.off);
    setMins(Math.floor(sessionLength / 60));
    return () => {
      // cleanup
    };
  }, [sessionLength, isSession]);

  return (
    <div style={{ width: '41%' }} className="mx-1">
      <InputGroup>
        <Form.Control type="number" onChange={sessionHandler} value={mins} min={min} max={max} step={step} style={{ backgroundColor: theme.session.inputBg }} className="border-secondary" />
        <InputGroup.Append>
          <InputGroup.Text style={{ backgroundColor: `${bgColor}` }} className="border-secondary text-dark">Session</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <div className={`${inputError} text-danger mt-1 ml-2 text-left`}>1 - 1440 mins (24h)</div>
    </div>
  );
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  sessionLengthHandler: (length) => dispatch(setSessionLength(length)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionComponent);
