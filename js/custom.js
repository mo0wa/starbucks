$(document).ready(function(){

    $('.btn_close').on('click',function(){
        $('.popup').slideUp();
    });

    $('.header_inner .gnb').on('mouseenter',function(){
        $('.header').stop().animate({height:500},300);
    });

    $('.header_inner .gnb').on('mouseleave',function(){
        $('.header').stop().animate({height:152},300);
    });

    $(".best-slider").slick({
        swipe:false,        //마우스나 손가락으로 좌우이동가능
        autoplay:true,      //자동실행
        pauseOnHover:false, //마우스호버시 멈춤 설정
        autoplaySpeed:2000, //다음장으로 넘어가는 속도
        speed:1000,         //애니메이션속도
        vertical:false,     //세로 슬라이드 여부
        fade:false,         //페이드인 페이드아웃 애니메이션 설정 여부
        arrows:true,       //좌우 화살표 표시 여부
        dots:false,         //도트 표시 여부
        slidesToShow:4,     //한 화면에 보여질 콘텐츠 개수
        slidesToScroll:1,   //스크롤 한번에 움직일 콘텐츠 개수
    });

    $(".section6 .tap_btn li").on('click',function(e){
        //변수 지정은 function안에 적어주고 사용해야함
        //a 태그 기본 이벤트 막기 변수
        e.preventDefault();
        $(".section6 .tap_btn li").removeClass('on');
        $(this).addClass('on');

        var num = $(this).index();

        $('.section6 .tap').hide();
        $('.section6 .tap').eq(num).show();
    });

    /*
    :eq(n) 해당 요소들 중에서 n번째의 요소
    :not(n) 해당 요소들 중에서 n번째가 아닌 요소
    :gt(n) 해당 요소들 중에서 n번째 보다 큰 요소(greater than~  ~보다 큰)
    */
    $('.section6 .tap:gt(0)').hide();
});