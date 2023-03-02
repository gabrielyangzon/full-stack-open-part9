import React from "react";

import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";
import { courseParts } from "./models/Course";

const App = () => {
  const courseName = "Half Stack application development";

  const totalExercise = courseParts.reduce(
    (carry, part) => carry + part.exerciseCount,
    0
  );

  return (
    <div className="App-header">
      <Header name={courseName} />
      <Content courses={courseParts} />
      <Total count={totalExercise} />
    </div>
  );
};

export default App;
