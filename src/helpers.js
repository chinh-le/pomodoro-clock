import { useState, useRef, useCallback } from 'react';

export const clockStatus = {
  pause: 'pause',
  playing: 'playing',
  end: 'end',
  reset: 'reset',
  session: 'session',
  break: 'break',
};

export const useInterval = (delay) => {
  const [count, setCount] = useState(10);
  const [status, setStatus] = useState(clockStatus.reset);

  const intervalRef = useRef(null);

  const pause = useCallback(
    () => {
      if (intervalRef.current === null) return;

      clearInterval(intervalRef.current);
      intervalRef.current = null;
    },
    [],
  );

  const play = useCallback(
    (counter) => {
      if (intervalRef.current !== null) return;

      setStatus(clockStatus.playing);
      let c = counter;
      intervalRef.current = setInterval(() => {
        c -= 1;
        setCount(c);
        if (c === 0) {
          pause();
          setStatus(clockStatus.end);
        }
      }, delay);
    },
    [delay, pause],
  );

  return {
    count, status, setStatus, play, pause,
  };
};
