'use strict';

var _         = require('lodash');
var helpers   = require(__dirname);
var Sequelize = helpers.generic.getSequelize();

module.exports = {
  generateTableCreationFileContent: function (args) {
    return helpers.template.render('migrations/create-table.js', {
      tableName:  args.name,
      attributes: helpers.model.transformAttributes(args.attributes),
      createdAt:  'created_at',
      updatedAt:  'updated_at',
      deletedAt:  'deleted_at'
    });
  },

  generateMigrationName: function (args) {
    return _.trimStart(_.kebabCase('create-' + args.name), '-');
  },

  generateTableCreationFile: function (args) {
    var migrationName = this.generateMigrationName(args);
    var migrationPath = helpers.path.getMigrationPath(migrationName);

    helpers.asset.write(migrationPath, this.generateTableCreationFileContent(args));
  }
};
