
import { prisma } from '../utils/prisma/index.js';

export class RefreshTokenRepository {

  findTokenByUserId = async (userId) => {
    const user = await prisma.users.findUnique({
      where: {
        userId
      },
      select: {
        refreshTokens: true,
      },
    });

    const refreshTokens = user ? user.refreshTokens : null;

    return refreshTokens;
  };

  createToken = async (userId, token, expirationDate) => {
    return await prisma.refreshToken.create({
      data: {
        userId,
        token,
        expirationDate: expirationDate.toJSDate(),
      },
    });
  };

  deleteToken = async (userId) => {
    return await prisma.refreshToken.deleteMany({
      where: {
        userId,
      },
    });
  };

  deleteExpiredTokens = async (userId) => {
    return await prisma.refreshToken.deleteMany({
      where: {
        userId,
        expirationDate: {
          lte: new Date(),
        },
      },
    });
  };
}
