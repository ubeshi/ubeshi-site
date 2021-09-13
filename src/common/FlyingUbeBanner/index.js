import gsap, {
  Power1,
} from 'gsap';
import PropTypes from 'prop-types';
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

class FlyingUbeBanner extends PureComponent {
  constructor (props) {
    super(props);
    this.mountains = [mountainslayerone, mountainslayertwo, mountainslayerthree, mountainslayerfour, mountainslayerfive];
  }

  componentDidMount () {
    gsap.from(this.mascot, 2, {
      onComplete: () => {
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
      },
      rotate: 30,
      x: window.innerWidth,
      y: '-500px',
    });
  }

  componentDidUpdate () {
    const {timeline} = this.props;
    gsap.to(this.mascot, 1.5, {
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true,
      yPercent: -10,
    });
    if (timeline) {
      timeline.to(this.mascot, {
        rotate: 30,
        x: -window.innerWidth,
        y: '-500px',
      }, 0.01);
      timeline.to(this.footerbase, {
        y: '-600px',
      }, 0);
      timeline.to(this.cloudone, {
        y: '-1200px',
      }, 0);
      timeline.to(this.cloudtwo, {
        y: '-1200px',
      }, 0);
      timeline.to(this.bannertext, {
        y: '-500px',
      }, 0);
    }
  }

  render () {
    const {timeline} = this.props;

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
              timeline={timeline}
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

FlyingUbeBanner.propTypes = {
  timeline: PropTypes.shape({
    to: PropTypes.func,
  }),
};

FlyingUbeBanner.defaultProps = {
  timeline: {
    to: () => {},
  },
};

export default FlyingUbeBanner;
