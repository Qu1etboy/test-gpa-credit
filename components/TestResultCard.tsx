import { useEffect, useState } from "react";

type Output = {
  id: number;
  gpa: number;
  credit: number;
  actual: string;
  expected: string;
  result: string;
  testResultId: number;
};

type Props = {
  testCases: Output[];
  name: string | undefined;
  date?: Date;
};

export default function TestResult(props: Props) {
  const [hydrated, setHydrated] = useState(false);
  const { testCases, name, date } = props;

  useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <div className="m-10 flex flex-col gap-2 border p-5 w-full max-w-2xl rounded-md shadow-md print:max-w-none print:border-none print:shadow-none">
      <h2 className="text-xl font-semibold">Test Result</h2>
      <p>Run By: {name}</p>
      <p>
        Date:{" "}
        {new Date(date as Date).toString().slice(0, -26) ??
          new Date().toString().slice(0, -26)}
      </p>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 ">gpa</th>
            <th className="px-4 py-2 ">credit</th>
            <th className="px-4 py-2 ">actual</th>
            <th className="px-4 py-2 ">expected</th>
            <th className="px-4 py-2 ">result</th>
          </tr>
        </thead>
        <tbody>
          {testCases.map((testcase: Output, idx: number) => (
            <tr key={idx}>
              <td className="border px-4 py-2  font-medium">{testcase.gpa}</td>
              <td className="border px-4 py-2  font-medium">
                {testcase.credit}
              </td>
              <td className="border px-4 py-2  font-medium">
                {testcase.actual}
              </td>
              <td className="border px-4 py-2  font-medium">
                {testcase.expected}
              </td>
              <td className="border px-4 py-2  font-medium">
                {testcase.result}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
