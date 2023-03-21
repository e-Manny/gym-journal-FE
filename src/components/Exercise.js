import React from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";

function Exercise({ exercise, onEdit, onDelete }) {
  return (
    <tr>
      <td>{exercise.name}</td>
      <td>{exercise.reps}</td>
      <td>{exercise.weight}</td>
      <td>{exercise.unit}</td>
      <td>{exercise.date}</td>
      <td>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => onEdit(exercise)}
        >
          Edit
        </button>
      </td>
      <td>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => onDelete(exercise._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Exercise;
