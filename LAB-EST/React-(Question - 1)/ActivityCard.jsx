import React from "react";
import "./App.css";

const ActivityCard = ({ title, date, category }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Category:</strong> {category}</p>
    </div>
  );
};

export default ActivityCard;