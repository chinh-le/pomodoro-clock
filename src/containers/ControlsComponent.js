import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'react-bootstrap';
import { PlayArrow, Pause, Autorenew } from '@material-ui/icons';


import { resetClock } from '../store';


const ControlsComponent = (props) => {
  // console.log({ ...props });
  const {
    resetClockHandler, play, pause, reset,
  } = { ...props };

  const playHandler = () => {
    play(); // interval
  };

  const pauseHandler = () => {
    pause(); // interval
  };

  const resetHandler = () => {
    resetClockHandler(); // store
    reset(true); // interval
  };

  return (
    <ButtonGroup size="sm" className="d-flex justify-content-center mb-2">
      <Button onClick={pauseHandler} variant="link">
        <Pause color="action" aria-label="pause" />
      </Button>
      <Button onClick={playHandler} variant="link">
        <PlayArrow color="action" aria-label="play" />
      </Button>
      <Button onClick={resetHandler} variant="link">
        <Autorenew color="action" aria-label="reset" />
      </Button>
    </ButtonGroup>
  );
};

const mapStateToProps = (state) => ({
  sessionLength: state.sessionLength,
});

const mapDispatchToProps = (dispatch) => ({
  resetClockHandler: () => (dispatch(resetClock())),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlsComponent);
