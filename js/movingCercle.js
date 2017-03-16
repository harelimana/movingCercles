var screen_width = $(window).width(); 
var screen_height = $(window).height();

var coordonneesMoon = {
    left: screen_width / 2,
    top: screen_height / 2
};
var coordonneesTerre = {
    left: (screen_width / 2) - 10,
    top: screen_height / 2
};

$('.moon').offset(coordonneesMoon); //$
$('.terre').offset(coordonneesTerre);

$('body').keydown(function (e) {
    //console.log(e.which);
    switch (e.which) {
        case 37:
            coordonneesMoon.left -= 10;
            coordonneesTerre.left -= 10;
            break;
        case 39:
            coordonneesMoon.left += 10;
            coordonneesTerre.left += 10;
            break;
        case 38:
            coordonneesMoon.top -= 10;
            coordonneesTerre.top -= 10;
            break;
        case 40:
            coordonneesMoon.top += 10;
            coordonneesTerre.top += 10;
            break;
        default:
            break;
    }
    $('.moon').offset(coordonneesMoon);
    $('.terre').offset(coordonneesTerre);
});