import React from "react";
import Exercise from "./Exercise";

function ExerciseList({ exercises, onDelete, onEdit }) {
  return (
    <section class="tableSect mx-5">
      <h2>List of Exercises</h2>
      <div class="table-responsive">
        <table id="exercises" class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Reps</th>
              <th scope="col">Weight</th>
              <th scope="col">Unit</th>
              <th scope="col">Date</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise, i) => (
              <Exercise
                exercise={exercise}
                key={i}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ExerciseList;
