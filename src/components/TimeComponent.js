import React from 'react';

const TimeComponent = (props) => {
  const { count } = { ...props };
  return (
    <div>{count}</div>
  );
};

export default TimeComponent;
