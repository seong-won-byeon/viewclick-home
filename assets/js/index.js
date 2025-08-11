


// --------------- GSAP 공통 효과 --------------- 
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
  ease:"none"
})
// --------------- GSAP 공통 효과 --------------- 





// --------------- 전체 부드러운 스크롤 --------------- 
// const lenis = new Lenis({
//     duration: 2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     wrapper: document.querySelector('.lenis-wrap'),
//     content: document.querySelector('.inner-lenis'),
// })
// lenis.on('scroll', ScrollTrigger.update)
// gsap.ticker.add((time)=>{
//   lenis.raf(time * 500)
// })
// gsap.ticker.lagSmoothing(0)
// --------------- 전체 부드러운 스크롤 --------------- 






// --------------- 메인 앨범 무한 슬라이드 --------------- 

function runBubblesLoop() {
  const bubbles = document.querySelectorAll('.speech-bubble');

  bubbles.forEach((bubble, index) => {
    setTimeout(() => {
      // 클래스 제거 후 강제 리렌더 → 다시 animate 클래스 추가
      bubble.classList.remove('show');
      void bubble.offsetWidth;
      bubble.classList.add('show');
    }, index * 100); // 각 말풍선 0.1초 간격으로 등장
  });

  // 전체 주기: 3초 애니메이션 + 3초 대기 = 6초 후 반복
  setTimeout(runBubblesLoop, 6000);
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(runBubblesLoop, 200); // 페이지 로드 후 3초 뒤 첫 실행
});

// --------------- 메인 앨범 무한 슬라이드 --------------- 





const steps = document.querySelectorAll('.steps li');
const images = document.querySelectorAll('.preview-img');

let currentIndex = -1;

const imageTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-how',
    start: 'top top',
    end: 'bottom bottom',
    // scroller: '.lenis-wrap',
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress; 
      const index = Math.floor(progress * steps.length);

      if (index !== currentIndex && index < steps.length) {
        currentIndex = index;
        activateStep(index);
      }
    },
  }
});

function activateStep(index) {
  steps.forEach((li, i) => {
    li.classList.toggle('active', i === index);
  });

  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}




// const rewardVideo = document.getElementById('rewardVideo');
const video = document.getElementById("rewardVideo");
video.addEventListener("ended", () => {
  video.currentTime = 0;
  video.play();
});

const visaulTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-how',
    start: 'bottom 80%',
    end: 'bottom top', // 약 100% 스크롤 거리 확보
    scrub: true,
    // scroller: '.lenis-wrap',
    onEnter: () => {
      video.currentTime = 0; 
      video.play();         
    }
  }
});
visaulTl.fromTo(
  '.sc-video',
  { autoAlpha: 0 },
  { autoAlpha: 1 },
  0 // timeline 시작 위치
);
visaulTl.fromTo(
  '.sc-video .sticky-wrapper .sticky',
  {
    padding: "84px 40px",
    zIndex: 1
  },
  {
    padding: "0px",
    zIndex: 500
  },
  0 // 같은 시간에 시작
);
visaulTl.fromTo(
  '.sc-video .video-area .content',
  {
    width: "50%",
    height: "50%",
    borderRadius: "80px",
    zIndex: 1
  },
  {
    width: "100%",
    height: "100%",
    borderRadius: "0px",
    zIndex: 500
  },
  0 // 같은 시간에 시작
);





// 서비스문의 - 자주하는 질문
$(".sc-contact .col-left .wrap").click(function() {
  $(this).find(".anw").stop().slideToggle(300);
  $(this).toggleClass('on');
});

