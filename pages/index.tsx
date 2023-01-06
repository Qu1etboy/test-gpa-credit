import Head from "next/head";
import React, { useRef, useState } from "react";
import TestResult from "../components/TestResult";

type Input = {
  id: number;
  gpa: number;
  credit: number;
  expected: string;
  testId: number;
};

type Result = Input & {
  actual: string;
  result: string;
};

type Test = {
  id: number;
  input: Input[];
  name: string;
};

function runTest(
  test: Test,
  name: string | undefined,
  testName: string | undefined
): Result[] {
  const result: Result[] = test.input.map((v: any) => {
    const actual =
      v.gpa >= 0 && v.gpa <= 4 && v.credit >= 0 && v.credit <= 134 ? "P" : "F";
    const result = actual === v.expected ? "TestPass" : "TestFail";

    return { ...v, actual, result };
  });

  const output = { testcases: result, author: name, testName: testName };

  console.log(output);

  fetch("/api/test", {
    method: "POST",
    body: JSON.stringify(output),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result;
}

export default function Home() {
  const nameInput = useRef<HTMLInputElement>(null);
  const selectTest = useRef<HTMLSelectElement>(null);

  const [testCases, setTestCases] = useState<Result[]>([]);
  const [name, setName] = useState<string | undefined>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(`/api/test/${selectTest.current?.value}`);
    const data = await res.json();

    setTestCases(
      runTest(data, nameInput.current?.value, selectTest.current?.value)
    );
    setName(nameInput.current?.value);
  };

  return (
    <>
      <Head>
        <title>Test GPA</title>
        <meta
          name="description"
          content="The app used to test whether a GPA and credit are valid or not."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full items-center">
        <h1 className="text-3xl font-bold m-10 print:hidden">
          Test GPA and Credit
        </h1>
        <form onSubmit={handleSubmit} className="print:hidden">
          <label>Run by</label>
          <input
            placeholder="name"
            className="p-3 border w-full rounded-lg mt-2 mb-3"
            id="inputName"
            ref={nameInput}
            required
          />
          <label>Select Test</label>
          <select
            id="cars"
            name="test"
            className="p-3 border border-neutral-300 rounded-full ml-3 mb-3 cursor-pointer"
            ref={selectTest}
          >
            <option value="bva">BVA</option>
            <option value="robustness">Robustness</option>
            <option value="wc_bva">Worst case BVA</option>
            <option value="wc_robustness">Worst case Robustness</option>
          </select>

          <button
            type="submit"
            className="mt-3 p-3 rounded-md bg-purple-100 hover:bg-purple-200 duration-300 text-purple-700 text-semibold block mx-auto"
          >
            Run Test
          </button>
        </form>

        {testCases.length !== 0 && (
          <>
            <TestResult testCases={testCases} name={name} />
            <button
              className="mb-10 p-3 rounded-md bg-purple-100 hover:bg-purple-200 duration-300 text-purple-700 text-semibold print:hidden"
              onClick={() => print()}
            >
              Print
            </button>
          </>
        )}
      </main>
    </>
  );
}
