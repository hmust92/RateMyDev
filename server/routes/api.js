const express = require('express');

const router = new express.Router();

const db = require("../models/user.js");

var object = {
	tag: "Java",
	points: 10
}



router.get('/me', (req, res) => {
	console.log(req.user._id)
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    // user values passed through from auth middleware
    user: req.user
  });
});

router.get("/users", (req, res) => {
	db.find({})
	.then(function(userResponse){
		res.status(200).json(userResponse)
	})
})

router.post("/me/survey", (req, res) => {
	console.log('post', req.body);
	db
	.findById({ _id: req.user._id })
	.then(user => {

		console.log(req.body)

		user.selfSurvey = [];
		req.body.data.forEach(survey => {
			user.selfSurvey.push({
				...survey,
				userId: req.user._id
			});
		})

		user.save();
		return user; 
	})
	.then((user) => {
		res.json(user)

	})	
})







module.exports = router;
