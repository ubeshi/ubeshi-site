import PropTypes from 'prop-types';
import gsap, { Power0 } from 'gsap';
import React, {
  PureComponent,
} from 'react';
import mascot from '../../assets/mascot.gif';
import cloudone from '../../assets/cloud-1.png';
import cloudtwo from '../../assets/cloud-2.png';
import styles from './styles.module.scss';

class MainLayout extends PureComponent {
  componentDidMount() {
    gsap.from(this.mascot, 1.5, {
      ease: Power0,
      y: 100,
      yoyo: true,
      repeat: -1,
    });
    gsap.to(this.cloudone, 10, {
      ease: 'none',
      x: 3000,
      repeat: -1,
    });
    gsap.to(this.cloudtwo, 8, {
      ease: 'none',
      x: 4000,
      repeat: -1,
    });
  }

  render () {
    return (
      <div className={styles['hero-banner']}>
        <div className={styles.logo}>ubeshi</div>
        <img
          className={styles['hero-main-image']}
          ref={(element) => {
            this.mascot = element;
          }}
          src={mascot}
        />
        <img
          className={styles['cloud-1']}
          ref={(element) => {
            this.cloudone = element;
          }}
          src={cloudone}
        />
        <img
          className={styles['cloud-2']}
          ref={(element) => {
            this.cloudtwo = element;
          }}
          src={cloudtwo}
        />
        <div className={styles['banner-text']}>
          <div className={styles['banner-text-left']}>
            Big, Bright
            <div className={styles['supporting-text']}>
              Innovation, beauty &amp; excellence
            </div>
          </div>
          <div className={styles['banner-text-right']}>
            &amp; Ube- tiful
          </div>
        </div>
        <svg
          className={styles['icon-continue']}
          fill='none'
          height={200}
          stroke='black'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='0.15'
          viewBox='0 0 24 24'
          width={200}
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='12' cy='12' r='10' />
          <polyline points='8 12 12 16 16 12' />
          <line x1='12' x2='12' y1='8' y2='16' />
        </svg>
        <div className={styles['banner-support-bar']}>
          <div className={styles['banner-support-bar-title']}>
            A collective of dreamers
          </div>
          <div className={styles['banner-support-bar-description']}>
            We wish to innovate a new era through the Ubeshi
          </div>
          <div className={styles['banner-support-bar-background']} />
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default MainLayout;
