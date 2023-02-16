import express from "express";
const middleware = require("./utils/middlewares");
import { calculateBmi } from "./bmiCalculator";

const app = express();

app.use(express.json());
app.use(middleware.requestLogger);

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

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
