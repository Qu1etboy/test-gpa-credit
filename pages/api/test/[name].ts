import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { name } = req.query;

    const prisma = new PrismaClient();

    try {
      const input = await prisma.test.findUnique({
        where: {
          name: name as string,
        },
        include: {
          input: true,
        },
      });

      return res.status(201).json(input);
    } catch (err) {
      console.error(err);
      return res.status(500).send("");
    }
  }

  return res.send("Method not allowed.");
}
