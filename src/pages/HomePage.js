import React from "react";
import ExerciseList from "../components/ExerciseList";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

function HomePage({ setExercise }) {
  // Use the history for updating
  const history = useHistory();

  // Use state to bring in the data
  const [exercises, setExercises] = useState([]);

  // RETRIEVE the list of exercises
  const loadExercises = async () => {
    const response = await fetch("https://ember-messy-paw.glitch.me/exercises");
    const exercises = await response.json();
    setExercises(exercises);
  };

  // UPDATE an exercise
  const onEditExercise = async (exercise) => {
    setExercise(exercise);
    history.push("/edit-exercise");
  };

  // DELETE an exercise
  const onDeleteExercise = async (_id) => {
    const response = await fetch(
      `https://ember-messy-paw.glitch.me/exercises/${_id}`,
      { method: "DELETE" }
    );
    if (response.status === 204) {
      const getResponse = await fetch(
        "https://ember-messy-paw.glitch.me/exercises"
      );
      const exercises = await getResponse.json();
      setExercises(exercises);
    } else {
      console.error(
        `Failed to delete exercise with _id = ${_id}, status code = ${response.status}`
      );
    }
  };

  // LOAD the exercises
  useEffect(() => {
    loadExercises();
  }, []);

  // DISPLAY the exercises
  return (
    <>
      <article>
        <ExerciseList
          exercises={exercises}
          onEdit={onEditExercise}
          onDelete={onDeleteExercise}
        />
        <div class="px-4  my-4 text-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            <Link class="nav-link active text-light" to="../add-exercise">
              Add Exercise
            </Link>
          </button>
        </div>
      </article>
    </>
  );
}

export default HomePage;
