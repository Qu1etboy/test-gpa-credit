type Props = {
  gpa: number;
  credit: number;
  actual: string;
  expected: string;
  result: string;
};

export default function TestResult({
  testCases,
  name,
}: {
  testCases: Props[];
  name: string | undefined;
}) {
  return (
    <div className="m-10 flex flex-col gap-2 border p-5 w-full max-w-2xl rounded-md shadow-md print:max-w-none print:border-none print:shadow-none">
      <h2 className="text-xl font-semibold">Test Result</h2>
      <p>Run By: {name}</p>
      <p>Date: {new Date().toString().slice(0, -26)}</p>
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
          {testCases.map((testcase: Props, idx: number) => (
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
