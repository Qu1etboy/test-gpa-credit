import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const testResult = await prisma.testResult.findMany({
      include: {
        outputs: true,
      },
    });

    return res.status(200).json(testResult);
  }

  return res.send("Method not allowed.");
}
