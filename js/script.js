// ======================================
// 		Banner Plugin Section Start
// ======================================
$('.plugin').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 2,
    fade: true,
    autoplay: true,
    autoplaySpeed: 300,
});
// ======================================
// 	  Screenshot Plugin Section Start
// ======================================
$('.screenPlugin').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
});
// ======================================
// 		Video Plugin Section Start
// ======================================
$('.venobox').venobox(); 
// ====================================================
// 		    Feedback text Plugin 1 Start
// ====================================================
$('.txt_plug').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 2,
    fade: true,
    autoplaySpeed: 300,
    asNavFor: '.plugin2',
});
// ====================================================
// 		    Feedback img Plugin 2 Start
// ====================================================
$('.plugin2').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: 0,
    asNavFor: '.txt_plug',
});