var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/*var homePageController = function(req, res) {
    res.render('index', {
        title: 'Express'
    });
};*/

//получаем домашнюю страницу
router.get('/', ctrlMain.index);

module.exports = router;