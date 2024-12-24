import React, { useEffect, useState } from 'react';

const FitnessDataa = () => {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch(
          'https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0',
          {
            method: 'GET',
            headers: {
              'x-rapidapi-key': '51e4b899b4msh614af1740a68e5cp12945ajsn37fed20f5e6b',
              'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setExercises(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Exercise List</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <strong>{exercise.name}</strong> - {exercise.bodyPart}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FitnessDataa;
