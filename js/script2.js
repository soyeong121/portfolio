$(function () {

    var is_clicked = false;

    $('#portfolio_img1').click(function (e) {
        e.preventDefault();
        $('#homepage').addClass('block');
    });
    $('#portfolio_img2').click(function (e) {
        e.preventDefault();
        $('#branding').addClass('block');
    });
    $('#portfolio_img3').click(function (e) {
        e.preventDefault();
        $('#package').addClass('block');
    });
    $('#portfolio_img4').click(function (e) {
        e.preventDefault();
        $('#poster').addClass('block');
    });
    $('#portfolio_img5').click(function (e) {
        e.preventDefault();
        $('#banner').addClass('block');
    });
    $('.close').click(function (e) {
        e.preventDefault();
        $('.modal').removeClass('block');
        $currentIndex = 0;
        $currentIndex2 = 0;
        $currentIndex3 = 0;
        $currentIndex4 = 0;
        $currentIndex5 = 0;
        is_clicked = true;
        goToSlideA(0);
        goToSlideB(0);
        goToSlideC(0);
        goToSlideD(0);
        goToSlideE(0);
        console.log($currentIndex);
    });

    var topButton = document.querySelector('#top-button');
    var profileButton = document.querySelector('#profile-button');
    var skillButton = document.querySelector('#skill-button');
    var portfolioButton = document.querySelector('#portfolio-button');
    var noticeButton = document.querySelector('#notice-button');

    topButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        // 페이지 고정
        page = 1;
    });
    profileButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ left: 1900, top: 0, behavior: 'smooth' });
        // 페이지 고정
        page = 2;
    });
    skillButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ left: 3800, top: 0, behavior: 'smooth' });
        // 페이지 고정
        page = 3;
    });
    portfolioButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ left: 5800, top: 0, behavior: 'smooth' });
        // 페이지 고정
        page = 4;
    });
    noticeButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ left: 7800, top: 0, behavior: 'smooth' });
        // 페이지 고정
        page = 5;
    });


    // --------------------------------------------------------------------------
    // scroll
    var $window = $(window),
        $html = $('html'),
        windowWidth = $window.width(),
        // pageIndex = 0,
        pageIndex = 1,
        lastPageIndex = $('.page').length - 1;

    pageIndex = Math.round($window.scrollLeft() / windowWidth);
    $html.animate({ scrollLeft: pageIndex * windowWidth }, 10);
    // console.log('pageIndex1' + pageIndex);

    // window.addEventListener('wheel', function(e){
    //     e.preventDefault();
    //     console.log('pageIndex2' + pageIndex);
    //     if($html.is(':animated')) return;
    //     if(e.deltaY > 0) {
    //         if(pageIndex >= lastPageIndex) return;
    //         pageIndex++;
    //         console.log('pageIndex3' + pageIndex);
    //     } else if (e.deltaY < 0) {
    //         if(pageIndex <= 0) return;
    //         pageIndex--;
    //         console.log('pageIndex4' + pageIndex);
    //     }

    //     var posLeft = windowWidth * pageIndex;
    //     $html.animate({scrollLeft : posLeft});
    // }, {passive:false});

    var page = 1;

    $(window).on("wheel", function (e) {
        if ($html.is(":animated")) return;
        if (e.originalEvent.deltaY > 0) {
            if (page == 5) return;
            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;
            page--;
        }
        var posLeft = (page - 1) * $(window).width();
        $html.animate({ scrollLeft: posLeft });
        console.log($(window).width());
        console.log(posLeft, page);
    });

    window.addEventListener('resize', function (e) {
        e.preventDefault();
        windowWidth = $window.width();
    });

    // --------------------------------------------------------------------------
    // homepage popup

    // var $imageList = document.querySelector('#page-container1');

    // function slideImage() {
    //     $imageList.animate({marginLeft : '-100%'}, function(){
    //         $imageList.removeAttr('style').children(':first').appendTo($imageList);
    //     });
    // }

    // $('#next1').on('click', slideImage);

    // $('#prev1').on('click', function(){
    //     $imageList.children(':last').prependTo($imageList);
    //     $imageList.css('margin-left', '-100%');
    //     $imageList.animate({marginLeft : 0});
    // });

    var $pageWrap = document.querySelector('.container'),
        $pageContainer = document.querySelector('#page-container1'),
        $portfolioPage = document.querySelectorAll('.page-container > li'),
        $navPrev = document.querySelector('.prev'),
        $currentIndex = 0,
        $navNext = document.querySelector('.next'),
        $pageCount = $portfolioPage.length;

    // 팝업 페이지 가로로 배열
    // for (var a = 0; a < $portfolioPage.length; a++) {
    //     $portfolioPage[a].style.left = a * 100 + '%';
    // }

    // 팝업 페이지 이동 함수
    function goToSlideA(a) {
        // is_clicked = false;
        // if( is_clicked && $currentIndex == 0){
        //     $pageContainer.style.left = 0;
        // }else {
        //     $pageContainer.style.left = -100 * a + '%';
        //     $pageContainer.classList.add('animated');
        //     $currentIndex = a;
        //     console.log($currentIndex);
        // }

        $pageContainer.animate({marginLeft : '-100%'}, function(){
            $pageContainer.removeAttr('style').children(':first').appendTo($pageContainer);
        });
    }

    // 버튼 클릭하면 이동 시키기
    // 팝업 끝나면 다시 처음으로 이동
    $navPrev.addEventListener('click', function () {
        if ($currentIndex == 0) {
            goToSlideA($pageCount - 1);
            console.log($currentIndex + '1');
        } else {
            console.log($currentIndex + '2');
            goToSlideA($currentIndex - 1);
        }
    });

    $navNext.addEventListener('click', function () {
        if ($currentIndex == $pageCount - 1) {
            console.log($currentIndex + '3');
            goToSlideA(0);
        } else {
            console.log($currentIndex + '4');
            goToSlideA($currentIndex + 1);
        }
    });

    // --------------------------------------------------------------------------
    // branding popup
    var $pageWrap2 = document.querySelector('.container'),
        $pageContainer2 = document.querySelector('#page-container2'),
        $portfolioPage2 = document.querySelectorAll('.portfolio-page2'),
        $navPrev2 = document.querySelector('#prev2'),
        $navNext2 = document.querySelector('#next2'),
        $currentIndex2 = 0,
        $pageCount2 = $portfolioPage2.length;

    // 팝업 페이지 가로로 배열
    for (var b = 0; b < $pageCount2; b++) {
        $portfolioPage2[b].style.left = b * 100 + '%';
    }

    // 팝업 페이지 이동 함수
    function goToSlideB(c) {
        is_clicked = false;
        if (is_clicked && $currentIndex2 == 0) {
            $pageContainer2.style.left = 0;
        } else {
            $pageContainer2.style.left = -100 * c + '%';
            $pageContainer2.classList.add('animated');
            $currentIndex2 = c;
        }
    }

    // 버튼 클릭하면 이동 시키기
    // 팝업 끝나면 다시 처음으로 이동
    $navPrev2.addEventListener('click', function () {
        if ($currentIndex2 == 0) {
            goToSlideB($pageCount2 - 1);
        } else {
            goToSlideB($currentIndex2 - 1);
        }
    });

    $navNext2.addEventListener('click', function () {
        if ($currentIndex2 == $pageCount2 - 1) {
            goToSlideB(0);
        } else {
            goToSlideB($currentIndex2 + 1);
        }
    });

    // --------------------------------------------------------------------------
    // package popup
    var $pageWrap3 = document.querySelector('.container'),
        $pageContainer3 = document.querySelector('#page-container3'),
        $portfolioPage3 = document.querySelectorAll('.portfolio-page3'),
        $navPrev3 = document.querySelector('#prev3'),
        $navNext3 = document.querySelector('#next3'),
        $currentIndex3 = 0,
        $pageCount3 = $portfolioPage3.length;

    // 팝업 페이지 가로로 배열
    for (var b = 0; b < $pageCount3; b++) {
        $portfolioPage3[b].style.left = b * 100 + '%';
    }

    // 팝업 페이지 이동 함수
    function goToSlideC(h) {
        is_clicked = false;
        if (is_clicked && $currentIndex3 == 0) {
            $pageContainer3.style.left = 0;
        } else {
            $pageContainer3.style.left = -100 * h + '%';
            $pageContainer3.classList.add('animated');
            $currentIndex3 = h;
        }
    }

    // 버튼 클릭하면 이동 시키기
    // 팝업 끝나면 다시 처음으로 이동
    $navPrev3.addEventListener('click', function () {
        if ($currentIndex3 == 0) {
            goToSlideC($pageCount3 - 1);
        } else {
            goToSlideC($currentIndex3 - 1);
        }
    });

    $navNext3.addEventListener('click', function () {
        if ($currentIndex3 == $pageCount3 - 1) {
            goToSlideC(0);
        } else {
            goToSlideC($currentIndex3 + 1);
        }
    });

    // --------------------------------------------------------------------------
    // poster popup
    var $pageWrap4 = document.querySelector('.container'),
        $pageContainer4 = document.querySelector('#page-container4'),
        $portfolioPage4 = document.querySelectorAll('.portfolio-page4'),
        $navPrev4 = document.querySelector('#prev4'),
        $navNext4 = document.querySelector('#next4'),
        $currentIndex4 = 0,
        $pageCount4 = $portfolioPage4.length;

    // 팝업 페이지 가로로 배열
    for (var d = 0; d < $pageCount4; d++) {
        $portfolioPage4[d].style.left = d * 100 + '%';
    }

    // 팝업 페이지 이동 함수
    function goToSlideD(i) {
        is_clicked = false;
        if (is_clicked && $currentIndex4 == 0) {
            $pageContainer4.style.left = 0;
        } else {
            $pageContainer4.style.left = -100 * i + '%';
            $pageContainer4.classList.add('animated');
            $currentIndex4 = i;
        }
    }

    // 버튼 클릭하면 이동 시키기
    // 팝업 끝나면 다시 처음으로 이동
    $navPrev4.addEventListener('click', function () {
        if ($currentIndex4 == 0) {
            goToSlideD($pageCount4 - 1);
        } else {
            goToSlideD($currentIndex4 - 1);
        }
    });
    $navNext4.addEventListener('click', function () {
        if ($currentIndex4 == $pageCount4 - 1) {
            goToSlideD(0);
        } else {
            goToSlideD($currentIndex4 + 1);
        }
    });

    // --------------------------------------------------------------------------
    // banner popup
    var $pageWrap5 = document.querySelector('#container5'),
        $pageContainer5 = document.querySelector('#page-container5'),
        $portfolioPage5 = document.querySelectorAll('.portfolio-page5'),
        $navPrev5 = document.querySelector('#prev5'),
        $navNext5 = document.querySelector('#next5'),
        $currentIndex5 = 0,
        $pageCount5 = $portfolioPage5.length;

    // 팝업 페이지 가로로 배열
    for (var f = 0; f < $pageCount5; f++) {
        $portfolioPage5[f].style.left = f * 100 + '%';
    }

    // 팝업 페이지 이동 함수
    function goToSlideE(j) {
        is_clicked = false;
        if (is_clicked && $currentIndex5 == 0) {
            $pageContainer5.style.left = 0;
        } else {
            $pageContainer5.style.left = -100 * j + '%';
            $pageContainer5.classList.add('animated');
            $currentIndex5 = j;
        }
    }

    // 버튼 클릭하면 이동 시키기
    // 팝업 끝나면 다시 처음으로 이동
    $navPrev5.addEventListener('click', function () {
        if ($currentIndex5 == 0) {
            goToSlideE($pageCount5 - 1);
        } else {
            goToSlideE($currentIndex5 - 1);
        }
    });
    $navNext5.addEventListener('click', function () {
        if ($currentIndex5 == $pageCount5 - 1) {
            goToSlideE(0);
        } else {
            goToSlideE($currentIndex5 + 1);
        }
    });
});