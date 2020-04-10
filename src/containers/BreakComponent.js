import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { InputGroup, Form } from 'react-bootstrap';

import { setBreakLength } from '../store';
import theme from '../theme';

const BreakComponent = (props) => {
  const { min, max, step } = { min: 1, max: 60, step: 1 };
  const {
    breakLength, breakLengthHandler, change, isSession,
  } = { ...props };
  const [mins, setMins] = useState('');
  const [inputError, setInputError] = useState('invisible');
  const [bgColor, setBgColor] = useState(theme.break.labelBg.off);

  const breakHandler = (evt) => {
    evt.persist();
    if (evt.target.validity.valid) {
      breakLengthHandler(evt.target.value * 60);
      change();
      setInputError('invisible');
    } else {
      setInputError('visible');
    }
  };

  useEffect(() => {
    setBgColor(!isSession ? theme.break.labelBg.on : theme.break.labelBg.off);
    setMins(breakLength / 60);
    return () => {
      // cleanup
    };
  }, [breakLength, isSession]);

  return (
    <div style={{ width: '33%' }} className="mx-1">
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text className="border-secondary text-dark" style={{ backgroundColor: `${bgColor}` }}>Break</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="number" onChange={breakHandler} value={mins} min={min} max={max} step={step} style={{ backgroundColor: theme.break.inputBg }} className="border-secondary" />
      </InputGroup>
      <div className={`${inputError} text-danger mt-1 mr-2 text-right`}>1 - 60 mins</div>
    </div>
  );
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  breakLengthHandler: (length) => dispatch(setBreakLength(length)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BreakComponent);
