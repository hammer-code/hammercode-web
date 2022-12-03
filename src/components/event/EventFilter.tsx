import React from "react";

function EventFilter() {
  return (
    <div className="event-filter flex">
      <div className="mr-4">
        <select>
          <option>In Person</option>
          <option>Online</option>
        </select>
      </div>
      <div>
        <select>
          <option>Tech</option>
          <option>Design</option>
          <option>Entrepreneruship</option>
        </select>
      </div>
    </div>
  );
}

export default EventFilter;
