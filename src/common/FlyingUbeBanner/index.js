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
import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

class FlyingUbeBanner extends PureComponent {
  componentDidMount () {
    gsap.from(this.mascot, 1.5, {
      ease: Power0,
      repeat: -1,
      y: 100,
      yoyo: true,
    });
    gsap.timeline({
      scrollTrigger: {
        horizontal: false,
        scrub: 1,
        start: 0,
      },
      smoothChildTiming: true,
    }).to(this.mascot, {
      duration: 1000,
      rotate: 360,
      transformOrigin: '200px -200px',
    });
    gsap.to(this.cloudone, 10, {
      ease: 'none',
      repeat: -1,
      x: 3000,
    });
    gsap.to(this.cloudtwo, 8, {
      ease: 'none',
      repeat: -1,
      x: 4000,
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
      </>
    );
  }
}

export default FlyingUbeBanner;
