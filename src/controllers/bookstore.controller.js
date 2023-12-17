import { StoresService } from "../services/bookstore.service.js";

//업장조회
export class StoresController {
  storesService = new StoresService();

  getStores = async (req, res, next) => {
    try {
      const bookstore = await this.storesService.findAllStore();

      return res.status(200).json({ data: bookstore });
    } catch (err) {
      next(err);
    }
  };

  getMyStores = async (req, res, next) => {
    try {
      const userId = req.user.userId;
      const bookstore = await this.storesService.findMyStore(userId);

      return res.status(200).json({ data: bookstore });
    } catch (err) {
      next(err);
    }
  };

  createImage = async (req, res, next) => {
    try {
      const userId = req.user.userId;
      const imageUrl = req.file?.location;
      const imagePath = imageUrl?.split("com/")[1];
      const userType = req.user.usertype;

      if (userType !== "OWNER") {
        return res.status(404).json({ error: " OWNER 아이디가 아닙니다." });
      }
      if (!userId) {
        return res.status(401).json({ error: "User not logged in" });
      }

      const { name, address, description, status } = req.body;

      const confirmStore = await this.storesService.findStoreByUserId(userId);
      console.log(confirmStore);

      if (confirmStore !== null) {
        return res.status(401).json({ error: "You Already have a Store" });
      }

      const newStore = await this.storesService.createWithoutImage(
        name,
        address,
        description,
        status,
        userId,
        new Date(),
        new Date(),
      );

      res.json({
        message: "store을 생성하였습니다.",
        newStore,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  //bookstore만들기(하나만)
  createStore = async (req, res, next) => {
    try {
      const userId = req.user.userId;
      const imageUrl = req.file?.location;
      const [aws, imagePath] = imageUrl?.split("com/");
      if (!userId) {
        return res.status(401).json({ error: "User not logged in" });
      }

      const { name, address, description, status } = req.body;

      const confirmStore = await this.storesService.findStoreByUserId(userId);
      console.log(confirmStore);

      if (confirmStore !== null) {
        return res.status(401).json({ error: "You Already have a Store" });
      }

      const newStore = await this.storesService.createStore(
        imagePath || null,
        imageUrl || null,
        name,
        address,
        description,
        status,
        userId,
        new Date(),
        new Date(),
      );

      // 이미지 URL 생성 (예시: 현재 서버의 uploads 디렉토리 기준으로 URL 생성)
      const image = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
      }`;

      // 클라이언트에게 이미지 URL 응답
      return res.status(201).json({
        success: true,
        message: "Store created successfully",
        data: {
          store: newStore,
          imageUrl: image,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

  //bookstore수정하기
  updateStore = async (req, res, next) => {
    try {
      if (!req.user || !req.user.userId) {
        return res.status(401).json({ error: "User not logged in" });
      }
      const { bookstoreId } = req.params;
      const { name, address, description, status } = req.body;
      const userId = req.user.userId;
      const userType = req.user.usertype;

      const imageUrl = req.file?.location;
      const imagePath = imageUrl?.split("com/")[1];

      const updatedAt = new Date();
      await this.storesService.updateStore(
        bookstoreId,
        imagePath,
        imageUrl,
        name,
        address,
        description,
        status,
        updatedAt,
        userId,
        usertype,
      );

      res.json({
        message: "Store 수정에 성공하였습니다.",
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  //bookstore삭제하기
  deleteStore = async (req, res, next) => {
    try {
      const { bookstoreId } = req.params;

      if (!req.user || !req.user.userId) {
        return res.status(401).json({ error: "User not logged in" });
      }
      const userId = req.user.userId;
      const userType = req.user.usertype;
      await this.storesService.deleteStore(bookstoreId, userId, userType);

      res.json({
        message: "Store 삭제에 성공하였습니다.",
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  //bookstore 상세 조회 /
  getStoreById = async (req, res, next) => {
    try {
      const { bookstoreId } = req.params;
      const bookstore = await this.storesService.findStoreById(bookstoreId);

      return res.status(200).json({ data: bookstore });
    } catch (err) {
      next(err);
    }
  };
}
