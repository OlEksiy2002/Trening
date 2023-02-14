$(function(){
$('.right__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 300 ,
    responsive: [
        {
          breakpoint: 1201,
          settings: {
            dots: false ,
          }
        },
    ]
})

$('.comment__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay:true,
    speed:550,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 881,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
        }
      },
  ]
}) 
$('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');

});

});