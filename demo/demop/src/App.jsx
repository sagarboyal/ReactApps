import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/activity") // Adjust your URL if needed
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Activities</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>{activity.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
