import React from "react";
import { useParams } from "react-router-dom";
import { useActivities } from "../context/ActivityContext";

const ActivityDetail = () => {
  const { id } = useParams();
  const { state } = useActivities();

  const activity = state.activities.find((a) => a.id === Number(id));

  if (!activity) return <h2>Activity Not Found</h2>;

  const efficiency = activity.steps
    ? (activity.steps / activity.duration).toFixed(2)
    : "N/A";

  return (
    <div>
      <h2>{activity.name}</h2>
      <p>Duration: {activity.duration}</p>
      <p>Steps: {activity.steps}</p>
      <p>Goal: {activity.goalAchieved ? "Yes" : "No"}</p>
      <h3>Efficiency Score: {efficiency}</h3>
    </div>
  );
};

export default ActivityDetail;