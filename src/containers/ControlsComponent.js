import React from 'react';
import { connect } from 'react-redux';
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
    <div>
      <button type="button" onClick={playHandler}>play</button>
      <button type="button" onClick={pauseHandler}>pause</button>
      <button type="button" onClick={resetHandler}>reset</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sessionLength: state.sessionLength,
});

const mapDispatchToProps = (dispatch) => ({
  resetClockHandler: () => (dispatch(resetClock())),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlsComponent);
