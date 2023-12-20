'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('photos', "student_id",
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "students",
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: "CASCADE"
      })
  },

  async down() { }
};
