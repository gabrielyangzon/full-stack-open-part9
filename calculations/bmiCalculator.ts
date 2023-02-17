import { processArgv } from "../utils/util";

const calculateBmi = (height: number, weight: number) => {
  let heightInMeter = (height / 100) * (height / 100);
  let result = weight / heightInMeter;

  let resultMessage: string = `Your BMI: ${result}, You are : `;

  if (result < 18.5) return resultMessage + "Underweight";
  else if (result >= 18.5 && result <= 25) return resultMessage + "Normal";
  else if (result >= 25 && result <= 30) return resultMessage + "Overweight";
  else if (result >= 30 && result <= 35) return resultMessage + "Obese 1";
  else if (result >= 35 && result <= 40) return resultMessage + "Obese 2";
  else return resultMessage + "Obese 3";
};

if (process.argv.length > 2) {
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
}
export { calculateBmi };
