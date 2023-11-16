const { PRODUCT_STATUS } = require("../constants/constants.js");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 사용자 데이터 조회
    const [users] = await queryInterface.sequelize.query('SELECT id FROM users;');

    // 사용자 ID 추출
    const userIds = users.map(user => user.id);

    // 제품 데이터
    const productsData = [
      {
        title: "Product 1",
        content: "Description for Product 1",
        status: PRODUCT_STATUS.FOR_SALE,
        userId: userIds[0],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product 2",
        content: "Description for Product 2",
        status: PRODUCT_STATUS.FOR_SALE,
        userId: userIds[1],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // 제품 데이터 삽입
    await queryInterface.bulkInsert("products", productsData, {});
  },

  down: async (queryInterface, Sequelize) => {
    // 제품 데이터 삭제
    await queryInterface.bulkDelete("products", null, {});
  },
};
