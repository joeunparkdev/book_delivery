const express = require("express");
const router = express.Router();
const { Product } = require("../models/product.model");
const { authenticate } = require("./auth.router");

// 상품 생성 API
router.post("/products", authenticate, async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;

  try {
    // Sequelize를 사용하여 상품 생성
    const newProduct = await Product.create({
      title,
      content,
      status: "FOR_SALE",
      userId,
    });

    res.json({
      message: "상품을 생성하였습니다.",
      productId: newProduct.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: "상품을 생성하는 중 오류가 발생했습니다." });
  }
});

// 상품 목록 조회 API
router.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: ["user"],
      order: [["createdAt", "DESC"]],
    });

    const responseData = products.map((product) => {
      return {
        productId: product.id,
        title: product.title,
        content: product.content,
        status: product.status,
        author: product.user.username, 
        createdAt: product.createdAt,
      };
    });

    res.status(200).json({ data: responseData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: "상품을 조회하는 중 오류가 발생했습니다." });
  }
});

// 상품 상세 조회 API
router.get("/products/:_productId", async (req, res) => {
  try {
    const productId = req.params._productId;
    const product = await Product.findByPk(productId, {
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
    };

    res.status(200).json({ data: responseData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: "상품을 상세 조회하는 중 오류가 발생했습니다." });
  }
});


module.exports = router;
