import { prisma } from '../utils/prisma/index.js';
export class UsersRepository {

  findAllUsers = async () => {
    // ORM인 Prisma에서 Users 모델의 findMany 메서드를 사용해 데이터를 요청합니다.
    const Users = await prisma.Users.findMany();

    return Users;
  };

  findUserById = async (userId) => {
    // ORM인 Prisma에서 Users 모델의 findUnique 메서드를 사용해 데이터를 요청합니다.
    const user = await prisma.Users.findUnique({
      where: { userId: +userId },
    });

    if (!user) {
      throw new Error("user not found");
    }

    return user;
  };

  findUserByUsername = async (username) => {
    const user = await prisma.Users.findUnique({
      where: {
        username,
      },
    });

    return user;
  };

  findUserByEmail = async (email) => {
    const user = await prisma.Users.findUnique({
      where: {
        email,
      },
    });

    return user;
  };
  
  createUser = async (username, password, confirmPassword, email) => {
    // ORM인 Prisma에서 Users 모델의 create 메서드를 사용해 데이터를 요청합니다.
    const createdUser = await prisma.Users.create({
      data: {
        username,
        password,
        confirmPassword,
        email,
      },
    });

    return createdUser;
  };

  updateUser = async (username, password, confirmPassword, email) => {
    // ORM인 Prisma에서 Users 모델의 update 메서드를 사용해 데이터를 수정합니다.

    const existingUser = await this.findUserById(userId);

    const updatedUser = await prisma.Users.update({
      where: {
        userId: +userId,
      },
      data: {
        username,
        password,
        confirmPassword,
        email,
      },
    });

    return updatedUser;
  };

  deleteUser = async (userId) => {
    // ORM인 Prisma에서 Users 모델의 delete 메서드를 사용해 데이터를 삭제합니다.

    const existingUser = await this.findUserById(userId);

    const deletedUser = await prisma.Users.delete({
      where: {
        userId: +userId,
      },
    });

    return deletedUser;
  };

  deleteAllUsers = async () => {
    try {
      // ORM인 Prisma에서 Users 모델의 delete 메서드를 사용해 데이터를 삭제합니다.
      const deletedUsers = await prisma.Users.deleteMany();
      return deletedUsers;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
