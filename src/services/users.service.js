import { UsersRepository } from "../repositories/users.repository.js";
import bcrypt from "bcrypt";

export class UsersService {
  usersRepository = new UsersRepository();

  findAllUsers = async () => {
    const users = await this.usersRepository.findAllUsers();

    users.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    return users.map((user) => {
      return {
        userId: user.userId,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    });
  };

  findUserById = async (userId) => {

    const user = await this.usersRepository.findUserById(userId);

    return {
      userId: user.userId,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  };

  signInUser = async (email, password) => {
    const user = await this.usersRepository.findUserByEmail(email);
  
    if (!user) {
      throw new Error("회원 불일치");
    }
  
    // 비밀번호 비교 로직
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      throw new Error("비밀번호 불일치");
    }
  
    return {
      userId: user.userId,
      username: user.username,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  };
  
  createUser = async (username, password, email) => {
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const createdUser = await this.usersRepository.createUser(
      username,
      hashedPassword,
      email
    );
  
    return {
      userId: createdUser.userId,
      username: createdUser.username,
      email: createdUser.email,
      password: createdUser.password,
      createdAt: createdUser.createdAt,
      updatedAt: createdUser.updatedAt,
    };
  };

  updateUser = async (userId, username, email, hashedPassword, updatedAt) => {
    try {
      console.log("userId="+userId);

    const existingUser = await this.usersRepository.findUserById(userId);
    console.log(existingUser);

    if (!existingUser) {
      throw new Error("회원 조회 실패");
    }

    await this.usersRepository.updateUser(
      userId,
      username,
      email,
      hashedPassword,
      updatedAt
    );

    } catch (error) {
      console.error(error);
      throw new Error("상품 수정 실패");
    }
  };

  deleteUser = async (userId) => {
  try{
    console.log("userId="+userId);
    const existingUser = await this.usersRepository.findUserById(userId);
    console.log(existingUser);
    if (!existingUser) {
      throw new Error("회원 조회에 실패하였습니다.");
  }
  console.log("existingUser.userId="+existingUser.userId);
  console.log("userId="+userId);

  if (existingUser.userId !== userId) {
      throw new Error("회원 상품을 삭제할 권한이 없습니다.");
  }
    await this.usersRepository.deleteUser(userId);
  
    return {
      message: "회원 삭제 완료",
  };
} catch (error) {
  console.error(error);
  throw new Error("회원 삭제 실패");
  };
};

  grantAdmin = async (userId) => {
    try {
      const user = await prisma.users.findUnique({
        where: { userId },
      });

      if (!user) {
        throw new Error("사용자를 찾을 수 없습니다.");
      }

      // 사용자에게 관리자 권한을 부여
      await prisma.users.update({
        where: { userId },
        data: { isAdmin: true },
      });

      return { success: true, message: "관리자 권한 부여 성공" };
    } catch (error) {
      console.error(error);
      return { success: false, message: "관리자 권한 부여 중 에러 발생" };
    }
  };

  //관리자만 할수있는
  deleteAllUsers = async () => {
    try {
      const deletedUsers = await this.usersRepository.deleteAllUsers();

      return {
        message: "전체 회원 삭제 완료",
        deletedUserCount: deletedUsers.length,
      };
    } catch (error) {
      console.error(error);
      throw new Error("전체 상품 삭제 실패");
    }
  };
}
