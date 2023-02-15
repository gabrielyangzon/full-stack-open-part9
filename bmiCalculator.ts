import { processArgv } from "./util";

const calculateBmi = (height: number, weight: number) => {
  let heightInMeter = (height / 100) * (height / 100);
  let result = weight / heightInMeter;

  if (result >= 18.5 && result <= 25) {
    return "Normal";
  } else if (result >= 25 && result <= 30) {
    return "Overweight";
  } else if (result >= 30 && result <= 35) {
    return "Obese 1";
  } else if (result >= 35 && result <= 40) {
    return "Obese 2";
  } else {
    return "Obese 3";
  }
};

try {
  const { value1, value2 } = processArgv(process.argv);

  const result = calculateBmi(value1, value2);

  console.log(result);
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
