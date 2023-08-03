const express = require('express');
const tourControll = require('./../controller/tourController')

const router = express.Router();

// router.route('/signup')
// .post(authControll.signUpUser)
// router.route('/login')
// .post(authControll.signInUser)
router.route('/')
.get(tourControll.getAlltour)
.post(tourControll.postTour);
router.route('/:id')
.get(tourControll.getTourOnID)
.patch(tourControll.patchTour)
.delete(tourControll.deleteTour);
router.route('/review/:id')
.post(tourControll.postReview)
.patch(tourControll.patchReview)
.delete(tourControll.deleteReview);

module.exports = router;