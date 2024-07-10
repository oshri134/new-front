import React from "react";

const NavBar = () => {
  return (
    <header
      style={{
        alignSelf: "stretch",
        backgroundColor: "#fffefd",
        borderBottom: "1.8px solid #232323",
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
        <nav
          style={{
            margin: "0",
            width: "82px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            textAlign: "right",
            fontSize: "17px",
            color: "#000",
            fontFamily: "SimplerPro_HLAR_Mono",
          }}
        >
          <div
            style={{
              width: "10px",
              position: "relative",
              letterSpacing: "0.02em",
              lineHeight: "12px",
              fontWeight: "500",
              display: "inline-block",
              minWidth: "10px",
            }}
          >
            [
          </div>
          <div
            style={{
              flex: "1",
              position: "relative",
              letterSpacing: "0.02em",
              lineHeight: "12px",
              fontWeight: "500",
              display: "inline-block",
              minWidth: "50px",
              whiteSpace: "nowrap",
            }}
          >
            {`אודות `}
          </div>
          <div
            style={{
              width: "10px",
              position: "relative",
              letterSpacing: "0.02em",
              lineHeight: "12px",
              fontWeight: "500",
              display: "inline-block",
              minWidth: "10px",
            }}
          >
            ]
          </div>
        </nav>
        <nav
          style={{
            margin: "0",
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            textAlign: "right",
            fontSize: "17px",
            color: "#000",
            fontFamily: "SimplerPro_HLAR_Mono",
          }}
        >
          <div
            style={{
              width: "10px",
              position: "relative",
              letterSpacing: "0.02em",
              lineHeight: "12px",
              fontWeight: "500",
              display: "inline-block",
              minWidth: "10px",
            }}
          >
            [
          </div>
          <div
            style={{
              flex: "1",
              position: "relative",
              letterSpacing: "0.02em",
              lineHeight: "12px",
              fontWeight: "500",
              display: "inline-block",
              minWidth: "60px",
            }}
          >
            אינדקס
          </div>
          <div
            style={{
              width: "10px",
              position: "relative",
              letterSpacing: "0.02em",
              lineHeight: "12px",
              fontWeight: "500",
              display: "inline-block",
              minWidth: "10px",
            }}
          >
            ]
          </div>
        </nav>
      </nav>
      <div
        style={{
          width: "153.5px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
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
        >
          פזמון: חוזר
        </a>
      </div>
    </header>
  );
};

export default NavBar;
