import React, { useState, useEffect } from 'react';

const TimeComponent = (props) => {
  const { count } = { ...props };
  const [hrs, setHrs] = useState('00');
  const [mins, setMins] = useState('00');
  const [secs, setSecs] = useState('00');

  useEffect(() => {
    let hrsTxt = Math.floor(count / 3600);
    if (hrsTxt > 0) {
      hrsTxt = hrsTxt < 10 ? '0'.concat(hrsTxt) : hrsTxt;
    }
    setHrs(hrsTxt);

    const minsTxt = Math.floor((count / 60) - (hrsTxt * 60));
    setMins(minsTxt < 10 ? '0'.concat(minsTxt) : minsTxt);

    const secsTxt = count % 60;
    setSecs(secsTxt < 10 ? '0'.concat(secsTxt) : secsTxt);

    return () => {
      // cleanup
    };
  }, [count]);

  // goldenrod: #daa520
  return (
    <h1 className="text-center m-0 time-display" style={{ fontSize: '4rem', padding: '3rem 0', color: 'goldenrod' }}>{`${hrs} : ${mins} : ${secs}`}</h1>
  );
};

export default TimeComponent;
