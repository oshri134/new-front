import React, { useMemo, useEffect, useState } from "react";
import RangeSlider from "./RangeSlider";
import data from "./data.json";

const defaultImageUrl =
  "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png";

const SongTimeline = ({
  minYear,
  maxYear,
  yearRange,
  handleYearRangeChange,
  totalAlbums,
}) => {
  const [imageSize, setImageSize] = useState(40);
  const [spaceGrid, setSpaceGrid] = useState(0);

  useEffect(() => {
    const range = yearRange[1] - yearRange[0];
    if (range <= 5) {
      setImageSize(100);
      setSpaceGrid(30);
    } else if (range <= 10) {
      setImageSize(80);
      setSpaceGrid(20);
    } else if (range <= 20) {
      setImageSize(60);
      setSpaceGrid(10);
    } else if (range <= 30) {
      setImageSize(40);
      setSpaceGrid(20);
    } else {
      setSpaceGrid(20);
      setImageSize(24);
    }
  }, [yearRange]);

  const songsByYear = useMemo(() => {
    return data.songs
      .filter((song) => song.year >= minYear && song.year <= maxYear)
      .reduce((acc, song) => {
        if (!acc[song.year]) {
          acc[song.year] = [];
        }
        acc[song.year].push(song);
        return acc;
      }, {});
  }, [minYear, maxYear]);

  const numOfYears = maxYear - minYear + 1; // Number of years in the selected range
  const gridWidth = numOfYears * (imageSize + spaceGrid); // Calculating width according to years
  console.log(data.songs.length);
  return (
    <div className="song-timeline-wrapper">
      <div
        className="song-timeline grid-background"
        style={{
          width: `${gridWidth}px`,

          backgroundSize: `${imageSize + 10}px ${imageSize + 10}px`,
        }}
      >
        <div className="year-group">
          {Object.entries(songsByYear).map(([year, songs]) => (
            <YearColumn key={year} songs={songs} imageSize={imageSize} />
          ))}
        </div>
      </div>
      <div className="slider-container">
        <RangeSlider
          values={yearRange}
          setValues={handleYearRangeChange}
          totalAlbums={totalAlbums}
          imageSize={imageSize}
        />
      </div>
    </div>
  );
};

const YearColumn = ({ songs, imageSize }) => (
  <div className="year-column">
    <div className="year-songs">
      {songs.map((song, index) => (
        <SongItem key={index} song={song} imageSize={imageSize} />
      ))}
    </div>
  </div>
);

const SongItem = ({ song, imageSize }) => (
  <div
    className="song-item"
    style={{
      width: `${imageSize}px`,
      height: `${imageSize}px`,
    }}
  >
    <img
      src={song["Image URL"] || defaultImageUrl}
      alt={song.name}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
);

export default SongTimeline;
