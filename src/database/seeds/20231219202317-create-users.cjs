const bcrypt = require("bcrypt")

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
      [
        {
          name: 'John',
          email: "john@gmail.com",
          password_hash: await bcrypt.hash("123456", 10),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Paul',
          email: "paul@gmail.com",
          password_hash: await bcrypt.hash("123456", 10),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Neno',
          email: "neno@gmail.com",
          password_hash: await bcrypt.hash("123456", 10),
          created_at: new Date(),
          updated_at: new Date()
        },
      ],
      {});
  },

  async down() { }
};
