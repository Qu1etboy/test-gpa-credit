import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("here");

    const { testcases } = req.body;

    // clean up data
    await prisma.testResult.deleteMany();

    await prisma.testResult.createMany({
      data: [...testcases],
    });

    return res.status(201).send("");
  }

  return res.send("Method not allowed.");
}
