import React, {
  useState, useEffect,
} from 'react';
import useInterval from '../utils/useInterval';


const clockStatus = {
  pause: 'pause',
  playing: 'playing',
  end: 'end',
  reset: 'reset',
  session: 'session',
  break: 'break',
};

const ControlsComponent = (props) => {
  console.log({ ...props });

  const [isSession, setIsSession] = useState(true);
  const {
    count, status, setStatus, play, pause,
  } = useInterval(1000, clockStatus);

  useEffect(() => {
    console.log(status);

    // loop session/break
    if (status === clockStatus.end) {
      play(isSession ? 5 : 10);
      setIsSession(!isSession);
    }

    // todo: cleanup
    /* return () => {
      pause();
    }; */
  }, [status, isSession, play, pause]);

  const playHandler = () => {
    play(count);
  };

  const pauseHandler = () => {
    pause();
    setStatus(clockStatus.pause);
  };

  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button type="button" onClick={playHandler}>play</button>
      <button type="button" onClick={pauseHandler}>pause</button>
    </div>
  );
};


export default ControlsComponent;
