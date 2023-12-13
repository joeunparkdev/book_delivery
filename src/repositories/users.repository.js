import { prisma } from "../utils/prisma/index.js";
export class UsersRepository {
  findAllUsers = async () => {
    // ORM인 Prisma에서 Users 모델의 findMany 메서드를 사용해 데이터를 요청합니다.
    const Users = await prisma.users.findMany();

    return Users;
  };

  findUserById = async (userId) => {
    // ORM인 Prisma에서 Users 모델의 findUnique 메서드를 사용해 데이터를 요청합니다.
    const user = await prisma.users.findUnique({
      where: { userId },
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
    const user = await prisma.users.findFirst({
      where: {
        email: email,
      },
    });

    return user;
  };

  createUser = async (username, password, email, usertype) => {
    try {
      // ORM인 Prisma에서 Users 모델의 create 메서드를 사용해 데이터를 요청합니다.
      const createdUser = await prisma.users.create({
        data: {
          username,
          password,
          email,
          isAdmin: false,
          usertype,
          points: usertype === "CLIENT" ? 1000000 : 0,
        },
      });
      return createdUser;
    } catch (error) {
      // Prisma 에러 코드 P2002는 중복된 키 관련 오류입니다.
      if (error.code === "P2002" && error.meta?.target === "Users_email_key") {
        console.error("이미 등록된 이메일 주소입니다.");
        throw new Error("이미 등록된 이메일 주소입니다.");
      }

      console.error(error);
      throw error;
    }
  };

  updateUser = async (userId, username, password, email, updatedAt) => {
    // ORM인 Prisma에서 Users 모델의 update 메서드를 사용해 데이터를 수정합니다.
    const updatedUser = await prisma.users.update({
      where: {
        userId,
      },
      data: {
        username,
        password,
        email,
        updatedAt,
      },
    });

    return updatedUser;
  };

  updateAdminUser = async (userId, updatedAt, isAdmin) => {
    // ORM인 Prisma에서 Users 모델의 update 메서드를 사용해 데이터를 수정합니다.
    const updatedAdminUser = await prisma.users.update({
      where: {
        userId,
      },
      data: {
        updatedAt: new Date(),
        isAdmin,
      },
    });

    return updatedAdminUser;
  };

  deleteUser = async (userId) => {
    // ORM인 Prisma에서 Users 모델의 delete 메서드를 사용해 데이터를 삭제합니다.
    const deletedUser = await prisma.users.delete({
      where: {
        userId,
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

  findFollowingByUserId = async (userId) => {
    try {
      const followingRelations = await prisma.follow.findMany({
        where: { followerId: userId },
        include: { following: true },
      });

      return followingRelations.map((relation) => {
        const user = relation.following;
        return {
          userId: user.userId,
          username: user.username,
        };
      });
    } catch (error) {
      console.error("findFollowingByUserId에서 오류 발생:", error);
      throw error;
    }
  };

  findFollowersByUserId = async (userId) => {
    try {
      const followersRelations = await prisma.follow.findMany({
        where: { followingId: userId },
        include: { follower: true },
      });

      return followersRelations.map((relation) => {
        const user = relation.follower;
        return {
          userId: user.userId,
          username: user.username,
        };
      });
    } catch (error) {
      console.error("findFollowersByUserId에서 오류 발생:", error);
      throw error;
    }
  };

  followUser = async (userId, targetUserId) => {
    await prisma.follow.create({
      data: {
        followingId: targetUserId,
        followerId: userId,
      },
    });
  };

  unfollowUser = async (userId, targetUserId) => {
    await prisma.follow.delete({
      where: {
        followingId_followerId: {
          followingId: targetUserId,
          followerId: userId,
        },
      },
    });
  };

  isFollowing = async (userId, targetUserId) => {
    const result = await prisma.follow.findUnique({
      where: {
        followingId_followerId: {
          followingId: targetUserId,
          followerId: userId,
        },
      },
    });

    return result;
  };

createKakaoUser = async (username, email, kakaoUserId, password) => {
  try {
    const userData = {
      username,
      email,
      kakaoUserId,
      password: "",
      isAdmin: false,
    };

    const newUser = await prisma.users.create({
      data: userData,
    });

    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
};

  findUserByKakaoId = async (kakaoUserId) => {
    try {
      const user = await prisma.users.findUnique({
        where: {
          kakaoUserId,
        },
      });

      return user;
    } catch (error) {
      console.error('Error finding user by Kakao ID:', error);
      throw new Error('Failed to find user by Kakao ID');
    }
  };

}
