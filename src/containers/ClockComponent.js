import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import useInterval from '../utils/useInterval';

import ControlsComponent from './ControlsComponent';
import SessionComponent from './SessionComponent';
import BreakComponent from './BreakComponent';
import TimeComponent from '../components/TimeComponent';
import './ClockComponent.scss';


const ClockComponent = (props) => {
  // console.log({ ...props });
  const { breakLength, sessionLength } = { ...props };
  const {
    count, play, pause, reset,
  } = useInterval(1000, sessionLength, breakLength);


  return (
    <Container className="clock-container mx-auto" style={{ minWidth: '270px' }}>
      <h1>Pomodoro Clock</h1>
      <Row>
        <TimeComponent count={count} />
      </Row>
      <Row>
        <BreakComponent reset={reset} />
        <SessionComponent reset={reset} />
        <ControlsComponent play={play} pause={pause} reset={reset} />
      </Row>
    </Container>

  );
};

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(ClockComponent);
