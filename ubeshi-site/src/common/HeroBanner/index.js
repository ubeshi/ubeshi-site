import PropTypes from 'prop-types';
import React, {
  PureComponent,
} from 'react';
import mascot from '../../assets/mascot.gif';
import styles from './styles.module.scss';

class MainLayout extends PureComponent {
  render () {
    return (
      <div className={styles['hero-banner']}>
        <div className={styles.logo}>ubeshi</div>
        <img className={styles['hero-main-image']} src={mascot} />
        <div className={styles['banner-text']}>
          <div className={styles['banner-text-left']}>
            Sexy Potato
            <div className={styles['supporting-text']}>
              Innovation, beauty &amp; excellence
            </div>
          </div>
          <div className={styles['banner-text-right']}>
            for the Family
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
