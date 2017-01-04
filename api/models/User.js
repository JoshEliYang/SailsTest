/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'User',
  attributes: {
      id: {
        type: 'integer',
        autoIncrement: true,
        required: false,
        primaryKey: true
      },
      name : {
        type : 'String'

      },
      pwd : {
        type : 'String'
      }
  },
  toJSON : function () {
    var userJSON = {id : this.id, name: this.name, pwd : this.pwd}
    return userJSON;
  }
};

