import { PrismaClient } from "@prisma/client";
// import fs from "fs";

const prisma = new PrismaClient();

// async function read() {
//   fs.readFile("wc_bva.txt", "utf8", function (err, data) {
//     const line = data.split(/\n/);

//     const testcases = [];
//     for (const l of line) {
//       if (l.trim() === "") break;

//       const x = l.split(/(\s+)/).filter((e) => e.trim().length > 0);
//       const gpa = parseFloat(x[0]);
//       const credit = parseInt(x[1]);
//       const expected = x[2];

//       testcases.push({
//         gpa,
//         credit,
//         expected,
//       });
//     }
//     console.log(testcases);
//   });
// }

// read();

const bva = [
  { gpa: 0, credit: 67, expected: "P" },
  { gpa: 0.01, credit: 67, expected: "P" },
  { gpa: 2, credit: 0, expected: "P" },
  { gpa: 2, credit: 1, expected: "P" },
  { gpa: 2, credit: 67, expected: "P" },
  { gpa: 2, credit: 133, expected: "P" },
  { gpa: 2, credit: 134, expected: "P" },
  { gpa: 3.99, credit: 67, expected: "P" },
  { gpa: 4, credit: 67, expected: "P" },
];

const robustness = [
  { gpa: -0.01, credit: 67, expected: "F" },
  { gpa: 0, credit: 67, expected: "P" },
  { gpa: 0.01, credit: 67, expected: "P" },
  { gpa: 2, credit: 135, expected: "F" },
  { gpa: 2, credit: 134, expected: "P" },
  { gpa: 2, credit: 133, expected: "P" },
  { gpa: 2, credit: 67, expected: "P" },
  { gpa: 2, credit: 1, expected: "P" },
  { gpa: 2, credit: 0, expected: "P" },
  { gpa: 2, credit: -1, expected: "F" },
  { gpa: 3.99, credit: 67, expected: "P" },
  { gpa: 4, credit: 67, expected: "P" },
  { gpa: 4.01, credit: 67, expected: "F" },
];

const wc_bva = [
  { gpa: 0, credit: 134, expected: "P" },
  { gpa: 0, credit: 133, expected: "P" },
  { gpa: 0, credit: 67, expected: "P" },
  { gpa: 0, credit: 1, expected: "P" },
  { gpa: 0, credit: 0, expected: "P" },
  { gpa: 0.01, credit: 134, expected: "P" },
  { gpa: 0.01, credit: 133, expected: "P" },
  { gpa: 0.01, credit: 67, expected: "P" },
  { gpa: 0.01, credit: 1, expected: "P" },
  { gpa: 0.01, credit: 0, expected: "P" },
  { gpa: 2, credit: 134, expected: "P" },
  { gpa: 2, credit: 133, expected: "P" },
  { gpa: 2, credit: 67, expected: "P" },
  { gpa: 2, credit: 1, expected: "P" },
  { gpa: 2, credit: 0, expected: "P" },
  { gpa: 3.99, credit: 134, expected: "P" },
  { gpa: 3.99, credit: 133, expected: "P" },
  { gpa: 3.99, credit: 67, expected: "P" },
  { gpa: 3.99, credit: 1, expected: "P" },
  { gpa: 3.99, credit: 0, expected: "P" },
  { gpa: 4, credit: 134, expected: "P" },
  { gpa: 4, credit: 133, expected: "P" },
  { gpa: 4, credit: 67, expected: "P" },
  { gpa: 4, credit: 1, expected: "P" },
  { gpa: 4, credit: 0, expected: "P" },
];

const wc_robustness = [
  { gpa: -0.01, credit: 135, expected: "F" },
  { gpa: -0.01, credit: 134, expected: "F" },
  { gpa: -0.01, credit: 133, expected: "F" },
  { gpa: -0.01, credit: 67, expected: "F" },
  { gpa: -0.01, credit: 1, expected: "F" },
  { gpa: -0.01, credit: 0, expected: "F" },
  { gpa: -0.01, credit: -1, expected: "F" },
  { gpa: 0, credit: 135, expected: "F" },
  { gpa: 0, credit: 134, expected: "P" },
  { gpa: 0, credit: 133, expected: "P" },
  { gpa: 0, credit: 67, expected: "P" },
  { gpa: 0, credit: 1, expected: "P" },
  { gpa: 0, credit: 0, expected: "P" },
  { gpa: 0, credit: -1, expected: "F" },
  { gpa: 0.01, credit: 135, expected: "F" },
  { gpa: 0.01, credit: 134, expected: "P" },
  { gpa: 0.01, credit: 133, expected: "P" },
  { gpa: 0.01, credit: 67, expected: "P" },
  { gpa: 0.01, credit: 1, expected: "P" },
  { gpa: 0.01, credit: 0, expected: "P" },
  { gpa: 0.01, credit: -1, expected: "F" },
  { gpa: 2, credit: 135, expected: "F" },
  { gpa: 2, credit: 134, expected: "P" },
  { gpa: 2, credit: 133, expected: "P" },
  { gpa: 2, credit: 67, expected: "P" },
  { gpa: 2, credit: 1, expected: "P" },
  { gpa: 2, credit: 0, expected: "P" },
  { gpa: 2, credit: -1, expected: "F" },
  { gpa: 3.99, credit: 135, expected: "F" },
  { gpa: 3.99, credit: 134, expected: "P" },
  { gpa: 3.99, credit: 133, expected: "P" },
  { gpa: 3.99, credit: 67, expected: "P" },
  { gpa: 3.99, credit: 1, expected: "P" },
  { gpa: 3.99, credit: 0, expected: "P" },
  { gpa: 3.99, credit: -1, expected: "F" },
  { gpa: 4, credit: 135, expected: "F" },
  { gpa: 4, credit: 134, expected: "P" },
  { gpa: 4, credit: 133, expected: "P" },
  { gpa: 4, credit: 67, expected: "P" },
  { gpa: 4, credit: 1, expected: "P" },
  { gpa: 4, credit: 0, expected: "P" },
  { gpa: 4, credit: -1, expected: "F" },
  { gpa: 4.01, credit: 135, expected: "F" },
  { gpa: 4.01, credit: 134, expected: "F" },
  { gpa: 4.01, credit: 133, expected: "F" },
  { gpa: 4.01, credit: 67, expected: "F" },
  { gpa: 4.01, credit: 1, expected: "F" },
  { gpa: 4.01, credit: 0, expected: "F" },
  { gpa: 4.01, credit: -1, expected: "F" },
];

async function main() {
  await prisma.test.upsert({
    where: { name: "bva" },
    update: {},
    create: {
      name: "bva",
      input: {
        create: bva,
      },
    },
  });

  await prisma.test.upsert({
    where: { name: "robustness" },
    update: {},
    create: {
      name: "robustness",
      input: {
        create: robustness,
      },
    },
  });

  await prisma.test.upsert({
    where: { name: "wc_bva" },
    update: {},
    create: {
      name: "wc_bva",
      input: {
        create: wc_bva,
      },
    },
  });

  await prisma.test.upsert({
    where: { name: "wc_robustness" },
    update: {},
    create: {
      name: "wc_robustness",
      input: {
        create: wc_robustness,
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
