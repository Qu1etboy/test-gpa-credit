import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("here");

    const { testcases, author, testName } = req.body;

    console.log(testcases, author, testName);

    await prisma.testResult.create({
      data: {
        testName: testName,
        author: author,
        outputs: {
          create: testcases.map((testcase: any) => {
            // exclude id and testId
            return {
              gpa: testcase.gpa,
              credit: testcase.credit,
              expected: testcase.expected,
              actual: testcase.actual,
              result: testcase.result,
            };
          }),
        },
      },
    });

    return res.status(201).send("");
  }

  return res.send("Method not allowed.");
}
