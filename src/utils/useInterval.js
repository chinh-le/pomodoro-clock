import {
  useState, useEffect, useRef, useCallback,
} from 'react';

const INTERVAL_STATUS = {
  play: 'play',
  running: 'running',
  pause: 'pause',
  looping: 'looping',
  reset: 'reset',
};

export default (delay, breakLength, sessionLength) => {
  const [count, setCount] = useState(sessionLength);
  const [intervalStatus, setIntervalStatus] = useState(INTERVAL_STATUS.reset);
  const [isSession, setIsSession] = useState(true);

  const intervalRef = useRef(null);

  const pause = useCallback(
    () => {
      // console.log('pause()');
      if (intervalRef.current === null) return;

      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIntervalStatus(INTERVAL_STATUS.pause);
    },
    [],
  );

  const play = useCallback(
    () => {
      console.log(`play ${count}`);

      if (intervalRef.current !== null) return;

      let c = count;
      intervalRef.current = setInterval(() => {
        c -= 1;
        setCount(c);
        console.log(c);
        if (c === 0) {
          pause();
          setCount(isSession ? breakLength : sessionLength);
          setIsSession(!isSession);
          setIntervalStatus(INTERVAL_STATUS.looping);
        }
      }, delay);
    },
    [delay, sessionLength, breakLength, pause, isSession, count],
  );

  const reset = () => {
    pause();
    setCount(sessionLength);
    setIsSession(true);
    setIntervalStatus(INTERVAL_STATUS.reset);
  };

  useEffect(() => {
    console.log('useEffect', intervalStatus);

    if (intervalStatus !== INTERVAL_STATUS.reset
      && intervalStatus !== INTERVAL_STATUS.pause) {
      play();
    }
  }, [intervalStatus]);

  return {
    count, intervalStatus, setIntervalStatus, INTERVAL_STATUS, play, pause, reset,
  };
};
