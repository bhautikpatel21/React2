import React, { useState, useRef, useEffect } from 'react';

const UseRef2 = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1); 
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setElapsedTime(0);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <h1>Timer: {elapsedTime} seconds</h1>
      <button onClick={startTimer}>Start</button><br />
      <button onClick={stopTimer}>Stop</button><br />
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default UseRef2;
