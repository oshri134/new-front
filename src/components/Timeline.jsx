// src/components/Timeline.js
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

const events = [
  { year: 1969, event: "נחיתה על הירח" },
  { year: 1989, event: "נפילת חומת ברלין" },
  { year: 2000, event: "באג השנה 2000" },
  { year: 2001, event: "פיגועי 11 בספטמבר" },
  { year: 2008, event: "המשבר הכלכלי העולמי" },
  { year: 2020, event: "מגפת הקורונה" },
  { year: 2024, event: "אירוע עתידי" },
  // הוסף עוד אירועים כאן...
];

const EventItem = ({ event }) => (
  <div className="event-item">
    <h3>{event.year}</h3>
    <p>{event.event}</p>
  </div>
);

const Timeline = ({ min, max }) => {
  const filteredEvents = events.filter(
    (event) => event.year >= min && event.year <= max
  );

  return (
    <div className="timeline-container">
      <ScrollMenu
      
      >
        {filteredEvents.map((event, index) => (
          <EventItem itemId={index.toString()} event={event} key={index} />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default Timeline;
