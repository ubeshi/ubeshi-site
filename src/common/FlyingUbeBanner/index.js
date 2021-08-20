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
import mountainslayerone from '../../assets/mountains-layer-1.svg';
import mountainslayertwo from '../../assets/mountains-layer-2.svg';
import mountainslayerthree from '../../assets/mountains-layer-3.svg';
import mountainslayerfour from '../../assets/mountains-layer-4.svg';
import mountainslayerfive from '../../assets/mountains-layer-5.svg';
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

    this.timeline = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
      },
    });

    this.timeline.to(this.mascot, {
      rotate: 30,
      x: -window.innerWidth,
      y: '-500px',
      zIndex: 1000,
    }, 0.01);

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

    gsap.to(this.mountains11, 15, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });
    gsap.to(this.mountains12, 15, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });

    gsap.to(this.mountains21, 25, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });
    gsap.to(this.mountains22, 25, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });
    gsap.to(this.mountains31, 35, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });
    gsap.to(this.mountains32, 35, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });
    gsap.to(this.mountains41, 45, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });
    gsap.to(this.mountains42, 45, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });
    gsap.to(this.mountains51, 55, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });
    gsap.to(this.mountains52, 55, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });

    this.timeline.to(this.mountains11, {
      y: '-500px',
    }, 0);
    this.timeline.to(this.mountains12, {
      y: '-500px',
    }, 0);

    this.timeline.to(this.mountains21, {
      y: '-400px',
    }, 0);
    this.timeline.to(this.mountains22, {
      y: '-400px',
    }, 0);

    this.timeline.to(this.mountains31, {
      y: '-300px',
    }, 0);
    this.timeline.to(this.mountains32, {
      y: '-300px',
    }, 0);

    this.timeline.to(this.mountains41, {
      y: '-200px',
    }, 0);
    this.timeline.to(this.mountains42, {
      y: '-200px',
    }, 0);

    this.timeline.to(this.mountains51, {
      y: '-100px',
    }, 0);
    this.timeline.to(this.mountains52, {
      y: '-100px',
    }, 0);

    this.timeline.to(this.footerbase, {
      y: '-500px',
    }, 0);

    this.timeline.to(this.cloudone, {
      y: '-1200px',
    }, 0);
    this.timeline.to(this.cloudtwo, {
      y: '-1200px',
    }, 0);

    this.timeline.to(this.bannertext, {
      y: '-500px',
    }, 0);

    ScrollTrigger.refresh();
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
        <div
          className={styles['banner-text']}
          ref={(element) => {
            this.bannertext = element;
          }}
        >
          <div className={styles['banner-text-left']}>
            Big,<br />
            Bright
          </div>
          <div className={styles['banner-text-right']}>
            &amp; Ube-<br />
            tiful
          </div>
        </div>
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
          className={`${styles.mountains} ${styles['mountains-layer-1']}`}
          ref={(element) => {
            this.mountains11 = element;
          }}
          src={mountainslayerone}
        />
        <img
          alt='Mountains2'
          className={`${styles['mountains-2']} ${styles['mountains-layer-1']}`}
          ref={(element) => {
            this.mountains12 = element;
          }}
          src={mountainslayerone}
        />
        <img
          alt='Mountains'
          className={`${styles.mountains} ${styles['mountains-layer-2']}`}
          ref={(element) => {
            this.mountains21 = element;
          }}
          src={mountainslayertwo}
        />
        <img
          alt='Mountains2'
          className={`${styles['mountains-2']} ${styles['mountains-layer-2']}`}
          ref={(element) => {
            this.mountains22 = element;
          }}
          src={mountainslayertwo}
        />
        <img
          alt='Mountains'
          className={`${styles.mountains} ${styles['mountains-layer-3']}`}
          ref={(element) => {
            this.mountains31 = element;
          }}
          src={mountainslayerthree}
        />
        <img
          alt='Mountains'
          className={`${styles['mountains-2']} ${styles['mountains-layer-3']}`}
          ref={(element) => {
            this.mountains32 = element;
          }}
          src={mountainslayerthree}
        />
        <img
          alt='Mountains'
          className={`${styles.mountains} ${styles['mountains-layer-4']}`}
          ref={(element) => {
            this.mountains41 = element;
          }}
          src={mountainslayerfour}
        />
        <img
          alt='Mountains'
          className={`${styles['mountains-2']} ${styles['mountains-layer-4']}`}
          ref={(element) => {
            this.mountains42 = element;
          }}
          src={mountainslayerfour}
        />
        <img
          alt='Mountains'
          className={`${styles.mountains} ${styles['mountains-layer-5']}`}
          ref={(element) => {
            this.mountains51 = element;
          }}
          src={mountainslayerfive}
        />
        <img
          alt='Mountains'
          className={`${styles['mountains-2']} ${styles['mountains-layer-5']}`}
          ref={(element) => {
            this.mountains52 = element;
          }}
          src={mountainslayerfive}
        />
        <div
          className={styles['footer-base']}
          ref={(element) => {
            this.footerbase = element;
          }}
        />
      </>
    );
  }
}

export default FlyingUbeBanner;
