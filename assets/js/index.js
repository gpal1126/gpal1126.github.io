$(function(){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
    }

    let projNameArr = [ 'chinag9', 'ourhopes', 'hangul', 'surveypro', 'ido' ];

    $('.proj-img').on({
        'mouseover': function(){
            $(this).children('img').addClass('actived');
            $(this).append('<div class="more">더보기</div>');
        },
        'mouseout': function(){
            $(this).children('img').removeClass('actived');
            $(this).children('.more').remove();
        },
        'click': function(){

            let id = parseInt($(this).attr('id').split('_')[1]);
            $('body').css({'overflow': 'hidden'});
            $('.popup').css({'visibility': ''});
            //$('.swiper-container').css({'display':''});
            //$('.popup .gallery-thumbs').css({'display':''});
            let projName = projNameArr.filter(function(val, i){
                if( id === (i+1) ){
                    return val;
                }
            });

            console.log('projName:::'+projName);

            let img = '';
            for(let i=1; i<=4; i++){
                img += '<div class="swiper-slide" style="background-image:url(./img/'+projName+'/'+i+'.png)"></div>';
            }
            $('.popup .gallery-top .swiper-wrapper').append(img);
            $('.popup .gallery-thumbs .swiper-wrapper').append(img);

            swiperInit();   //스와이프 
        }
    });

    function swiperInit(){
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 5,
            slidesPerView: 5,
            loop: true,
            freeMode: true,
            loopedSlides: 5, //looped slides should be the same
            watchSlidesVisibility: false,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 5,
            loop:true,
            loopedSlides: 5, //looped slides should be the same
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        }); 
    }
});

