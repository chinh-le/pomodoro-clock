import { useState, useRef, useCallback } from 'react';

export default (delay, clockStatus) => {
  const [count, setCount] = useState(10);
  const [status, setStatus] = useState(clockStatus.reset);

  const intervalRef = useRef(null);

  const pause = useCallback(
    () => {
      console.log('pause()');
      if (intervalRef.current === null) return;

      clearInterval(intervalRef.current);
      intervalRef.current = null;
    },
    [],
  );

  const play = useCallback(
    (counter) => {
      console.log('play()');

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
    [delay, pause, clockStatus],
  );

  return {
    count, status, setStatus, play, pause,
  };
};
