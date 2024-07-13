import React, { useState } from "react";
import { Grid, Container } from "@mui/material";
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
    const isFullRange = newValues[0] === 1969 && newValues[1] === 2024;
    setImageSize(isFullRange ? 24 : 40);
  };

  const totalAlbums = data.songs.length;

  return (
    <>
      <NavBar minYear={yearRange[0]} maxYear={yearRange[1]} />
      <>
        <Grid container>
          <Grid item xs={12} md={10}>
            <SongTimeline
              minYear={yearRange[0]}
              maxYear={yearRange[1]}
              imageSize={imageSize}
              yearRange={yearRange}
              handleYearRangeChange={handleYearRangeChange}
              totalAlbums={totalAlbums}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Sidebar />
          </Grid>
        </Grid>
      </>
    </>
  );
}

export default App;
