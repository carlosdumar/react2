var $ = require('jquery');

$(window).on('resize', () => {
     if($(window).width() < 500) {
        $('.slick-dots li:gt(3)').css("display", "none");
     }
})
 

