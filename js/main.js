/*
class Scrooth {
    constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
        this.element = element;
        this.distance = strength;
        this.acceleration = acceleration;
        this.deceleration = deceleration;
        this.running = false;

        this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
        this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
        this.scroll = this.scroll.bind(this);
    }

    scrollHandler(e) {
        e.preventDefault();

        if (!this.running) {
            this.top = this.element.pageYOffset || this.element.scrollTop || 0;
            this.running = true;
            this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
            this.isDistanceAsc = true;
            this.scroll();
        } else {
            this.isDistanceAsc = false;
            this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
        }
    }

    scroll() {
        if (this.running) {
            this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
            Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
            Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;

            this.top += this.currentDistance;
            this.element.scrollTo(0, this.top);
            
            requestAnimationFrame(this.scroll);
        }
    }
}

const scroll = new Scrooth({
    element: window,
    strength: 25,
    acceleration: 2,
    deceleration: 0.9,
});
*/

/*
const lenis = new Lenis({
  duration: 1.2,
  easing: t => t,
  smooth: true,

  // ✅ 내부 스크롤 영역에서는 Lenis가 이벤트를 무시하게
  prevent: (node) => {
    return (
      node.closest?.('.lenis-prevent') ||
      node.closest?.('[data-lenis-prevent]') ||
      node.closest?.('.img__item') // 필요하면 이 줄은 유지, 아니면 지워
    );
  },
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


  // 앵커 링크 클릭 부드럽게 이동
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        lenis.scrollTo(target);
      }
    });
  });
  */



const picSwiper01 = new Swiper(
  "#picture .picture__swiper.--01 .swiper",
  {
    speed: 8000, // 숫자 클수록 천천히 흐름
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20, // 필요하면 조절
    allowTouchMove: false, // 터치 멈춤 방지 (선택)

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  }
);


const picSwiper02 = new Swiper(
  "#picture .picture__swiper.--02 .swiper",
  {
    speed: 8000, // 숫자 클수록 천천히 흐름
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20, // 필요하면 조절
    allowTouchMove: false, // 터치 멈춤 방지 (선택)

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true, // 👈 이거
    },
  }
);
