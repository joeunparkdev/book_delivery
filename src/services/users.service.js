import { UsersRepository } from "../repositories/users.repository.js";
import bcrypt from "bcrypt";
import { ProductsRepository } from "../repositories/products.repository.js";

export class UsersService {
  usersRepository = new UsersRepository();
  productsRepository = new ProductsRepository();

  // findAllUsers 함수 수정
  findAllUsers = async () => {
    const users = await this.usersRepository.findAllUsers();

    // 각 사용자에 대해 제품 정보와 팔로잉 정보도 가져오기
    const usersWithProducts = await Promise.all(
      users.map(async (user) => {
        const products = await this.findAllProducts(user.userId);
        const following = await this.findAllFollowing(+user.userId);
        const followers = await this.findAllFollowers(+user.userId);

        return {
          userId: user.userId,
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          userType: user.usertype,
          points: user.points,
          products: products,
          following: following,
          followers: followers,
        };
      }),
    );

    // createdAt을 기준으로 정렬
    usersWithProducts.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    return usersWithProducts;
  };

  findAllFollowing = async (userId) => {
    const following = await this.usersRepository.findFollowingByUserId(userId);
    return following.map((user) => {
      return {
        userId: user.userId,
        username: user.username,
      };
    });
  };

  findAllFollowers = async (userId) => {
    const followers = await this.usersRepository.findFollowersByUserId(userId);
    return followers.map((user) => {
      return {
        userId: user.userId,
        username: user.username,
      };
    });
  };

  findAllProducts = async (userId) => {
    const products = await this.productsRepository.findProductsByUserId(userId);

    return products.map((product) => {
      return {
        productId: product.productId,
        name: product.name,
        price: product.price,
        description: product.description,
        status: product.status,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      };
    });
  };

  findUserById = async (userId) => {
    const user = await this.usersRepository.findUserById(userId);

    // 해당 사용자에게 등록된 상품 정보 가져오기
    const products = await this.findAllProducts(userId);
    const following = await this.findAllFollowing(userId);
    const followers = await this.findAllFollowers(userId);

    return {
      userId: user.userId,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      userType: user.usertype,
      points: user.points,
      products: products,
      following: following,
      followers: followers,
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
      userType: user.usertype,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  };

  checkEmailExists = async (email) => {
    try {
      const existingUser = await this.usersRepository.findUserByEmail(email);
      return existingUser;
    } catch (error) {
      console.error("Error checking email existence:", error);
      throw error;
    }
  };

  createCode = async (email, verificationCode) => {
    try {
      const createdCode = await this.usersRepository.createCode(
        email,
        verificationCode,
      );
      return createdCode;
    } catch (error) {
      console.error("Error creating verification code:", error);
      throw error;
    }
  };

  createUser = async (username, email, password, userType, isVerified) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await this.usersRepository.createUser(
      username,
      email,
      hashedPassword,
      userType,
      (isVerified = 1),
    );

    return {
      userId: createdUser.userId,
      username: createdUser.username,
      email: createdUser.email,
      password: createdUser.password,
      userType: createdUser.usertype,
      isVerified: createdUser.isVerified,
      createdAt: createdUser.createdAt,
      updatedAt: createdUser.updatedAt,
    };
  };

  updateUser = async (userId, username, email, hashedPassword, updatedAt) => {
    try {
      const existingUser = await this.usersRepository.findUserById(userId);

      if (!existingUser) {
        throw new Error("회원 조회 실패");
      }

      await this.usersRepository.updateUser(
        userId,
        username,
        email,
        hashedPassword,
        updatedAt,
      );
    } catch (error) {
      console.error(error);
      throw new Error("상품 수정 실패");
    }
  };

  deleteUser = async (userId) => {
    try {
      const existingUser = await this.usersRepository.findUserById(userId);
      if (!existingUser) {
        throw new Error("회원 조회에 실패하였습니다.");
      }

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
    }
  };

  //관리자만 할 수 있는
  grantAdmin = async (userId) => {
    try {
      const user = await this.usersRepository.findUserById(userId);

      if (!user) {
        throw new Error("사용자를 찾을 수 없습니다.");
      }

      if (user.isAdmin) {
        return {
          success: false,
          message: "이미 관리자 권한이 부여되었습니다.",
        };
      }

      // 사용자에게 관리자 권한을 부여
      const updatedAt = new Date();
      await this.usersRepository.updateAdminUser(userId, updatedAt, true);

      return { success: true, message: "관리자 권한 부여 성공" };
    } catch (error) {
      console.error(error);
      return { success: false, message: "관리자 권한 부여 중 에러 발생" };
    }
  };

  // 관리자만 할 수 있는
  removeAdmin = async (userId) => {
    try {
      // 유효한 userId 확인
      if (!userId) {
        throw new Error("유효한 userId가 제공되지 않았습니다.");
      }

      // 사용자 정보 조회
      const user = await this.usersRepository.findUserById(userId);

      // 사용자가 존재하지 않는 경우 에러 처리
      if (!user) {
        throw new Error("사용자를 찾을 수 없습니다.");
      }

      // 현재 로그인한 사용자가 관리자인지 확인
      if (!user.isAdmin) {
        throw new Error("관리자만 권한 취소를 할 수 있습니다.");
      }

      // 사용자 권한 취소
      const updatedAt = new Date();
      await this.usersRepository.updateAdminUser(userId, updatedAt, false);

      return { success: true, message: "관리자 권한 취소 성공" };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "관리자 권한 취소 중 에러 발생: " + error.message,
      };
    }
  };

  // 관리자만 할 수 있는
  deleteAllUsers = async () => {
    try {
      // 모든 사용자 정보 가져오기
      const allUsers = await this.usersRepository.findAllUsers();

      if (allUsers.length === 0) {
        return {
          message: "삭제할 사용자가 없습니다.",
          deletedUserCount: 0,
        };
      }

      // 사용자들이 관리자 권한을 가지고 있는지 확인
      const isAdminPresent = allUsers.some((user) => user.isAdmin);

      if (isAdminPresent) {
        throw new Error(
          "삭제할 사용자 중에서 관리자가 존재하여 삭제할 수 없습니다.",
        );
      }

      const deletedUsers = await this.usersRepository.deleteAllUsers();

      return {
        message: "전체 회원 삭제 완료",
        deletedUserCount: deletedUsers.length,
      };
    } catch (error) {
      console.error(error);
      throw new Error("전체 회원 삭제 실패: " + error.message);
    }
  };

  followUser = async (userId, targetUserId) => {
    // 팔로우 대상 사용자가 존재하는지 확인
    const isTargetUserExists =
      await this.usersRepository.findUserById(targetUserId);
    if (!isTargetUserExists) {
      throw new Error("Target user does not exist.");
    }
    // 사용자가 자기 자신을 팔로우하지 않도록 체크
    if (userId === targetUserId) {
      throw new Error("Cannot follow yourself.");
    }

    // 이미 팔로우한 사용자를 다시 팔로우하지 않도록 체크
    const isAlreadyFollowing = await this.usersRepository.isFollowing(
      userId,
      targetUserId,
    );
    if (isAlreadyFollowing) {
      throw new Error("Already following the user.");
    }

    await this.usersRepository.followUser(userId, targetUserId);
  };

  unfollowUser = async (userId, targetUserId) => {
    // 언팔로우 대상 사용자가 존재하는지 확인
    const isTargetUserExists =
      await this.usersRepository.findUserById(targetUserId);
    if (!isTargetUserExists) {
      throw new Error("Target user does not exist.");
    }
    // 사용자가 자기 자신을 언팔로우하지 않도록 체크
    if (userId === targetUserId) {
      throw new Error("Cannot unfollow yourself.");
    }

    // 언팔로우할 사용자를 아직 팔로우하지 않은 경우 예외 처리
    const isFollowing = await this.usersRepository.isFollowing(
      userId,
      targetUserId,
    );
    if (!isFollowing) {
      throw new Error("Not following the user.");
    }
    await this.usersRepository.unfollowUser(userId, targetUserId);
  };

  createKakaoUser = async (kakaoId, email, nickname) => {
    try {
      const newUser = await this.usersRepository.createKakaoUser(
        nickname,
        email,
        kakaoId,
      );
      return {
        userId: newUser.userId,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      };
    } catch (error) {
      console.error("Error creating Kakao user:", error);
      throw new Error("Failed to create Kakao user");
    }
  };

  findUserByKakaoId = async (kakaoUserId) => {
    try {
      const user = await this.usersRepository.findUserByKakaoId(kakaoUserId);
      return user;
    } catch (error) {
      console.error("Error finding user by Kakao ID:", error);
      throw new Error("Failed to find user by Kakao ID");
    }
  };

  kakaoLogin = async (kakaoId, email, nickname) => {
    try {
      // Prisma를 사용하여 이메일이 일치하는 사용자 찾기
      const user = await this.usersRepository.findUserByEmail(email);
      // 사용자가 존재하지 않으면 새로운 사용자 생성
      if (!user) {
        await this.createKakaoUser(kakaoId, email, nickname);
      }
      const prismaUser = await this.usersRepository.findUserByEmail(email);
      const userId = prismaUser.userId;
      return userId;
    } catch (error) {
      // 오류 처리
      console.error(error);
      throw new Error("카카오 로그인 중 오류 발생");
    }
  };

  checkVerificationCode = async (email, verificationCode, maxAttempts = 3) => {
    try {
      let attempts = 0;

      while (attempts < maxAttempts) {
        const verify = await this.usersRepository.findCodeByEmail(email);
        console.log(verify);
        const expiredDate =
          await this.usersRepository.findExpiredDateByCode(verify);
        console.log(expiredDate);

        if (!verify || expiredDate === null) {
          throw new Error(
            "유효하지 않은 검증 코드이거나 코드의 유효 기간이 만료되었습니다.",
          );
        }

        if (verify !== verificationCode) {
          attempts++;
          if (attempts === maxAttempts) {
            throw new Error(
              `최대 검증 시도 횟수를 초과했습니다 (${maxAttempts}).`,
            );
          }

          console.log(
            `유효하지 않은 검증 코드. 남은 시도 횟수: ${
              maxAttempts - attempts
            }`,
          );
        } else {
          return verify;
        }
      }

      // 시도 횟수가 초과됨
      throw new Error(`최대 검증 시도 횟수를 초과했습니다 (${maxAttempts}).`);
    } catch (error) {
      throw new Error(
        error.message || "검증 코드 확인 중 오류가 발생했습니다.",
      );
    }
  };
}
