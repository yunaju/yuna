// $(function(){
//   // alert('dd')
//   const menu = $('header ul li'),
//         contents = $('main > section');

//   menu.click(function(){
//       $(this).addClass('on').siblings().removeClass('on');
//       let idx = $(this).index();
//       console.log(idx);
//       let section = contents.eq(idx);
//       let sectionD = section.offset().top - 114;
//       $('html,body').animate({
//           scrollTop: sectionD
//       });
//   });

//   $(window).scroll(function(){
//       contents.each(function(){
//           if($(this).offset().top <= $(window).scrollTop() + 114){
//               let idx =  $(this).index();
//               menu.removeClass('on');
//               menu.eq(idx).addClass('on');
//           }
//       });
//   });

//   document.addEventListener("DOMContentLoaded", function() {
//       var slider = document.querySelector(".slider");
//       var slides = document.querySelectorAll(".slide");
//       var slideWidth = slides[0].offsetWidth;
//       var currentIndex = 0; // 현재 슬라이드 인덱스
    
//       // 오른쪽 화살표 클릭 시 다음 슬라이드로 이동하는 함수
//       document.querySelector(".next").addEventListener("click", function() {
//           if (currentIndex < slides.length - 1) {
//               currentIndex++;
//               slider.style.transform = "translateX(-" + currentIndex * slideWidth + "px)";
//           }
//       });
    
//       // 왼쪽 화살표 클릭 시 이전 슬라이드로 이동하는 함수
//       document.querySelector(".prev").addEventListener("click", function() {
//           if (currentIndex > 0) {
//               currentIndex--;
//               slider.style.transform = "translateX(-" + currentIndex * slideWidth + "px)";
//           }
//       });
//   });
  
//   // Smooth scroll for navbar links
//   document.querySelectorAll('#navbar a').forEach(function(anchor) {
//       anchor.addEventListener('click', function(event) {
//           event.preventDefault();
//           var targetSectionId = this.getAttribute('href').substring(1);
//           var targetSection = document.getElementById(targetSectionId);
//           targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       });
//   });

//   // Smooth scroll function
//   function scrollToSection(element) {
//       window.scroll({
//           behavior: 'smooth',
//           left: 0,
//           top: element.offsetTop
//       });
//   }

//   window.addEventListener('scroll', function() {
//       var sections = document.querySelectorAll('.section');
//       var navbarLinks = document.querySelectorAll('#navbar a');
      
//       sections.forEach(function(section, index) {
//           var top = section.offsetTop;
//           var height = section.clientHeight;
//           if (window.pageYOffset >= top - height / 2 && window.pageYOffset < top + height - height / 2) {
//               navbarLinks[index].classList.add('active');
//           } else {
//               navbarLinks[index].classList.remove('active');
//           }
//       });
//   });
// });

// $(document).ready(function() {
//   // 각 메뉴 버튼에 대한 클릭 이벤트 처리
//   $('#navbar a').click(function(event) {
//       // 클릭한 링크의 href 속성값 가져오기
//       var targetId = $(this).attr('href');
//       // 해당 섹션으로 스크롤 이동
//       $('html, body').animate({
//           scrollTop: $(targetId).offset().top
//       }, 800); // 부드러운 스크롤을 위한 animate 함수 사용 (0.8초 동안)
//   });
// });


$(document).ready(function() {
  // 페이지 내의 각 섹션의 위치 정보를 저장합니다.
  var sectionPositions = {};
  $('main > section').each(function() {
    sectionPositions[$(this).attr('id')] = $(this).offset().top;
  });

  // 메뉴 버튼 클릭 시 해당 섹션으로 부드러운 스크롤 이동합니다.
  $('#navbar a').click(function(event) {
    event.preventDefault();
    var targetId = $(this).attr('href');
    $('html, body').animate({
      scrollTop: sectionPositions[targetId.substring(1)] // href에서 '#'을 제외한 값이 섹션의 ID입니다.
    }, 800);
  });

  // 스크롤 이벤트를 통해 현재 보여지는 섹션에 따라 메뉴 버튼의 활성화 상태를 변경합니다.
  $(window).scroll(function() {
    var currentPosition = $(window).scrollTop();
    $('main > section').each(function() {
      var sectionTop = $(this).offset().top;
      var sectionHeight = $(this).outerHeight();
      if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
        var targetId = '#' + $(this).attr('id');
        $('#navbar a').removeClass('active');
        $('#navbar a[href="' + targetId + '"]').addClass('active');
      }
    });
  });
});