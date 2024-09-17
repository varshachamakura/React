import React, { useState, useEffect } from 'react';
import '../css/Stopwatch.css'; // Import the CSS file

const Stopwatch = () => {
  // State variables
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false); // Is the stopwatch running?

  // Effect hook for handling the timer
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time every second
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }

    // Cleanup interval on component unmount or when isRunning changes
    return () => clearInterval(interval);
  }, [isRunning]);

  // Functions to handle button clicks
  const handlePlayPause = () => setIsRunning(!isRunning);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className={`stopwatch ${isRunning ? 'animate-border' : ''}`}>
      <h1 className="title">Stopwatch</h1>
      <div className="time-display">
        <span className="number">
          {Math.floor(time / 3600).toString().padStart(2, '0')}
        </span>
        :
        <span className="number">
          {Math.floor((time % 3600) / 60).toString().padStart(2, '0')}
        </span>
        :
        <span className="number">
          {(time % 60).toString().padStart(2, '0')}
        </span>
      </div>
      <div className="buttons">
        <button onClick={handlePlayPause} className="button">
          {isRunning ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleReset} className="button">
          &#x21bb;
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;

