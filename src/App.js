import React, { useState } from "react";
import { Grid } from "@mui/material";
import SongTimeline from "./components/SongTimeline";
import Sidebar from "./components/Sidebar";
import data from "./data.json";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [yearRange, setYearRange] = useState([1969, 2024]);
  const [imageSize, setImageSize] = useState(40);

  const handleYearRangeChange = (newValues) => {
    setYearRange(newValues);
    const range = newValues[1] - newValues[0];
    if (range <= 5) {
      setImageSize(200);
    } else if (range <= 10) {
      setImageSize(80);
    } else if (range <= 20) {
      setImageSize(60);
    } else if (range <= 30) {
      setImageSize(40);
    } else {
      setImageSize(24);
    }
  };

  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item xs={12} md={10}>
          <SongTimeline
            minYear={yearRange[0]}
            maxYear={yearRange[1]}
            imageSize={imageSize}
            yearRange={yearRange}
            handleYearRangeChange={handleYearRangeChange}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Sidebar />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
