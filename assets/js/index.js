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
        $('.popup').css({'display': ''});
        let projName = projNameArr.filter(function(val, i){
            if( id === (i+1) ){
                return val;
            }
        });

        console.log('projName:::'+projName);
        let img = '';
        for(let i=1; i<=4; i++){
            img += '<img src="./img/'+projName+'/'+i+'.png" />';
        }
        $('.popup').append(img);
        
    }
});

