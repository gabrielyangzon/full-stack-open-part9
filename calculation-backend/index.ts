import express from "express";
const middleware = require("./utils/middlewares");
import { calculateBmi } from "./calculations/bmiCalculator";
import { calculator, Operation } from "./calculations/calculator";
import { calculateExercise } from "./calculations/exerciseCalculator";
import { Exercise } from "./utils/util";

const app = express();

app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.errorHandler);
////

app.get("/", (_request, response) => {
  response.send("hello apps");
});

app.get("/hello", (_request, response) => {
  response.status(200).send("Hello Full Stack");
});

app.get("/bmi", (_request, response) => {
  const query = _request.query;
  const { height, weight } = query;

  if (!height || !weight)
    response.status(400).json({ error: "malformatted parameters" });

  const result = calculateBmi(Number(height), Number(weight));

  response.status(200).json({
    weight: weight,
    height: height,
    bmi: result,
  });
});

app.post("/calculate", (_request, response) => {
  const { value1, value2, op } = _request.body;

  const operation = op as Operation;

  console.log(operation);
  const result = calculator(value1, value2, operation);
  response.status(200).json({
    result: result,
  });
});

app.post("/exercises", (_request, response) => {
  const { daily_exercises, target } = _request.body;

  const exercise: Exercise = {
    target: target,
    exercise: daily_exercises,
  };

  const result = calculateExercise(exercise);

  response.status(200).json({ result: result });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
