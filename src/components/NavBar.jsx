import React, { useState, useRef, useEffect } from "react";
import HorizontalTimeline from "react-horizontal-timeline";

const NavBar = ({ minYear, maxYear }) => {
  const years = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => minYear + i
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const timelineRef = useRef(null);

  const dates = years.map((year) => `${year}-01-01`);

  useEffect(() => {
    if (timelineRef.current) {
      const lineElement = timelineRef.current.querySelector(
        ".react-horizontal-timeline .timeline__line"
      );
      if (lineElement) {
        lineElement.style.position = "absolute";
        lineElement.style.left = "0px";
        lineElement.style.top = "53px";
        lineElement.style.height = "2px";
        lineElement.style.width = "4600px";
        lineElement.style.transform = "translate3d(0px, 0px, 0px)";
      }
    }
  }, []);

  return (
    <header
      style={{
        alignSelf: "stretch",
        backgroundColor: "#fffefd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 48px",
        flexShrink: "0",
        top: "0",
        zIndex: "99",
        position: "sticky",
        textAlign: "right",
        fontSize: "20px",
        color: "#bfbfbf",
        fontFamily: "Levit_1950",
        borderBottom: "2px solid black",
      }}
    >
      <nav
        style={{
          margin: "0",
          width: "192px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "18px",
          padding: "20px 0",
        }}
      >
        {/* Code for the navigation items */}
      </nav>
      <a
        style={{
          textDecoration: "none",
          letterSpacing: "0.04em",
          lineHeight: "16px",
          color: "inherit",
          whiteSpace: "nowrap",
        }}
        href="/"
      >
        פזמון: חוזר
      </a>
      <div
        ref={timelineRef}
        style={{
          width: "100%",
          position: "relative",
          top: "17px",
          zIndex: "100",
          paddingTop: "20px",
          paddingBottom: "30px",
        }}
      >
        <HorizontalTimeline
          index={currentIndex}
          indexClick={(index) => setCurrentIndex(index)}
          values={dates}
          getLabel={(date) => new Date(date).getFullYear().toString()}
          minEventPadding={20}
          maxEventPadding={20}
          linePadding={100}
          labelWidth={60}
          showLabels={true}
          styles={{
            outline: "none",
            fontSize: "14px",
            foreground: {
              outline: "transparent",
              link: {
                bottom: "-12px",
                color: "#000000",
              },
            },
            dots: {
              display: "none",
            },
          }}
        />
      </div>
    </header>
  );
};

export default NavBar;
