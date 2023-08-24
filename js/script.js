$(function () {

    // kiosk mouseover시 이미지 변경
    let profile = $('#profile > button');
    profile.mouseover(function(){
        $('#profile').css('backgroundImage','url(images/kiosk2.png)');
        $('#profile-button').css('fontWeight','600');
    });
    profile.mouseout(function(){
        $('#profile').css('backgroundImage','url(images/kiosk.png)');
        $('#profile-button').css('fontWeight','');
    });

    let skill = $('#skill > button');
    skill.mouseover(function(){
        $('#skill').css('backgroundImage','url(images/kiosk2.png)');
        $('#skill-button').css('fontWeight','600');
    });
    skill.mouseout(function(){
        $('#skill').css('backgroundImage','url(images/kiosk.png)');
        $('#skill-button').css('fontWeight','');
    });
    
    let portfolio = $('#portfolio > button');
    portfolio.mouseover(function(){
        $('#portfolio').css('backgroundImage','url(images/kiosk2.png)');
        $('#portfolio-button').css('fontWeight','600');
    });
    portfolio.mouseout(function(){
        $('#portfolio').css('backgroundImage','url(images/kiosk.png)');
        $('#portfolio-button').css('fontWeight','');
    });

    // --------------------------------------------------------------------------
    // 액자 클릭 시 내용에 맞게 팝업창 띄움
    /*
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
    $('#portfolio_img6').click(function (e) {
        e.preventDefault();
        $('#xd').addClass('block');
    });
     $('.close').click(function (e) {
        e.preventDefault();
        $('.modal').removeClass('block');
    });
    */

    // close 누르거나 popup 외 클릭 시 팝업창 닫힘
   $('.modal.show').css('display','none');
    $(document).on("click",".btn-open", function (e){
        var target = $(this).attr("href");
        // $('.modal.show').css('display','block');
        $(target).css('display','block');
        $(target).addClass("show");
    });
    $(document).mouseup(function (e){
        var LayerPopup = $(".modal");
        if(LayerPopup.has(e.target).length === 0){
            $('.modal.show').css('display','none');
            // LayerPopup.removeClass("show");
        }
    });
    $('.close').click(function(e){
        e.preventDefault();
        // $('.modal.show').removeClass('show');
        $('.modal.show').css('display','none');
    });

    // --------------------------------------------------------------------------
    // 각각의 kiosk를 누르면 선택한 페이지로 이동
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

    var slides = document.querySelector('#page-container1 > li'),
        slide = document.querySelector('#page-container1'),
        photoCount = slides.length,
        duration = 400,
        photoIndex = 0;

    // 슬라이드 버튼 클릭 이벤트
    document.querySelector("#next1").addEventListener("click", nextSlideImage);
    document.querySelector("#prev1").addEventListener("click", prevSlideImage);

    // 다음 사진으로 슬라이드
    function nextSlideImage() {
        photoIndex++;
        photoIndex %= photoCount;
        slide.style.left = "-100%";
        slide.style.transition = duration + "ms";
        window.setTimeout(() => {
            slide.appendChild(slide.firstElementChild);
            slide.removeAttribute("style");
        }, duration);
    }
    // 이전 사진으로 슬라이드
    function prevSlideImage() {
        photoIndex--;
        photoIndex %= photoCount;
        slide.insertBefore(slide.lastElementChild, slide.firstChild);
        slide.style.left = "-100%";
        slide.style.transition = "0ms";
        window.setTimeout(() => {
            slide.style.left = 0;
            slide.style.transition = duration + "ms";
        });
    }

    // --------------------------------------------------------------------------
    // branding popup

    var slides2 = document.querySelector('#page-container2 > li'),
        slide2 = document.querySelector('#page-container2'),
        photoCount2 = slides2.length,
        duration2 = 400,
        photoIndex2 = 0;

    // 슬라이드 버튼 클릭 이벤트
    document.querySelector("#next2").addEventListener("click", nextSlideImage2);
    document.querySelector("#prev2").addEventListener("click", prevSlideImage2);

    // 다음 사진으로 슬라이드
    function nextSlideImage2() {
        photoIndex2++;
        photoIndex2 %= photoCount2;
        slide2.style.left = "-100%";
        slide2.style.transition = duration2 + "ms";
        window.setTimeout(() => {
            slide2.appendChild(slide2.firstElementChild);
            slide2.removeAttribute("style");
        }, duration2);
    }
    // 이전 사진으로 슬라이드
    function prevSlideImage2() {
        photoIndex2--;
        photoIndex2 %= photoCount2;
        slide2.insertBefore(slide2.lastElementChild, slide2.firstChild);
        slide2.style.left = "-100%";
        slide2.style.transition = "0ms";
        window.setTimeout(() => {
            slide2.style.left = 0;
            slide2.style.transition = duration2 + "ms";
        });
    }


    // --------------------------------------------------------------------------
    // package popup

    var slides3 = document.querySelector('#page-container3 > li'),
        slide3 = document.querySelector('#page-container3'),
        photoCount3 = slides3.length,
        duration3 = 400,
        photoIndex3 = 0;

    // 슬라이드 버튼 클릭 이벤트
    document.querySelector("#next3").addEventListener("click", nextSlideImage3);
    document.querySelector("#prev3").addEventListener("click", prevSlideImage3);

    // 다음 사진으로 슬라이드
    function nextSlideImage3() {
        photoIndex3++;
        photoIndex3 %= photoCount3;
        slide3.style.left = "-100%";
        slide3.style.transition = duration3 + "ms";
        window.setTimeout(() => {
            slide3.appendChild(slide3.firstElementChild);
            slide3.removeAttribute("style");
        }, duration3);
    }
    // 이전 사진으로 슬라이드
    function prevSlideImage3() {
        photoIndex3--;
        photoIndex3 %= photoCount3;
        slide3.insertBefore(slide3.lastElementChild, slide3.firstChild);
        slide3.style.left = "-100%";
        slide3.style.transition = "0ms";
        window.setTimeout(() => {
            slide3.style.left = 0;
            slide3.style.transition = duration3 + "ms";
        });
    }

    // --------------------------------------------------------------------------
    // poster popup

    var slides4 = document.querySelector('#page-container4 > li'),
        slide4 = document.querySelector('#page-container4'),
        photoCount4 = slides4.length,
        duration4 = 400,
        photoIndex4 = 0;

    // 슬라이드 버튼 클릭 이벤트
    document.querySelector("#next4").addEventListener("click", nextSlideImage4);
    document.querySelector("#prev4").addEventListener("click", prevSlideImage4);

    // 다음 사진으로 슬라이드
    function nextSlideImage4() {
        photoIndex4++;
        photoIndex4 %= photoCount4;
        slide4.style.left = "-100%";
        slide4.style.transition = duration4 + "ms";
        window.setTimeout(() => {
            slide4.appendChild(slide4.firstElementChild);
            slide4.removeAttribute("style");
        }, duration4);
    }
    // 이전 사진으로 슬라이드
    function prevSlideImage4() {
        photoIndex4--;
        photoIndex4 %= photoCount4;
        slide4.insertBefore(slide4.lastElementChild, slide4.firstChild);
        slide4.style.left = "-100%";
        slide4.style.transition = "0ms";
        window.setTimeout(() => {
            slide4.style.left = 0;
            slide4.style.transition = duration4 + "ms";
        });
    }

    // --------------------------------------------------------------------------
    // banner popup

    var slides5 = document.querySelector('#page-container5 > li'),
        slide5 = document.querySelector('#page-container5'),
        photoCount5 = slides5.length,
        duration5 = 400,
        photoIndex5 = 0;

    // 슬라이드 버튼 클릭 이벤트
    document.querySelector("#next5").addEventListener("click", nextSlideImage5);
    document.querySelector("#prev5").addEventListener("click", prevSlideImage5);

    // 다음 사진으로 슬라이드
    function nextSlideImage5() {
        photoIndex5++;
        photoIndex5 %= photoCount5;
        slide5.style.left = "-100%";
        slide5.style.transition = duration5 + "ms";
        window.setTimeout(() => {
            slide5.appendChild(slide5.firstElementChild);
            slide5.removeAttribute("style");
        }, duration5);
    }
    // 이전 사진으로 슬라이드
    function prevSlideImage5() {
        photoIndex5--;
        photoIndex5 %= photoCount5;
        slide5.insertBefore(slide5.lastElementChild, slide5.firstChild);
        slide5.style.left = "-100%";
        slide5.style.transition = "0ms";
        window.setTimeout(() => {
            slide5.style.left = 0;
            slide5.style.transition = duration5 + "ms";
        });
    }

    // --------------------------------------------------------------------------
    // xd popup

    var slides6 = document.querySelector('#page-container6 > li'),
        slide6 = document.querySelector('#page-container6'),
        photoCount6 = slides6.length,
        duration6 = 400,
        photoIndex6 = 0;

    // 슬라이드 버튼 클릭 이벤트
    document.querySelector("#next6").addEventListener("click", nextSlideImage6);
    document.querySelector("#prev6").addEventListener("click", prevSlideImage6);

    // 다음 사진으로 슬라이드
    function nextSlideImage6() {
        photoIndex6++;
        photoIndex6 %= photoCount6;
        slide6.style.left = "-100%";
        slide6.style.transition = duration6 + "ms";
        window.setTimeout(() => {
            slide6.appendChild(slide6.firstElementChild);
            slide6.removeAttribute("style");
        }, duration6);
    }
    // 이전 사진으로 슬라이드
    function prevSlideImage6() {
        photoIndex6--;
        photoIndex6 %= photoCount6;
        slide6.insertBefore(slide6.lastElementChild, slide6.firstChild);
        slide6.style.left = "-100%";
        slide6.style.transition = "0ms";
        window.setTimeout(() => {
            slide6.style.left = 0;
            slide6.style.transition = duration6 + "ms";
        });
    }
});