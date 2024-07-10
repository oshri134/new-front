import React, { useState } from "react";
import "./Sidebar.css";

const menuItems = [
  "תקווה ושלום",
  "מלחמה וביטחון",
  "קשרים רומנטיים",
  "חוויות ורגשות",
  "פוליטיקה ומחאה",
  "גאווה לאומית",
  "אלוהים ומקורות",
  "תרבות פנאי",
];

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClick = (item) => {
    setClickedItem((prev) => (prev === item ? null : item));
  };

  const addBrackets = (item) => {
    return (
      <span
        className={`bracketed-item ${
          clickedItem === item || hoveredItem === item ? "show" : ""
        }`}
      >
        <img src="/vector-2.svg" alt="left bracket" className="bracket" />
        <span className="bracketed-text">{item}</span>
        <img src="/vector-1.svg" alt="right bracket" className="bracket" />
      </span>
    );
  };

  return (
    <div className="parent">
      <div className="div">
        {menuItems.map((item, index) => (
          <div className={`div${index === 0 ? 1 : 3}`} key={index}>
            <div className="container">
              <div
                className="div2"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(item)}
              >
                <p
                  className={`p ${clickedItem === item ? "clicked" : ""}`}
                  style={{ cursor: "pointer" }}
                >
                  {clickedItem === item || hoveredItem === item
                    ? addBrackets(item)
                    : item}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
