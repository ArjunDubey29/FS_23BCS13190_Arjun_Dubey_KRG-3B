import React from "react";
import ActivityCard from "./ActivityCard";

function App() {
  const activities = [
    { title: "Gym Workout", date: "2026-04-20", category: "Fitness" },
    { title: "React Study", date: "2026-04-21", category: "Learning" },
    { title: "Movie Night", date: "2026-04-22", category: "Entertainment" },
    { title: "Project Work", date: "2026-04-23", category: "Work" }
  ];

  return (
    <div style={{ padding: "20px", background: "#0f172a", minHeight: "100vh" }}>
      <h1 style={{ color: "#15faa2" }}>Activity Dashboard</h1>
      
      {activities.map((activity, index) => (
        <ActivityCard
          key={index}
          title={activity.title}
          date={activity.date}
          category={activity.category}
        />
      ))}
    </div>
  );
}

export default App;