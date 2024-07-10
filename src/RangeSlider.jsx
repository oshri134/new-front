import React, { useState } from "react";
import { DualHRangeBar, DualVRangeBar } from "dual-range-bar";

function App() {
  const [hRange, setHRange] = useState([25, 75]);
  const [vRange, setVRange] = useState([20, 80]);

  const handleHRangeChange = (newRange) => {
    setHRange(newRange);
  };

  const handleVRangeChange = (newRange) => {
    setVRange(newRange);
  };

  return (
    <div className="App">
      <h1>Dual Range Bar Demo</h1>

      <h2>Horizontal Range Bar</h2>
      <DualHRangeBar
        min={0}
        max={100}
        step={1}
        value={hRange}
        onChange={handleHRangeChange}
      />
      <p>
        Selected Range: {hRange[0]} - {hRange[1]}
      </p>

      <h2>Vertical Range Bar</h2>
      <div style={{ height: "200px" }}>
        <DualVRangeBar
          min={0}
          max={100}
          step={1}
          value={vRange}
          onChange={handleVRangeChange}
        />
      </div>
      <p>
        Selected Range: {vRange[0]} - {vRange[1]}
      </p>
    </div>
  );
}

export default App;
