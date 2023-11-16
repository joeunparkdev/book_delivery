"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 제품 테이블에 초기 데이터 삽입
    const usersData = await queryInterface.sequelize.query(
      "SELECT id FROM users;",
    );

    const userIds = usersData[0].map((user) => user.id);

    return queryInterface.bulkInsert(
      "products",
      [
        {
          title: "Product 1",
          content: "Description for Product 1",
          status: "FOR_SALE",
          userId: userIds[0], // Change this to the actual userId
          createdAt: new Date(),
        },
        {
          title: "Product 2",
          content: "Description for Product 2",
          status: "FOR_SALE",
          userId: userIds[1], // Change this to the actual userId
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
