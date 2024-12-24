import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FitnessData.css'; // Import the CSS file

const FitnessData = () => {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [muscleGroup, setMuscleGroup] = useState('chest'); // Initial muscle group

  const API_URL = `https://wger.de/api/v2/exercise?muscle=${muscleGroup}`; // ExerciseDB API with muscle group parameter

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(API_URL);
        setExercises(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [muscleGroup]); // Fetches data again when muscleGroup changes

  const handleMuscleGroupChange = (event) => {
    setMuscleGroup(event.target.value);
  };

  return (
    <div className="fitness-data">
      <select value={muscleGroup} onChange={handleMuscleGroupChange} className="muscle-group-select">
        <option value="chest">Chest</option>
        <option value="back">Back</option>
        <option value="biceps">Biceps</option>
        {/* Add more muscle groups as needed */}
      </select>
      {isLoading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">Error: {error.message}</p>}
      {exercises.length > 0 && (
        <ul className="exercise-list">
          {exercises.map((exercise) => (
            <li key={exercise.id} className="exercise-item">
              {exercise.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FitnessData;
