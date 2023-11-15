"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 사용자 테이블에 초기 데이터 삽입
    return queryInterface.bulkInsert(
      "users",
      [
        {
          username: "user1",
          password: "hashedpassword1",
          email: "user1@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "user2",
          password: "hashedpassword2",
          email: "user2@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    // 롤백 시 초기 데이터 삭제
    return queryInterface.bulkDelete("users", null, {});
  },
};
