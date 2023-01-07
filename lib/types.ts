export type Input = {
  id: number;
  gpa: number;
  credit: number;
  expected: string;
  testId: number;
};

export type Output = {
  id: number;
  gpa: number;
  credit: number;
  actual: string;
  expected: string;
  result: string;
  testResultId: number;
};

export type Test = {
  id: number;
  input: Input[];
  name: string;
};

export type TestResult = {
  id: number;
  author: string;
  testName: string;
  createdAt: Date;
  outputs: Output[];
};
