"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 제품 테이블에 초기 데이터 삽입
    return queryInterface.bulkInsert(
      "products",
      [
        {
          title: "Product 1",
          content: "Description for Product 1",
          status: "FOR_SALE",
          createdAt: new Date(),
        },
        {
          title: "Product 2",
          content: "Description for Product 2",
          status: "FOR_SALE",
          createdAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    // 롤백 시 초기 데이터 삭제
    return queryInterface.bulkDelete("products", null, {});
  },
};
