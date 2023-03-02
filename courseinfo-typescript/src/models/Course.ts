interface CourseBase {
  name: string;
  exerciseCount: number;
}

interface CourseBasic extends CourseBase {
  description: string;
  kind: "basic";
}

interface CourseGroup extends CourseBase {
  groupProjectCount: number;
  kind: "group";
}

interface CourseBackGround extends CourseBase {
  description: string;
  backroundMaterial: string;
  kind: "background";
}

interface CourseRequirement extends CourseBase {
  description: string;
  requirements: string[];
  kind: "requirement";
}
export type Course =
  | CourseBasic
  | CourseGroup
  | CourseBackGround
  | CourseRequirement;

export const courseParts: Array<Course> = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is an awesome course part",
    kind: "basic",
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3,
    kind: "group",
  },
  {
    name: "Basics of type Narrowing",
    exerciseCount: 7,
    description: "How to go from unknown to string",
    kind: "basic",
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    backroundMaterial:
      "https://type-level-typescript.com/template-literal-types",
    kind: "background",
  },
  {
    name: "Backend development",
    exerciseCount: 21,
    description: "Typing the backend",
    requirements: ["nodejs", "jest"],
    kind: "requirement",
  },
];
