//회원가입폼 // 
function submit_chk(myForm) {

    var reg1 = /^[가-힣]{2,5}$/;
    //010-234-5678
    var reg2 = /^010\d{3,4}\d{4}$/;

    var name = myForm.user_name;
    var tel = myForm.user_tel;
    var result1 = reg1.test(name.value);
    var result2 = reg2.test(tel.value);
    if (!result1) {
        alert("이름 입력 오류!");
        name.value = "";
        name.focus();
        return false;
    } else if (!result2) {
        alert("연락처 입력 오류!");
        tel.value = "";
        tel.focus();
        return false;
    }
}


function reset_chk(myForm) {
    var result = confirm("정말로 회원가입을 취소하시겠습니까?");
    if (result) {
        return true;//reset 기능 취소
    }
}
//메인배너이미지 슬라이드// 
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // 3초마다 다음 슬라이드로 이동
});






//상단 스크롤버튼 
document.addEventListener('DOMContentLoaded', function () {
    var backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
