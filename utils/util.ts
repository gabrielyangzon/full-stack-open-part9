interface MultiplyValues {
  value1: number;
  value2: number;
}

export interface Exercise {
  target: number;
  exercise: number[];
}

const processArgv = (args: string[]): MultiplyValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const processExerciseArgv = (args: Array<string>): Exercise => {
  if (args.length <= 3) throw new Error("Not enough arguments");

  const target = Number(args[2]);
  const exercise = args.slice(3).map((n) => Number(n));
  const isAllNumber = !exercise.includes(NaN);

  if (!isAllNumber) throw new Error("Only number is allowed");

  return {
    target: target,
    exercise: exercise,
  };
};

export { processArgv, processExerciseArgv };
