import { GetStaticPropsContext } from "next";
import TestResultCard from "../../components/TestResultCard";
import Link from "next/link";
import type { TestResult } from "../../lib/types";

export default function TestResultPage({
  testResult,
}: {
  testResult: TestResult;
}) {
  return (
    <main>
      <button className="m-3 p-3 rounded-md bg-purple-100 hover:bg-purple-200 duration-300 text-purple-700 text-semibold">
        <Link href="/log">Back</Link>
      </button>
      <div className="w-full flex justify-center">
        <TestResultCard
          testCases={testResult.outputs}
          name={testResult.author}
          date={testResult.createdAt}
        />
      </div>
    </main>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const id = params?.id;

  const res = await fetch(`http://localhost:3000/api/testResult/${id}`);
  const testResult = await res.json();

  return {
    props: {
      testResult,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/testResult");
  const testResults = await res.json();

  return {
    paths: testResults.map((testResult: any) => ({
      params: {
        id: String(testResult.id),
      },
    })),
    fallback: false,
  };
}
