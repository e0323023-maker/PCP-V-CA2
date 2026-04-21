import React, { createContext, useReducer, useContext, useEffect } from "react";

const ActivityContext = createContext();

const initialState = {
  activities: []
};

function reducer(state, action) {
  switch (action.type) {

    case "SET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload
      };

    case "ADD_ACTIVITY":
      return {
        ...state,
        activities: [...state.activities, action.payload]
      };

    case "TOGGLE_GOAL":
      return {
        ...state,
        activities: state.activities.map((activity) =>
          activity.id === action.payload
            ? { ...activity, goalAchieved: !activity.goalAchieved }
            : activity
        )
      };

    default:
      return state;
  }
}

export const ActivityProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const fetchActivities = async () => {
    try {
      const res = await fetch("https://t4e-testserver.onrender.com/api");
      const data = await res.json();

      console.log("API RESPONSE:", data);

      
      const fallbackData = [
        { id: 1, name: "Running", duration: 30, steps: 4000, goalAchieved: true },
        { id: 2, name: "Cycling", duration: 45, steps: 2000, goalAchieved: false },
        { id: 3, name: "Swimming", duration: 60, steps: 1000, goalAchieved: true }
      ];

      dispatch({
        type: "SET_ACTIVITIES",
        payload: fallbackData
      });

    } catch (error) {
      console.error("Error fetching API:", error);

      
      dispatch({
        type: "SET_ACTIVITIES",
        payload: [
          { id: 1, name: "Running", duration: 30, steps: 4000, goalAchieved: true },
          { id: 2, name: "Cycling", duration: 45, steps: 2000, goalAchieved: false },
          { id: 3, name: "Swimming", duration: 60, steps: 1000, goalAchieved: true }
        ]
      });
    }
  };

  
  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <ActivityContext.Provider value={{ state, dispatch }}>
      {children}
    </ActivityContext.Provider>
  );
};


export const useActivities = () => {
  return useContext(ActivityContext);
};