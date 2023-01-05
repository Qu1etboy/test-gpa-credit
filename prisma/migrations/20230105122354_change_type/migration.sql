/*
  Warnings:

  - You are about to alter the column `gpa` on the `Input` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `credit` on the `Input` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Input` MODIFY `gpa` DOUBLE NOT NULL,
    MODIFY `credit` INTEGER NOT NULL;
