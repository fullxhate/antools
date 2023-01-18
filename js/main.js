$(function(){
    $(".popular__item").slice(0, 6).show();
    $(".popular__more-link").on("click", function(e){
        e.preventDefault();
        $(".popular__item:hidden").slice(0, 3).slideDown();
        if($(".popular__item:hidden").length == 0) {
            $(".popular__more-link").css("display" ,"none")
        }
    });

})



let swiper = new Swiper('.swiper', {
    loop: false,
    trueMode: true,
    slidesPerView: 'auto',
    speed: 800,
    spaceBetween: 20,
    autoHeight: true,
    slidesOffsetAfter: 0,
    slidesOffsetBefore: 0,
    WatchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,


    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: {
        sensitivity: 1,
    }
});

