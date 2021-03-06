'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable('<%= tableName %>', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },

        <% _.each(attributes, function (dataType, fieldName) { %>
          <%= fieldName %>: {
            type: Sequelize.<%= dataType.toUpperCase() %>
          },
        <% }) %>

        <%= createdAt %>: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('NOW()')
        },

        <%= updatedAt %>: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('NOW()')
        },

        <%= deletedAt %>: {
          type: Sequelize.DATE
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('<%= tableName %>');
  }
};
