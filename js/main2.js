$(document).ready(function() {
    // navbar 안의 링크를 클릭했을 때 해당 페이지로 스크롤 이동합니다.
    $('#navbar a').click(function(event) {
        event.preventDefault(); // 기본 동작인 링크 이동을 막습니다.
        var targetId = $(this).attr('href'); // 클릭된 링크의 href 속성 값을 가져옵니다.
        var targetPosition = $(targetId).offset().top; // 해당 섹션의 상단 위치를 가져옵니다.
        
        // 모든 버튼의 클래스를 제거하여 원래 색으로 되돌립니다.
        $('#navbar a').removeClass('active');
        $(this).addClass('active'); // 클릭된 버튼에 active 클래스를 추가하여 색상을 변경합니다.

        $('html, body').animate({
            scrollTop: targetPosition // 해당 섹션의 상단으로 스크롤합니다.
        }, 200); // 부드러운 스크롤 효과를 위한 속도를 설정합니다. (밀리초 단위)
    });

    // 페이지 로드 시 비디오 선택
    var video = $('#video video')[0]; // jQuery 객체를 JavaScript DOM 객체로 변환

    // 비디오가 페이지에 도착하면 재생
    $(window).scroll(function() {
        var videoTop = $('#video').offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();
        if (videoTop < windowBottom && videoTop + $('#video').height() > $(window).scrollTop()) {
            video.play();
        } else {
            video.pause();
        }
    });
    // 페이지 로드 시 비디오 선택
    var video = $('#motion video')[0]; // jQuery 객체를 JavaScript DOM 객체로 변환

    // // 비디오가 페이지에 도착하면 재생
    // $(window).scroll(function() {
    //     var videoTop = $('#motion').offset().top;
    //     var windowBottom = $(window).scrollTop() + $(window).height();
    //     if (videoTop < windowBottom && videoTop + $('#motion').height() > $(window).scrollTop()) {
    //         video.play();
    //     } else {
    //         video.pause();
    //     }
    // });
    $(document).ready(function() {
        $('.thumbnail').click(function() {
            var description = $(this).data('description');
            $('#modal-description').text(description);
            $('#modal').css('display', 'block');
        });

        $('.close').click(function() {
            $('#modal').css('display', 'none');
        });
    });
    
});