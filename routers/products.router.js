const express = require("express");
const router = express.Router();
const { models } = require("../models");
const authMiddleware = require("../middlewares/auth-middleware.js");
const { PRODUCT_STATUS } = require("../constants/constants.js");

const handleSequelizeError = (res, error) => {
  if (error.name === "SequelizeValidationError") {
    const validationErrors = error.errors.map((err) => ({
      field: err.path,
      message: err.message,
    }));
    res
      .status(400)
      .json({ errorMessage: "입력이 유효하지 않습니다.", validationErrors });
  } else {
    res
      .status(500)
      .json({ errorMessage: `오류가 발생했습니다. ${error.message || error}` });
  }
};
// POST /api/products
router.post("/", async (req, res) => {
  try {
    // 클라이언트에서 전달한 상품 정보를 사용하여 새로운 상품 생성
    const newProduct = await models.Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("상품 추가 실패:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 상품 생성 API
router.post("/create", authMiddleware, async (req, res, next) => {
  const { title, content } = req.body;
  const userId = req.user.id;

  try {
    const newProduct = await models.Product.create({
      title,
      content,
      status: PRODUCT_STATUS.FOR_SALE,
      userId,
    });

    res.json({
      message: "상품을 생성하였습니다.",
      productId: newProduct.id,
    });
    next();
  } catch (error) {
    console.error(error);
    handleSequelizeError(res, error);
  }
});

// 상품 수정 API
router.put("/modify/:productId", authMiddleware, async (req, res, next) => {
  const { title, content, status } = req.body;
  const userId = req.user.id;
  const productId = req.params.productId;

  try {
    const existingProduct = await models.Product.findByPk(productId);

    if (!existingProduct) {
      return res
        .status(404)
        .json({ errorMessage: "상품 조회에 실패하였습니다." });
    }

    if (existingProduct.userId !== userId) {
      return res
        .status(403)
        .json({ errorMessage: "해당 상품을 수정할 권한이 없습니다." });
    }

    await existingProduct.update({
      title,
      content,
      status: status || existingProduct.status,
    });

    res.json({
      message: "상품 수정에 성공하였습니다.",
      productId: existingProduct.id,
    });
    next();
  } catch (error) {
    console.error(error);
    handleSequelizeError(res, error);
  }
});

// 상품 삭제 API
router.delete("/delete/:productId", authMiddleware, async (req, res ,next) => {
  const userId = req.user.id;
  const productId = req.params.productId;

  try {
    const existingProduct = await models.Product.findByPk(productId);

    if (!existingProduct) {
      return res
        .status(404)
        .json({ errorMessage: "상품 조회에 실패하였습니다." });
    }

    if (existingProduct.userId !== userId) {
      return res
        .status(403)
        .json({ errorMessage: "해당 상품을 삭제할 권한이 없습니다." });
    }

    await existingProduct.destroy();

    res.json({
      message: "상품 삭제에 성공하였습니다.",
    });
    next();
  } catch (error) {
    console.error(error);
    handleSequelizeError(res, error);
  }
});

// 상품 목록 조회 API
router.get("/list", async (req, res) => {
  try {

    const { sort } = req.query;
    const orderCriteria = sort && sort.toUpperCase() === "ASC" ? "ASC" : "DESC";

    const products = await models.Product.findAll({
      include: [{ model: models.User, as: "user" }],
      order: [["createdAt", orderCriteria]],
    });    
    console.log("Products:", products);
    if (!products) {
      return res.status(404).json({ errorMessage: "상품을 찾을 수 없습니다." });
    }

    const responseData = products.map((product) => ({
      productId: product.id,
      title: product.title,
      content: product.content,
      status: product.status,
      author: product.user ? product.user.username : null,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    }));

    res.status(200).json({ data: responseData });
  } catch (error) {
    console.error(error);
    handleSequelizeError(res, error);
  }
});

// 상품 상세 조회 API
router.get("/list/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await models.Product.findByPk(productId, {
      include: ["user"],
    });

    if (!product) {
      return res.status(404).json({ errorMessage: "상품을 찾을 수 없습니다." });
    }

    const responseData = {
      productId: product.id,
      title: product.title,
      content: product.content,
      status: product.status,
      author: product.user.username,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };

    res.status(200).json({ data: responseData });
  } catch (error) {
    console.error(error);
    handleSequelizeError(res, error);
  }
});

module.exports = router;
