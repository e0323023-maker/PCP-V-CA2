import React, { useEffect } from "react";
import { useActivities } from "../context/ActivityContext";

const Dashboard = () => {
  const { state } = useActivities();

  const totalActivities = state.activities.length;
  const goalAchievedCount = state.activities.filter(a => a.goalAchieved).length;
  const goalNotAchievedCount = totalActivities - goalAchievedCount;
  
  useEffect(() => {
    window.appState = {
      totalActivities,
      goalAchievedCount,
      goalNotAchievedCount
    };
  }, [totalActivities, goalAchievedCount, goalNotAchievedCount]);

  return (
    <div>
      <h2>Analytics Dashboard</h2>

      <p data-testid="total-activities">
        Total Activities: {totalActivities}
      </p>

      <p data-testid="goal-achieved">
        Goal Achieved: {goalAchievedCount}
      </p>

      <p data-testid="goal-not-achieved">
        Goal Not Achieved: {goalNotAchievedCount}
      </p>
    </div>
  );
};

export default Dashboard;