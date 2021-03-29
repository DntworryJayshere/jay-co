const path = require('path');
const router = require('express').Router();

//Define Routes
router.use('/users', require('./users'));
router.use('/auth', require('./auth'));
router.use('/profile', require('./profile'));
router.use('/bookings', require('./bookings'));
router.use('/subscribers', require('./subscribers'));

// For anything else, render the html page
router.use(function (req, res) {
	res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
