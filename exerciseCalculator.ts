import { Exercise, processExerciseArgv } from "./util";

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercise = ({ target, exercise }: Exercise) => {
  let allExercise = exercise;
  let trainingDays = exercise.filter((n) => n !== 0);

  let average =
    allExercise.reduce((num1: number, num2: number) => num1 + num2) /
    allExercise.length;

  return {
    periodLength: allExercise.length,
    trainingDays: trainingDays.length,
    success: trainingDays.length >= target,
    rating: 2,
    ratingDescription: "not too bad but could be better",
    target: target,
    average: average,
  } as Result;
};

try {
  const result = calculateExercise(processExerciseArgv(process.argv));

  console.log(result);
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
