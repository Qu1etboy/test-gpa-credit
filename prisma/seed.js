const { PrismaClient } = require("@prisma/client");
const {
  bva,
  robustness,
  wc_bva,
  wc_robustness,
} = require("../data/testInput.js");

const prisma = new PrismaClient();

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
