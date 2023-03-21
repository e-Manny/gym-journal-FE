import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const EditExercisePage = ({ exercise }) => {
  const [name, setName] = useState(exercise.name);
  const [reps, setReps] = useState(exercise.reps);
  const [weight, setWeight] = useState(exercise.weight);
  const [unit, setUnit] = useState(exercise.unit);
  const [date, setDate] = useState(exercise.date);

  const history = useHistory();

  const editExercise = async () => {
    const response = await fetch(
      `https://ember-messy-paw.glitch.me/exercises/${exercise._id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          name: name,
          reps: reps,
          weight: weight,
          unit: unit,
          date: date,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 200) {
      alert("Successfully edited document!");
    } else {
      const errMessage = await response.json();
      alert(
        `Failed to update document. Status ${response.status}. ${errMessage.Error}`
      );
    }
    history.push("/");
  };

  return (
    <>
      <article class="mx-5">
        <h2>Edit an exercise and save</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          class="my-3"
        >
          <fieldset>
            <label for="name" class="pe-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />

            <label for="reps" class="ps-4 pe-1">
              Reps
            </label>
            <input
              type="number"
              value={reps}
              min="1"
              onChange={(e) => setReps(e.target.value)}
              id="reps"
            />

            <label for="weight" class="ps-4 pe-1">
              Weight
            </label>
            <input
              type="number"
              min="1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              id="weight"
            />

            <label for="unit" class="ps-4 pe-1">
              Unit
            </label>
            <input
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              id="unit"
            />

            <label for="date" class="ps-4 pe-1">
              Date
            </label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="date"
            />

            <label for="submit" class="ps-4 pe-1">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={editExercise}
                id="submit"
              >
                Edit
              </button>
            </label>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default EditExercisePage;
