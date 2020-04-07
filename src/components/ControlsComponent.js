import React, {
  useState, useEffect,
} from 'react';
import { clockStatus, useInterval } from '../helpers';


const ControlsComponent = (props) => {
  console.log({ ...props });

  const [isSession, setIsSession] = useState(true);
  const {
    count, status, setStatus, play, pause,
  } = useInterval(1000);

  useEffect(() => {
    console.log(status);

    // loop session/break
    if (status === clockStatus.end) {
      play(isSession ? 5 : 10);
      setIsSession(!isSession);
    }
  }, [status, isSession, play]);

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
