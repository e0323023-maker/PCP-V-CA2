import React, { useState } from "react";
import { useActivities } from "../context/ActivityContext";
import ActivityCard from "../components/ActivityCard";

const Home = () => {
  const { state } = useActivities();
  const [minSteps, setMinSteps] = useState("");
  const filteredActivities = state.activities.filter(
    (activity) => activity.steps >= (minSteps || 0)
  );

  return (
    <div>
      <h2>All Activities</h2>

      {/* Filter Input */}
      <input
        type="number"
        placeholder="Enter minimum steps"
        value={minSteps}
        onChange={(e) => setMinSteps(e.target.value)}
      />

      {/* Activities List */}
      {filteredActivities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default Home;
