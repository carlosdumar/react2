var $ = require('jquery');

$(()=> {
    $('.slick-dots li:gt(3)').css("display", "none");
   

    $('ul li button').click((event) => {
        
        var indexDot = $('.slick-dots li.slick-active button')["0"].textContent;
        var newDot = event.target.textContent;

        if(newDot > indexDot) {
            $(`.slick-dots li:nth-child(${indexDot})`).css("display", "none");
            $(`.slick-dots li:nth-child(${parseInt(newDot) + 1})`).css("display", "inline-block");
        }
        // console.log( event.target.textContent);
    })
 })

