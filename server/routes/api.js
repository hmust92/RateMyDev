const express = require('express');

const router = new express.Router();

const db = require("../models/user.js");



router.get('/me', (req, res) => {
	console.log(req.user._id)
	res.status(200).json({
		message: "You're authorized to see this secret message.",
// user values passed through from auth middleware
		user: req.user
});
});

router.get('/:userId', (req, res) => {

	db.findById(req.params.userId)
	.then((userInfo) => {
		console.log(userInfo)
		res.json({
			user: userInfo
		})
	})
	.catch(() => res.status(404).json({

	}))
});

router.get("/users", (req, res) => {
	db.find({})
	.then(function(userResponse){
		res.status(200).json(userResponse)
	})
})

router.post("/me/survey", (req, res) => {
	console.log('post', req.body);

	// db.findById(req.user._id, (err, user) => {

	// 	console.log(user)
	// 	console.log(req.body)


	// 	user.selfSurveys = user.selfSurveys.concat([req.body])
	// 	user.save()
	// });

	db.findById(req.user._id)
	.then((userInfo) => {
		console.log(userInfo)
		console.log(req.body)
		console.log(req.user._id)


		userInfo.selfSurveys = userInfo.selfSurveys.concat([req.body])
		userInfo.save()
		res.json(req.body)
	});

	
})

// db.findByIdAndUpdate(
// 	req.user._id,
// 	{$push: {"survey": {tag: req.body.tag, points: req.body.points}}},
// 	{safe: true, upsert: true},
// 	function(err, model){
// 		console.log(err);
// 	}

// )
// db



// .findById({ _id: req.user._id })
// .then(user => {

// 	console.log(req.body)

// 	user.selfSurvey = [];
// 	req.body.data.forEach(survey => {
// 		user.selfSurvey.push({
// 			...survey,
// 			userId: req.user._id
// 		});
// 	})

// 	user.save();
// 	return user; 
// })
// .then((user) => {
// 	res.json(user)

// })


// router.post("/users/:userId/surveys", (req, res) => {
// 	console.log('post', req.body);

// 	// db.findById(req.user._id, (err, user) => {

// 	// 	console.log(user)
// 	// 	console.log(req.body)


// 	// 	user.selfSurveys = user.selfSurveys.concat([req.body])
// 	// 	user.save()
// 	// });

// 	db.findById(req.params.userId)
// 	.then((userInfo) => {
// 		console.log(userInfo)
// 		console.log(req.body)
// 		console.log(req.user._id)


// 		userInfo.communitySurveys = userInfo.communitySurveys.concat([{
// 			...req.body,
// 			userId: req.user._id 
// 		}])
// 		userInfo.save()
// 	});

	
// })




module.exports = router;
