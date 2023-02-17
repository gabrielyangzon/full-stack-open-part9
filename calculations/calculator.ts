import { processArgv } from "../utils/util";

type Operation = "multiply" | "add" | "divide";

const calculator = (a: number, b: number, op: Operation): number => {
  switch (op) {
    case "multiply":
      return a * b;
    case "add":
      return a + b;
    case "divide":
      if (b === 0) throw new Error("can't divide by 0!");
      return a / b;
    default:
      throw new Error("Operation is not multiply, add or divide!");
  }
};

if (process.argv.length > 2) {
  try {
    const { value1, value2 } = processArgv(process.argv);

    console.log(calculator(value1, value2, "divide"));
  } catch (error: unknown) {
    let errorMessage = "Something went wrong: ";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    console.log(errorMessage);
  }
}
export { calculator, Operation };
