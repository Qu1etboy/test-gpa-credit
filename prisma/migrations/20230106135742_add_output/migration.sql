/*
  Warnings:

  - You are about to drop the column `actual` on the `TestResult` table. All the data in the column will be lost.
  - You are about to drop the column `credit` on the `TestResult` table. All the data in the column will be lost.
  - You are about to drop the column `expected` on the `TestResult` table. All the data in the column will be lost.
  - You are about to drop the column `gpa` on the `TestResult` table. All the data in the column will be lost.
  - You are about to drop the column `result` on the `TestResult` table. All the data in the column will be lost.
  - Added the required column `testName` to the `TestResult` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TestResult` DROP COLUMN `actual`,
    DROP COLUMN `credit`,
    DROP COLUMN `expected`,
    DROP COLUMN `gpa`,
    DROP COLUMN `result`,
    ADD COLUMN `testName` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Output` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `author` VARCHAR(191) NOT NULL,
    `gpa` DOUBLE NOT NULL,
    `credit` INTEGER NOT NULL,
    `actual` VARCHAR(191) NOT NULL,
    `expected` VARCHAR(191) NOT NULL,
    `result` VARCHAR(191) NOT NULL,
    `testResultId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Output` ADD CONSTRAINT `Output_testResultId_fkey` FOREIGN KEY (`testResultId`) REFERENCES `TestResult`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
