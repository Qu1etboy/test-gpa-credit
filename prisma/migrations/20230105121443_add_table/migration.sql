/*
  Warnings:

  - You are about to drop the `TestGPA` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `TestGPA`;

-- CreateTable
CREATE TABLE `TestResult` (
    `id` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `gpa` DOUBLE NOT NULL,
    `credit` INTEGER NOT NULL,
    `actual` VARCHAR(191) NOT NULL,
    `expected` VARCHAR(191) NOT NULL,
    `result` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Test` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Test_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Input` (
    `id` VARCHAR(191) NOT NULL,
    `gpa` VARCHAR(191) NOT NULL,
    `credit` VARCHAR(191) NOT NULL,
    `expected` VARCHAR(191) NOT NULL,
    `testId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Input` ADD CONSTRAINT `Input_testId_fkey` FOREIGN KEY (`testId`) REFERENCES `Test`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
