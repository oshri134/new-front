import React from "react";

const NavBar = ({ minYear, maxYear }) => {
  const years = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => minYear + i
  );
  
  return (
    <header
      style={{
        alignSelf: "stretch",
        backgroundColor: "#fffefd",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "32px 48px 30px",
        flexShrink: "0",
        top: "0",
        zIndex: "99",
        position: "sticky",
        gap: "20px",
        textAlign: "right",
        fontSize: "20px",
        color: "#bfbfbf",
        fontFamily: "Levit_1950",
        borderBottom: "2px solid black",
        position: "relative",
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
        }}
      >
        {/* Code for the navigation items */}
      </nav>
      <div
        style={{
          width: "153.5px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <a
          style={{
            textDecoration: "none",
            flex: "1",
            position: "relative",
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
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "0",
            right: "0",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            color: "#000",
          }}
        >
          {years.map((year) => (
            <div
              key={year}
              style={{
                flex: "1",
                borderRight: "1px solid #000",
                textAlign: "center",
              }}
            >
              {year}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
