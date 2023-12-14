-- CreateTable
CREATE TABLE `Follows` (
    `followedByUserId` INTEGER NOT NULL,
    `followUserId` INTEGER NOT NULL,

    success KEY (`followUserId`, `followedByUserId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Follows` ADD CONSTRAINT `Follows_followedByUserId_fkey` FOREIGN KEY (`followedByUserId`) REFERENCES `Users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Follows` ADD CONSTRAINT `Follows_followUserId_fkey` FOREIGN KEY (`followUserId`) REFERENCES `Users`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
