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


router.get('/profile/:userId', (req, res) => {

	db.findById(req.params.userId)
	.then((userInfo) => {
		// console.log(userInfo)
		res.json({
			user: userInfo
		})
	})
	.catch(() => res.status(404).json({

	}))
});

router.get("/users", (req, res) => {
	console.log(req.query)
	if (!req.query.tags){
		db.find({})
		.then(function(userResponse){
			res.status(200).json(userResponse)
		})
	}
	else if (req.query.tags){
		const mongoArray = req.query.tags.map((tag) =>{
			return {"selfSurveys": {$elemMatch: {technicalTag: tag}}}
		})
		console.log(JSON.stringify(mongoArray))

		db.find({
			$and: mongoArray
		}).then((response) => {
			console.log(response)
			res.json(response)

		})


	}
})

// db.getCollection('users').find({
//     $and: [
//         { 'selfSurveys': { $elemMatch: { technicalTag: 'java' } } },
//         { 'selfSurveys': { $elemMatch: { technicalTag: 'javascript' } } },
//     ]
// });

router.post("/me/survey", (req, res) => {
	// console.log('post', req.body);

	// db.findById(req.user._id, (err, user) => {

	// 	console.log(user)
	// 	console.log(req.body)


	// 	user.selfSurveys = user.selfSurveys.concat([req.body])
	// 	user.save()
	// });

	db.findById(req.user._id)
	.then((userInfo) => {
		// console.log(userInfo)
		// console.log("================")
		// console.log(req.body.firstName)
		// console.log("================")

		// console.log(req.user._id)
		if(req.body.firstName && req.body.firstName !== null) {
			userInfo.firstName = req.body.firstName;
		}

		if(req.body.lastName && req.body.lastName !== null) {
			userInfo.lastName = req.body.lastName;
		}

		if(req.body.jobTitle && req.body.jobTitle !== null) {
			userInfo.jobTitle = req.body.jobTitle;
		}

		if(req.body.portfolioURL && req.body.portfolioURL !== null) {
			userInfo.portfolioURL = req.body.portfolioURL;
		}

		if(req.body.profilePicURL && req.body.profilePicURL !== null) {
			userInfo.profilePicURL = req.body.profilePicURL;
		}

		if(req.body.phoneNumber && req.body.phoneNumber !== null) {
			userInfo.phoneNumber = req.body.phoneNumber;
		}
		
		if(req.body.zipcode && req.body.zipcode !== null) {
			userInfo.zipcode = req.body.zipcode;
		}

		if(req.body.relocation && req.body.relocation !== null) {
			userInfo.relocation = req.body.relocation;
		}

		if(req.body.linkedInURL && req.body.linkedInURL !== null) {
			userInfo.linkedInURL = req.body.linkedInURL;
		}

		if(req.body.githubURL && req.body.githubURL !== null) {
			userInfo.githubURL = req.body.githubURL;
		}

		if(req.body.aboutYou && req.body.aboutYou !== null) {
			userInfo.aboutYou = req.body.aboutYou;
		}

		if(req.body.impossibleQuestion && req.body.impossibleQuestion !== null) {
			userInfo.impossibleQuestion = req.body.impossibleQuestion;
		}

		if(req.body.deadlineQuestion && req.body.deadlineQuestion !== null) {
			userInfo.deadlineQuestion = req.body.deadlineQuestion;
		}

		if(req.body.teamQuestion && req.body.teamQuestion !== null) {
			userInfo.teamQuestion = req.body.teamQuestion;
		}

		if(req.body.personalityQuestion && req.body.personalityQuestion !== null) {
			userInfo.personalityQuestion = req.body.personalityQuestion;
		}

		if(req.body.dissatisfactionQuestion && req.body.dissatisfactionQuestion !== null) {
			userInfo.dissatisfactionQuestion = req.body.dissatisfactionQuestion;
		}

		if(req.body.passionQuestion && req.body.passionQuestion !== null) {
			userInfo.passionQuestion = req.body.passionQuestion;
		}

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
