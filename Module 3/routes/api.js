var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
	if(req.method === 'GET') {
		return next();
	}
	if(!req.isAuthenticated()) {
		return res.redirect('/#login');
	}
	return next();
});

router.route('/posts')
	.post(function(req, res){
		res.send({message:"TODO create a new post in the database"});
	})
	.get(function(req, res){
		res.send({message:"TODO get all the posts in the database"});
	});

router.route('/posts/:id')
	.put(function(req,res){
		return res.send({message:'TODO modify an existing post by using param ' + req.params.id});
	})
	.get(function(req,res){
		return res.send({message:'TODO get an existing post by using param ' + req.params.id});
	})
	.delete(function(req,res){
		return res.send({message:'TODO delete an existing post by using param ' + req.params.id})
	});

module.exports = router;