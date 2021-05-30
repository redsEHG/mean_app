/*получаем домашнюю страницу*/
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Home'
    });
};

//получаем страницу с информацией о местоположениях
module.exports.locationInfo = function(req, res){
    res.render('index', { title: 'Location info'});
};

//получем страницу добавления отзыва
module.exports.addReview = function(req, res){
    res.render('index', { title: 'Add review'});
};