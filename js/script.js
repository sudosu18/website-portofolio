$('.page-scroll').on('click', function(e){
    
    // ambil isi hreff
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top-50
    });

    e.preventDefault();
});

// parallax
$(window).scroll(function(){

    // jumbotron

    var wSroll = $(this).scrollTop();
    
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wSroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wSroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wSroll/1 +'%)'
    });


    // portofolio
    if(wSroll > $('.portofolio').offset().top - 300){

        $('.portofolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portofolio .thumbnail').eq(i).addClass('muncul')
            }, 300 * (i+1));
        });

    }

});

