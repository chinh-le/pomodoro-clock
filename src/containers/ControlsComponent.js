import React, {
  useState, useEffect,
} from 'react';
import { connect } from 'react-redux';
import useInterval from '../utils/useInterval';
import { resetClock } from '../store';


/* const clockStatus = {
  pause: 'pause',
  playing: 'playing',
  end: 'end',
  reset: 'reset',
  session: 'session',
  break: 'break',
}; */


const ControlsComponent = (props) => {
  // console.log({ ...props });
  const { breakLength, sessionLength, resetClockHandler } = { ...props };

  const {
    count, play, pause, reset,
  } = useInterval(1000, breakLength, sessionLength);

  const playHandler = () => {
    play(); // interval
  };

  const pauseHandler = () => {
    pause(); // interval
  };

  const resetHandler = () => {
    resetClockHandler(); // store
    reset(); // interval
  };

  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button type="button" onClick={playHandler}>play</button>
      <button type="button" onClick={pauseHandler}>pause</button>
      <button type="button" onClick={resetHandler}>reset</button>
    </div>
  );
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  resetClockHandler: () => dispatch(resetClock()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ControlsComponent);
