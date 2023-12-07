import { prisma } from '../utils/prisma/index.js';
export class UsersRepository {

  findAllUsers = async () => {
    // ORM인 Prisma에서 Users 모델의 findMany 메서드를 사용해 데이터를 요청합니다.
    const Users = await prisma.users.findMany();

    return Users;
  };
  
  findUserById = async (userId) => {
    console.log(userId);
    // ORM인 Prisma에서 Users 모델의 findUnique 메서드를 사용해 데이터를 요청합니다.
    const user = await prisma.users.findUnique({
      where: { userId: +userId },
    });

    if (!user) {
      throw new Error("user not found");
    }

    return user;
  };

  findUserByUsername = async (username) => {
    const user = await prisma.users.findUnique({
      where: {
        username: username,
      },
    });

    return user;
  };

  findUserByEmail = async (email) => {
    console.log("REPO"+email);
    const user = await prisma.users.findFirst({
      where: {
        email: email,
      },
    });
  
    return user;
  };
  
  createUser = async (username, password, email) => {
    try {
    // ORM인 Prisma에서 Users 모델의 create 메서드를 사용해 데이터를 요청합니다.
    const createdUser = await prisma.users.create({
      data: {
        username,
        password,
        email,
        isAdmin: false,
      },
    });
    return createdUser;
  } catch (error) {
    // Prisma 에러 코드 P2002는 중복된 키 관련 오류입니다.
    if (error.code === 'P2002' && error.meta?.target === 'Users_email_key') {
      console.error('이미 등록된 이메일 주소입니다.');
      throw new Error('이미 등록된 이메일 주소입니다.');
    }

    console.error(error);
    throw error;
  }
  };

  updateUser = async (username, password, confirmPassword, email) => {
    // ORM인 Prisma에서 Users 모델의 update 메서드를 사용해 데이터를 수정합니다.

    const existingUser = await this.findUserById(userId);

    
  const updatedUser = await prisma.users.update({
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

    const deletedUser = await prisma.users.delete({
      where: {
        userId: +userId,
      },
    });

    return deletedUser;
  };

  deleteAllUsers = async () => {
    try {
      // ORM인 Prisma에서 Users 모델의 delete 메서드를 사용해 데이터를 삭제합니다.
      const deletedUsers = await prisma.users.deleteMany();
      return deletedUsers;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
