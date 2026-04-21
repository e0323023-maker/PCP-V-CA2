import React from "react";
import { Link } from "react-router-dom";
import { useActivities } from "../context/ActivityContext";

const ActivityCard = ({ activity }) => {
  const { dispatch } = useActivities();

  const handleToggle = () => {
    dispatch({
      type: "TOGGLE_GOAL",
      payload: activity.id
    });
  };

  return (
    <div
      data-testid="activity-item"
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px"
      }}
    >
      <h3>{activity.name}</h3>
      <p>Duration: {activity.duration} mins</p>
      <p>Steps: {activity.steps}</p>
      <p>
        Goal: {activity.goalAchieved ? "Achieved" : "Not Achieved"}
      </p>

      {/* Toggle Button */}
      <button onClick={handleToggle}>
        Toggle Goal
      </button>

      <br /><br />

      {/* View Details */}
      <Link to={`/activity/${activity.id}`}>
        View Details
      </Link>
    </div>
  );
};

export default ActivityCard;