/*
  Warnings:

  - You are about to drop the column `city` on the `Products` table. All the data in the column will be lost.
  - Added the required column `verificationCode` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Products` DROP COLUMN `city`;

-- AlterTable
ALTER TABLE `Users` ADD COLUMN `verificationCode` VARCHAR(191) NOT NULL,
    MODIFY `usertype` VARCHAR(191) NOT NULL DEFAULT '고객님';
