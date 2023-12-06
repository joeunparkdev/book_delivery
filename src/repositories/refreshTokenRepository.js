
import { prisma } from '../utils/prisma/index.js';

export class RefreshTokenRepository {

  findTokenByUserId = async (userId) => {
    const user = await prisma.Users.findUnique({
      where: {
        userId: userId,
      },
      select: {
        refreshTokens: true,
      },
    });

    const refreshTokens = user ? user.refreshTokens : null;

    return refreshTokens;
  };

  createToken = async (userId, token, expirationDate) => {
    return await prisma.RefreshToken.create({
      data: {
        userId: userId,
        token: token,
        expirationDate: expirationDate.toJSDate(),
      },
    });
  };

  deleteToken = async (userId) => {
    return await prisma.RefreshToken.deleteMany({
      where: {
        userId: userId,
      },
    });
  };

  deleteExpiredTokens = async (userId) => {
    return await prisma.RefreshToken.deleteMany({
      where: {
        userId: userId,
        expirationDate: {
          lte: new Date(),
        },
      },
    });
  };
}
