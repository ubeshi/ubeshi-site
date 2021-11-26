import gsap from 'gsap';
import {
  ScrollTrigger,
} from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

export default function locomotiveScroll () {
  let locoScroll = null;

  const scrollEl = document.querySelector('#scroll-page');

  locoScroll = new LocomotiveScroll({
    el: scrollEl,
    lerp: 0.075,
    mobile: {
      smooth: false,
    },
    multiplier: 0.9,
    smooth: true,
    tablet: {
      smooth: false,
    },
  });

  locoScroll.on('scroll', ScrollTrigger.update);
  locoScroll.on('touchmove', ScrollTrigger.update);
  locoScroll.on('touchstart', ScrollTrigger.update);
  locoScroll.on('touchend', ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(scrollEl, {
    getBoundingClientRect () {
      return {
        height: window.innerHeight,
        left: 0,
        top: 0,
        width: window.innerWidth,
      };
    },
    pinType: scrollEl.style.transform ? 'transform' : 'fixed',

    scrollTop (value) {
      if (locoScroll) {
        return arguments.length ?
          locoScroll.scrollTo(value, 0, 0) :
          locoScroll.scroll.instance.scroll.y;
      }

      return null;
    },
  });

  const lsUpdate = () => {
    if (locoScroll) {
      locoScroll.update();
    }
  };

  ScrollTrigger.addEventListener('refresh', lsUpdate);
  ScrollTrigger.refresh();

  return () => {
    if (locoScroll) {
      ScrollTrigger.removeEventListener('refresh', lsUpdate);
      locoScroll.destroy();
      locoScroll = null;
    }
  };
}
