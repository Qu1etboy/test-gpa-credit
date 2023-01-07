import Link from "next/link";
import type { TestResult } from "@prisma/client";

export default function Log({ testResults }: { testResults: TestResult[] }) {
  return (
    <>
      <main>
        <h1 className="text-3xl font-bold text-center mt-5">Test Log</h1>
        <table className="table-auto mx-auto mt-10">
          <thead>
            <tr>
              <th className="px-4 py-2">id</th>
              <th className="px-4 py-2">author</th>
              <th className="px-4 py-2">test name</th>
              <th className="px-4 py-2">detail</th>
            </tr>
          </thead>
          <tbody>
            {testResults.map((testResult: TestResult) => (
              <tr key={testResult.id}>
                <td className="px-4 py-2 border">{testResult.id}</td>
                <td className="px-4 py-2 border">{testResult.author}</td>
                <td className="px-4 py-2 border">{testResult.testName}</td>
                <td className="px-4 py-2 border">
                  <Link
                    href={`test/${testResult.id}`}
                    className="underline text-blue-500"
                  >
                    view
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/testResult");
  const testResults = await res.json();

  return {
    props: {
      testResults,
    },
  };
}
