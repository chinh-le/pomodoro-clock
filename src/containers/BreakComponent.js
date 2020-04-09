import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { InputGroup, Form, Row } from 'react-bootstrap';

import { setBreakLength } from '../store';

const BreakComponent = (props) => {
  // console.log({ ...props });
  const { min, max, step } = { min: 1, max: 60, step: 1 };
  const {
    breakLength, breakLengthHandler, reset,
  } = { ...props };
  const [mins, setMins] = useState('');
  const [inputError, setInputError] = useState('invisible');

  const breakHandler = (evt) => {
    evt.persist();
    if (evt.target.validity.valid) {
      breakLengthHandler(evt.target.value * 60);
      reset();
      setInputError('invisible');
    } else {
      setInputError('visible');
    }
  };

  useEffect(() => {
    // effect
    setMins(breakLength / 60);
    return () => {
      // cleanup
    };
  }, [breakLength]);

  
  //cornsilk: #fff8dc
  return (
    <div style={{ width: '43%' }} className="mx-1">
      <div className={`${inputError} text-danger mt-1 mr-2 text-right`} style={{ fontSize: '0.8rem' }}>1 - 60 mins</div>
      <InputGroup>
        <InputGroup.Prepend>
          {/* <InputGroup.Text className="bg-transparent border-secondary text-dark">Break</InputGroup.Text> */}
          <InputGroup.Text className="border-secondary text-dark" style={{backgroundColor:'#fff8dc'}}>Break</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="number" onChange={breakHandler} value={mins} min={min} max={max} step={step} style={{ backgroundColor:'#8697a9' }}className="border-secondary" />
      </InputGroup>
    </div>
  );
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  breakLengthHandler: (length) => dispatch(setBreakLength(length)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BreakComponent);
