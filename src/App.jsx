import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  const ResetFunc = () => {
    setTime(0);
    setStart(false);
  };
  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
  }, [start]);
  return (
    <div className="App">
      <h1>stopwatch</h1>
      <h1>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 1000)).slice(-2)}</span>
      </h1>
      <div>
        <button onClick={() => setStart(true)}>start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button onClick={ResetFunc}>Reset</button>
      </div>
    </div>
  );
}

export default App;
