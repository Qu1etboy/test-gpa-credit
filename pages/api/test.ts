import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("here");

    const prisma = new PrismaClient();
    const { testcases } = req.body;

    // clean up data
    await prisma.testGPA.deleteMany();

    await prisma.testGPA.createMany({
      data: [...testcases],
    });
  }

  // res.status(200).json({ name: "John Doe" });
}
