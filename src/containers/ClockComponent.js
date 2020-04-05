import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { breakLengthSet, sessionLengthSet, clockReset } from '../store';

import ControlsComponent from '../components/ControlsComponent';
import LengthComponent from '../components/LengthComponent';
import TimerComponent from '../components/TimerComponent';
import './ClockComponent.scss';


const ClockComponent = (props) => {
  console.log({ ...props });
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(null);
  const {
    breakLength, sessionLength, breakChange, sessionChange, resetClock,
  } = { ...props };
  const breakHandler = (evt) => {
    breakChange(evt.target.value);
  };
  const sessionHandler = (evt) => {
    sessionChange(evt.target.value);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const resetHandler = () => {
    resetClock();
  };
  return (
    <Container className="clock-container mx-auto" style={{ minWidth: '270px' }}>
      <h1>Pomodoro Clock</h1>
      <input type="number" onChange={breakHandler} value={breakLength} />
      <input type="number" onChange={sessionHandler} value={sessionLength} />
      <button type="button" onClick={resetHandler}>Reset</button>
      <button type="button" onClick={togglePlay}>{isPlaying ? 'pause' : 'play'}</button>
      <Row>
        <TimerComponent />
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
  breakChange: (value) => {
    dispatch(breakLengthSet(value));
  },
  sessionChange: (value) => {
    dispatch(sessionLengthSet(value));
  },
  resetClock: () => {
    dispatch(clockReset());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(ClockComponent);
