import gsap, {
  Power0,
} from 'gsap';
import {
  ScrollTrigger,
} from 'gsap/ScrollTrigger';
import React, {
  PureComponent,
} from 'react';
import cloudone from '../../assets/cloud-1.png';
import cloudtwo from '../../assets/cloud-2.png';
import mascot from '../../assets/mascot.gif';
import mountains from '../../assets/mountains.svg';
import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

class FlyingUbeBanner extends PureComponent {
  componentDidMount () {
    gsap.from(this.mascot, 1.5, {
      ease: Power0,
      repeat: -1,
      yoyo: true,
      yPercent: -10,
    });
    gsap.timeline({
      scrollTrigger: {
        horizontal: false,
        scrub: 1,
        start: 0,
      },
      smoothChildTiming: true,
    }).to(this.mascot, {
      duration: 0.1,
      rotate: 360,
      transformOrigin: '200px -200px',
      y: '-3000px',
      zIndex: 1000,
    });
    gsap.to(this.cloudone, 10, {
      ease: 'none',
      repeat: -1,
      x: 3 * window.innerWidth,
    });
    gsap.to(this.cloudtwo, 8, {
      ease: 'none',
      repeat: -1,
      x: 3 * window.innerWidth,
    });
    gsap.to(this.mountains, 15, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });
    gsap.to(this.mountains2, 15, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });

    gsap.to(this.cloudone, {
      ease: 'none',
      scrollTrigger: {
        scrub: true,
        start: 0,
      },
      yPercent: -30,
    });

    gsap.to(this.cloudtwo, {
      ease: 'none',
      scrollTrigger: {
        scrub: true,
        start: 0,
      },
      yPercent: -30,
    });
  }

  render () {
    return (
      <>
        <img
          alt='Main ube'
          className={styles['hero-main-image']}
          ref={(element) => {
            this.mascot = element;
          }}
          src={mascot}
        />
        <img
          alt='Cloud one'
          className={styles['cloud-1']}
          ref={(element) => {
            this.cloudone = element;
          }}
          src={cloudone}
        />
        <img
          alt='Cloud two'
          className={styles['cloud-2']}
          ref={(element) => {
            this.cloudtwo = element;
          }}
          src={cloudtwo}
        />
        <img
          alt='Mountains'
          className={styles.mountains}
          ref={(element) => {
            this.mountains = element;
          }}
          src={mountains}
        />
        <img
          alt='Mountains2'
          className={styles['mountains-2']}
          ref={(element) => {
            this.mountains2 = element;
          }}
          src={mountains}
        />
      </>
    );
  }
}

export default FlyingUbeBanner;
