export const SET_BREAK = 'SET_BREAK';
export const SET_SESSION = 'SET_SESSION';
export const RESET_CLOCK = 'RESET_CLOCK';
export const STATUS_CLOCK = {
  pause: 'pause',
  playing: 'playing',
  end: 'end',
  reset: 'reset',
  session: 'session',
  break: 'break',
};

// init state
const initState = {
  breakLength: 5,
  sessionLength: 10,
};


// actions
export const breakLengthSet = (value) => ({ type: SET_BREAK, value });
export const sessionLengthSet = (value) => ({ type: SET_SESSION, value });
export const resetClock = () => ({ type: RESET_CLOCK, initState });


// reducers
export const clockReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_BREAK:
      return { ...state, breakLength: action.value };
    case SET_SESSION:
      return { ...state, sessionLength: action.value };
    case RESET_CLOCK:
      return { ...state, ...action.initState };
    default:
      return state;
  }
};
