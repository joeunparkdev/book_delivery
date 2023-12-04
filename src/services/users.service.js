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
      throw new Error("User not found");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Passwords do not match");
    }

    return {
      userId: user.userId,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  };

  signUpUser = async (username, password, confirmPassword, email) => {
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await this.usersRepository.createUser(
      username,
      hashedPassword,
      email,
    );

    return {
      userId: createdUser.userId,
      username: createdUser.username,
      email: createdUser.email,
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
      createdAt: existingUser.createdAt,
      updatedAt: existingUser.updatedAt,
    };
  };

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
