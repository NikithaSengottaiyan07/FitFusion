import React, { useState } from 'react';

const ExerciseSearch = () => {
  const [primaryMuscle, setPrimaryMuscle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchExercises = async () => {
    if (!primaryMuscle) {
      setError('Please enter a primary muscle.');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        `https://exerciseapi3.p.rapidapi.com/exercise/primary_muscle/${primaryMuscle}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '51e4b899b4msh614af1740a68e5cp12945ajsn37fed20f5e6b',
            'x-rapidapi-host': 'exerciseapi3.p.rapidapi.com',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // Ensure the data is an array
      setExercises(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Exercise Search</h1>
      <div>
        <input
          type="text"
          placeholder="Enter primary muscle (e.g., chest)"
          value={primaryMuscle}
          onChange={(e) => setPrimaryMuscle(e.target.value)}
        />
        <button onClick={fetchExercises}>Search</button>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      {Array.isArray(exercises) && exercises.length > 0 ? (
        <ul>
          {exercises.map((exercise, index) => (
            <li key={index}>
              <strong>{exercise.name}</strong>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <div>No exercises found.</div>
      )}
    </div>
  );
};

export default ExerciseSearch;
