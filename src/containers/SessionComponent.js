import React from 'react';
import { connect } from 'react-redux';
import { setSessionLength } from '../store';

const SessionComponent = (props) => {
  // console.log({ ...props });
  const {
    sessionLength, sessionLengthHandler, reset,
  } = { ...props };

  const sessionHandler = (evt) => {
    sessionLengthHandler(evt.target.value);
    reset(true);
  };

  return (
    <div>
      <p>{`session: ${sessionLength}`}</p>
      <input type="number" onChange={sessionHandler} value={sessionLength} />
    </div>
  );
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  sessionLengthHandler: (length) => dispatch(setSessionLength(length)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionComponent);
