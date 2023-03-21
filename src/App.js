// Import dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

// Import Components, styles, media
import Navigation from "./components/Navigation";
import "bootstrap/dist/js/bootstrap.bundle";

// Import Pages
import HomePage from "./pages/HomePage";
import AddExercisePage from "./pages/AddExercisePage";
import EditExercisePage from "./pages/EditExercisePage";

// Define the function that renders the content in routes using State.
function App() {
  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>
        <Navigation />

        <header>
          <div class="px-4 py-3 my-5 text-center border-bottom">
            <h1 class="display-4 fw-bold">Gym Journal</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4">Track your progress to level up!</p>
            </div>
          </div>
        </header>

        <main>
          <Route path="/" exact>
            <HomePage setExercise={setExercise} />
          </Route>

          <Route path="/add-exercise">
            <AddExercisePage />
          </Route>

          <Route path="/edit-exercise">
            <EditExercisePage exercise={exercise} />
          </Route>
        </main>

        <footer class="footer mt-auto py-3 bg-light text-center">
          <div class="container">
            <span class="text-muted">&copy; Manuel Espinoza.</span>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
