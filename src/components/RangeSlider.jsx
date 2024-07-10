import React, { useEffect, useRef, useCallback, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import "./RangeSlider.css";

const STEP = 1;
const MIN = 1969;
const MAX = 2024;
const ZOOM_SENSITIVITY = 0.001;

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const RangeSlider = ({ values, setValues, totalAlbums, imageSize }) => {
  const sliderRef = useRef();
  const [localValues, setLocalValues] = useState(values);

  const handleWheel = useCallback(
    (event) => {
      event.preventDefault();
      const [min, max] = localValues;
      const range = max - min;
      const center = Math.round((min + max) / 2);

      const zoomFactor = 1 + event.deltaY * ZOOM_SENSITIVITY;

      let newMin = Math.round(center - (center - min) * zoomFactor);
      let newMax = Math.round(center + (max - center) * zoomFactor);

      newMin = Math.max(MIN, newMin);
      newMax = Math.min(MAX, newMax);

      if (newMax - newMin < 2) {
        if (event.deltaY > 0) {
          newMax = Math.min(MAX, newMin + 2);
        } else {
          newMin = Math.max(MIN, newMax - 2);
        }
      }

      setLocalValues([newMin, newMax]);
    },
    [localValues]
  );

  const debouncedSetValues = useCallback(
    debounce((newValues) => setValues(newValues), 100),
    [setValues]
  );

  useEffect(() => {
    debouncedSetValues(localValues);
  }, [localValues, debouncedSetValues]);

  useEffect(() => {
    const slider = sliderRef.current;
    const debouncedHandleWheel = debounce(handleWheel, 16);

    slider.addEventListener("wheel", debouncedHandleWheel, { passive: false });

    return () => {
      slider.removeEventListener("wheel", debouncedHandleWheel);
    };
  }, [handleWheel]);

  if (!localValues || localValues.length < 2) {
    return null;
  }

  const numberOfYears = localValues[1] - localValues[0] + 1;

  console.log(numberOfYears);
  const gridWidth = numberOfYears * (imageSize + 20); // כולל מרווחים בין השנים

  const years = Array.from({ length: MAX - MIN + 1 }, (_, i) => MIN + i);

  return (
    <div ref={sliderRef} className="range-slider-container">
      <Range
        values={localValues}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={setLocalValues}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: `${gridWidth}px `,
              background: getTrackBackground({
                values: localValues,
                colors: ["white", "black", "white"],
                min: MIN,
                max: MAX,
              }),
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {years.map((year) => (
              <div key={year} className="range-tick" />
            ))}
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              backgroundColor: "black",
            }}
          />
        )}
      />
    </div>
  );
};

export default RangeSlider;
