import React, { useMemo, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import RangeSlider from "./RangeSlider";
import data from "./data.json";
import "./SongTimeline.css";

const defaultImageUrl =
  "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png";

const SongTimeline = ({
  minYear,
  maxYear,
  yearRange,
  handleYearRangeChange,
  imageSize,
}) => {
  const [spaceGrid, setSpaceGrid] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const songTimelineRef = useRef(null);
  const scrollStep = 10;
  const scrollThreshold = 50;

  useEffect(() => {
    const range = yearRange[1] - yearRange[0];
    if (range <= 5) {
      setSpaceGrid(30);
    } else if (range <= 10) {
      setSpaceGrid(20);
    } else if (range <= 20) {
      setSpaceGrid(10);
    } else if (range <= 30) {
      setSpaceGrid(20);
    } else {
      setSpaceGrid(10);
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

  const numOfYears = maxYear - minYear + 1;
  const gridWidth = numOfYears * (imageSize + spaceGrid);

  const handleMouseMove = (e) => {
    const boundingRect = e.currentTarget.getBoundingClientRect();
    const relativeMouseX =
      e.clientX - boundingRect.left + songTimelineRef.current.scrollLeft;
    setMouseX(relativeMouseX);

    if (e.clientX < boundingRect.left + scrollThreshold) {
      songTimelineRef.current.scrollLeft -= scrollStep;
    } else if (e.clientX > boundingRect.right - scrollThreshold) {
      songTimelineRef.current.scrollLeft += scrollStep;
    }
  };

  return (
    <div
      className="song-timeline-wrapper"
      onMouseMove={handleMouseMove}
      ref={songTimelineRef}
    >
      <div
        className="song-timeline grid-background"
        style={{
          width: `${gridWidth}px`,
          backgroundSize: `${imageSize + 10}px ${imageSize + 10}px`,
        }}
      >
        <div className="years-labels">
          {Array.from({ length: numOfYears }, (_, index) => (
            <div
              key={index}
              className="year-label"
              style={{ width: `${imageSize + spaceGrid}px` }}
            >
              {minYear + index}
            </div>
          ))}
        </div>
        <div className="mouse-line" style={{ left: `${mouseX}px` }} />
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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src={song["Image URL"] || defaultImageUrl}
      alt={song.name}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
    />
  </div>
);

SongTimeline.propTypes = {
  minYear: PropTypes.number.isRequired,
  maxYear: PropTypes.number.isRequired,
  yearRange: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleYearRangeChange: PropTypes.func.isRequired,
  imageSize: PropTypes.number.isRequired,
};

export default SongTimeline;
