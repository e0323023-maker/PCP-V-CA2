import React, { useState } from "react";
import { useActivities } from "../context/ActivityContext";

const AddActivity = () => {
  const { dispatch } = useActivities();

  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!name || !duration || !steps) {
      alert("Please fill all fields");
      return;
    }

    const newActivity = {
      id: Date.now(),
      name,
      duration: Number(duration),
      steps: Number(steps),
      goalAchieved: false
    };

    dispatch({
      type: "ADD_ACTIVITY",
      payload: newActivity
    });

    
    setName("");
    setDuration("");
    setSteps("");
  };

  return (
    <div>
      <h2>Add Activity</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Activity Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Duration (mins)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        <br /><br />

        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default AddActivity;