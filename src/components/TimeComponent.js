import React, { useState, useEffect } from 'react';
import theme from '../theme';

const TimeComponent = (props) => {
  const { count, isSession } = { ...props };
  const [hrs, setHrs] = useState('00');
  const [mins, setMins] = useState('00');
  const [secs, setSecs] = useState('00');
  const [color, setColor] = useState(theme.timeColor.session);

  useEffect(() => {
    setColor(isSession ? theme.timeColor.session : theme.timeColor.break);

    let hrsTxt = Math.floor(count / 3600);
    if (hrsTxt > 0) {
      hrsTxt = hrsTxt < 10 ? '0'.concat(hrsTxt) : hrsTxt;
    } else {
      hrsTxt = '0'.concat(hrsTxt);
    }
    setHrs(hrsTxt);

    const minsTxt = Math.floor((count / 60) - (hrsTxt * 60));
    setMins(minsTxt < 10 ? '0'.concat(minsTxt) : minsTxt);

    const secsTxt = count % 60;
    setSecs(secsTxt < 10 ? '0'.concat(secsTxt) : secsTxt);

    return () => {
      // cleanup
    };
  }, [count, isSession]);

  return (
    <h1 className="text-center m-0 time-display pt-1 pb-4" style={{ fontSize: '4rem', color: `${color}` }}>
      <span className="d-inline-flex justify-content-center" style={{ width: '30%', display: 'inline-flex' }}>{hrs}</span>
      :
      <span className="d-inline-flex justify-content-center" style={{ width: '30%', display: 'inline-flex' }}>{mins}</span>
      :
      <span className="d-inline-flex justify-content-center" style={{ width: '30%', display: 'inline-flex' }}>{secs}</span>
    </h1>
  );
};

export default TimeComponent;
