$(function(){

    $('.slider-top__inner').slick({
        dots: false,
        arrows: true,
    });

    $('.slider-bottom__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    
    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
        spacing: "2px",
    });

    $(".products-star").rateYo({
        rating: 4.5,
        starWidth: "12px",
        readOnly: true,
        spacing: "2px",
    });
    

    var mixer=mixitup('.products__inner-box');
});