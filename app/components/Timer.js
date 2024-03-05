import React, { useState, useEffect } from 'react';

export default function Timer({ initialSeconds, runSubmit }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 1) {
          clearInterval(interval);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      runSubmit();
    }
  }, [seconds, runSubmit]);

  return (
    <div>
      <h1 className='text-[32px] text-white'>{seconds}s</h1>
    </div>
  );
};
