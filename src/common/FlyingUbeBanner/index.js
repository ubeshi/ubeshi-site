import gsap, {
  Power0, Power1,
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
import Mountain from './components/Mountain';
import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

class FlyingUbeBanner extends PureComponent {
  constructor (props) {
    super(props);
    this.mountains = [mountainslayerone, mountainslayertwo, mountainslayerthree, mountainslayerfour, mountainslayerfive];
    this.timeline = null;
    this.componentCleanup = this.componentCleanup.bind(this);
  }

  componentDidMount () {
    gsap.from(this.mascot, 1.5, {
      ease: Power1.easeInOut,
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
    }, 0.01);

    gsap.from(this.cloudone, 5, {
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
      yPercent: -10,
    });
    gsap.from(this.cloudtwo, 7, {
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
      yPercent: -10,
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

    window.addEventListener('beforeunload', this.componentCleanup);
    ScrollTrigger.refresh();
    this.forceUpdate();
  }

  componentWillUnmount () {
    this.componentCleanup();
    window.removeEventListener('beforeunload', this.componentCleanup);
  }

  componentCleanup () {
    window.scrollTo(0, 0);
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
          <div className={styles['banner-text-body']}>
            Big,<br />
            Bright, <br />
            &amp; Ube-tiful
          </div>
          <span />
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

        { this.mountains.map((mountain, index) => {
          return (
            <Mountain
              index={index}
              key={mountain}
              src={mountain}
              timeline={this.timeline}
            />
          );
        })}

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
