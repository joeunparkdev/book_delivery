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
    console.log(userId);
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
      throw new Error("User not found");
    }
  
    // 비밀번호 비교 로직
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      throw new Error("Passwords do not match");
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

  updateUser = async (userId, username, password, confirmPassword, email) => {
    const existingUser = await this.usersRepository.findUserById(userId);
    if (!existingUser) {
      throw new Error("User not found");
    }

    if (password && confirmPassword && password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }
    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : existingUser.password;

    await this.usersRepository.updateUser(
      userId,
      username,
      hashedPassword,
      email,
    );

    const updatedUser = await this.usersRepository.findUserById(userId);

    return {
      userId: updatedUser.userId,
      username: updatedUser.username,
      email: updatedUser.email,
      password: updatedUser.password,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
    };
  };

  deleteUser = async (userId) => {
    const existingUser = await this.usersRepository.findUserById(userId);
    if (!existingUser) {
      throw new Error("User not found");
    }

    await this.usersRepository.deleteUser(userId);

    return {
      userId: existingUser.userId,
      username: existingUser.username,
      email: existingUser.email,
      password: existingUser.password,
      createdAt: existingUser.createdAt,
      updatedAt: existingUser.updatedAt,
    };
  };

  grantAdmin = async (userId) => {
    try {
      const user = await prisma.users.findUnique({
        where: { userId: userId },
      });

      if (!user) {
        throw new Error("사용자를 찾을 수 없습니다.");
      }

      // 사용자에게 관리자 권한을 부여
      await prisma.users.update({
        where: { id: userId },
        data: { isAdmin: true },
      });

      return { success: true, message: "관리자 권한 부여 성공" };
    } catch (error) {
      console.error(error);
      return { success: false, message: "관리자 권한 부여 중 에러 발생" };
    }
  }
  //관리자만 할수있는
  deleteAllUsers = async () => {
    try {
      const deletedUsers = await this.usersRepository.deleteAllUsers();

      return {
        message: "All users deleted successfully",
        deletedUserCount: deletedUsers.length,
      };
    } catch (error) {
      console.error(error);
      throw new Error("Failed to delete all users");
    }
  };
}
