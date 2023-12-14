import { StoresService } from "../services/bookstore.service.js";

//업장조회

export class StoresController {
    storesService = new StoresService();

    getStores = async(req, res, next) => {
        try {
            const bookstore = await this.storesService.findAllStore();

            return res.status(200).json({ data: bookstore });
        } catch (err) {
            next(err);
        }
    };

    getMyStores = async(req, res, next) => {
        try {
            const userId = req.user.userId;
            const userType = req.user.usertype;
            console.log(userType);
            if (userType !== "OWNER") {
                return res.status(404).json({ error: " OWNER 아이디가 아닙니다." });
            }
            const bookstore = await this.storesService.findStoreByUserId(userId);

            return res.status(200).json({ data: bookstore });
        } catch (err) {
            next(err);
        }
    };

    //bookstore만들기(하나만)
    createStore = async(req, res, next) => {
        try {
            const userId = req.user.userId;
            const userType = req.user.usertype;

            if (userType !== "OWNER") {
                return res.status(404).json({ error: " OWNER 아이디가 아닙니다." });
            }
            if (!userId) {
                return res.status(401).json({ error: "User not logged in" });
            }

            const { imageUrl, name, price, address, description, status } = req.body;

            const confirmStore = await this.storesService.findStoreByUserId(userId);
            console.log(confirmStore);

            if (confirmStore !== null) {
                return res.status(401).json({ error: "You Already have a Store" });
            }

            const newStore = await this.storesService.createStore(
                imageUrl,
                name,
                price,
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

    //bookstore수정하기

    updateStore = async(req, res, next) => {
        try {
            const userType = req.user.userType;
            if (userType !== "OWNER") {
                return res.status(404).json({ error: " OWNER 아이디가 아닙니다." });
            }
            if (!req.user || !req.user.userId) {
                return res.status(401).json({ error: "User not logged in" });
            }
            const { bookstoreId } = req.params;
            const { imageUrl, name, price, address, description, status } = req.body;
            const userId = req.user.userId;

            const updatedAt = new Date();

            await this.storesService.updateStore(
                bookstoreId,
                imageUrl,
                name,
                price,
                address,
                description,
                status,
                updatedAt,
                userId,
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

    deleteStore = async(req, res, next) => {
        try {
            const userType = req.user.userType;
            if (userType !== "OWNER") {
                return res.status(404).json({ error: " OWNER 아이디가 아닙니다." });
            }
            const { bookstoreId } = req.params;

            if (!req.user || !req.user.userId) {
                return res.status(401).json({ error: "User not logged in" });
            }
            const userId = req.user.userId;

            await this.storesService.deleteStore(bookstoreId, userId);

            res.json({
                message: "Store 삭제에 성공하였습니다.",
            });
        } catch (error) {
            console.error(error);
            next(error);
        }
    };

    //bookstore 상세 조회 /

    getStoreById = async(req, res, next) => {
        try {
            const { bookstoreId } = req.params;

            const bookstore = await this.storesService.findStoreById(bookstoreId);

            return res.status(200).json({ data: bookstore });
        } catch (err) {
            next(err);
        }
    };
}