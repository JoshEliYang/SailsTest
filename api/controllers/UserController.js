/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create : function(req,res) {
	  User.create(
      {name:'JoshYang',pwd:'Gobeta123'}
    ).exec(function (error, created){
      if (error) {
        res.send(error.toString())
      }
      res.send(created.toJSON());
    });
   },

  delete : function (req,res) {
	    User.delete().exec(function (error, deleted) {
        if (error) {
          res.send(error.toString())
        }
        res.send({'status': 'ok'})
      })
  },

  upgrade : function (req, res) {
	  User.upgrade().exec(function (error, upgraded) {
      if (error) {
        res.send(error.toString())
      }
      res.send({'status': 'ok'})
    })
   },


};

