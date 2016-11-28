module.exports = (sequelize, DataTypes) => {
  const <%= name %> = sequelize.define('<%= name %>', {
    <% Object.keys(attributes).forEach(function(fieldName, index) { %>
      <%= fieldName %>: DataTypes.<%= attributes[fieldName].toUpperCase() %>
      <%= (Object.keys(attributes).length - 1) > index ? ',' : '' %>
    <% }) %>
  }, {
    <%= underscored ? 'underscored: true,' : '' %>
    classMethods: {
      // associate: (models) => {
        // associations can be defined here
      // }
    }
  });

  return <%= name %>;
};
