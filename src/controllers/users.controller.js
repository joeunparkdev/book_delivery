import bcrypt from "bcrypt";
import { UsersService } from "../services/users.service.js";

export class UsersController {
  userService = new UsersService();

  getUsers = async (req, res, next) => {
    try {
      const user = await this.userService.findAllUsers();

      return res.status(200).json({ data: user });
    } catch (err) {
      next(err);
    }
  };

  getMyInfo = async (req, res, next) => {
    try {
      const userId = req.user.userId;
      const existingUser = await this.userService.findUserById(+userId);
      if (!existingUser) {
        return res
          .status(404)
          .json({ errorMessage: "회원 조회에 실패하였습니다." });
      }
      return res.status(200).json({ data: existingUser });
    } catch (err) {
      next(err);
    }
  };

  modifyMyInfo = async (req, res, next) => {
    const { username, password, confirmPassword, email } = req.body;
    const userId = req.user.userId;
    try {
      const existingUser = await this.userService.findUserById(+userId);

      if (isNaN(userId)) {
        return res
          .status(400)
          .json({ errorMessage: "유효하지 않은 userId입니다." });
      }

      if (!existingUser) {
        return res
          .status(404)
          .json({ errorMessage: "회원 조회에 실패하였습니다." });
      }

      if (existingUser.userId !== userId) {
        return res
          .status(403)
          .json({ errorMessage: "회원 정보를 수정할 권한이 없습니다." });
      }

      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await this.userService.updateUser(+userId, username, email, hashedPassword,new Date());

      res.json({
        message: "상품 수정에 성공하였습니다."
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  deleteMyInfo = async (req, res, next) => {
    try {
      const userId = req.user.userId;
      
      if (!req.user || !req.user.userId) {
        return res.status(401).json({ error: "User not logged in" });
      }

      await this.userService.deleteUser(+userId);

      res.json({
        message: "회원 정보 삭제에 성공하였습니다.",
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  grantAdmin = async (req,res,next) => {
    try {
      const userId = +req.params.userId;
      const result = await this.userService.grantAdmin(userId);

      if (result.success) {
        return res.status(200).json(result);
      } else {
        return res.status(500).json(result);
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  deleteAllUsers = async (req, res, next) => {
    try {
      await this.userService.deleteAllUsers();

      res.json({
        message: "전체 상품 정보 삭제에 성공하였습니다.",
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  followUser = async (req, res, next) => {
    try {
      const userId = +req.user.userId;
      const targetUserId = +req.params.targetUserId;
      await this.userService.followUser(userId, targetUserId);
      res.status(200).json({ message: "Successfully followed the user." });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  unfollowUser = async (req, res, next) => {
    try {
      const userId = +req.user.userId;
      const targetUserId = +req.params.targetUserId;
      await this.userService.unfollowUser(userId, targetUserId);
      res.status(200).json({ message: "Successfully unfollowed the user." });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

}
export default UsersController;