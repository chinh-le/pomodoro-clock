import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import useInterval from '../utils/useInterval';
import theme from '../theme';

import ControlsComponent from './ControlsComponent';
import SessionComponent from './SessionComponent';
import BreakComponent from './BreakComponent';
import TimeComponent from '../components/TimeComponent';
import './ClockComponent.scss';


const ClockComponent = (props) => {
  // console.log({ ...props });
  const { breakLength, sessionLength } = { ...props };
  const {
    count, play, pause, reset, isSession,
  } = useInterval(1000, sessionLength, breakLength);

  // lightslategray: #778899
  // slategray: #708090

  return (
    <Container className="clock-container" style={{ width: '500px' }}>
      <Col xs={9} md={7} lg={6} xl={5} className="mx-auto my-4 rounded-lg border border-secondary pt-4 pb-3 px-2" style={{ backgroundColor: theme.componentBg }}>
        <Row className="justify-content-center" style={{ margin: '0 3rem' }}>
          <BreakComponent reset={reset} isSession={isSession} />
          <SessionComponent reset={reset} isSession={isSession} />
        </Row>
        <TimeComponent count={count} isSession={isSession} />
        <ControlsComponent play={play} pause={pause} reset={reset} />
      </Col>
    </Container>

  );
};

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(ClockComponent);
