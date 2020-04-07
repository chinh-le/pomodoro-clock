import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { breakLengthSet, sessionLengthSet, clockReset } from '../store';

import ControlsComponent from './ControlsComponent';
import LengthComponent from '../components/LengthComponent';
import TimeComponent from '../components/TimeComponent';
import './ClockComponent.scss';


const ClockComponent = (props) => {
  // console.log({ ...props });
  const {
    breakLength, sessionLength,
  } = { ...props };


  /* const resetHandler = () => {
    resetClock();
  }; */
  return (
    <Container className="clock-container mx-auto" style={{ minWidth: '270px' }}>
      <h1>Pomodoro Clock</h1>
      {/* <input type="number" onChange={breakHandler} value={breakLength} /> */}
      {/* <input type="number" onChange={sessionHandler} value={sessionLength} /> */}
      {/* <button type="button" onClick={resetHandler}>Reset</button> */}
      {/* <button type="button" onClick={togglePlay}>{isPlaying ? 'pause' : 'play'}</button> */}
      <Row>
        <TimeComponent />
      </Row>
      <Row>
        <LengthComponent />
        <ControlsComponent />
        <LengthComponent />
      </Row>
    </Container>

  );
};


const mapStateToProps = (state) => (state);


const mapDispatchToProps = (dispatch) => ({
//   breakChange: (value) => {
  // dispatch(breakLengthSet(value));
//   },
//   sessionChange: (value) => {
  // dispatch(sessionLengthSet(value));
//   },
  /* resetClock: () => {
    dispatch(clockReset());
  }, */
});


export default connect(mapStateToProps, mapDispatchToProps)(ClockComponent);