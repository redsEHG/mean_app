var express = require('express');
var router = express.Router();
var controllerLocations = require('../controllers/locations');
var controllerOthers = require('../controllers/others');

/*var homePageController = function(req, res) {
    res.render('index', {
        title: 'Express'
    });
};*/

//получаем раницы местоположения
router.get('/', controllerLocations.homelist);
router.get('/location', controllerLocations.locationInfo);
router.get('/location/review/new', controllerLocations.addReview);

//получаем другие страницы
router.get('/about', controllerOthers.about);

module.exports = router;