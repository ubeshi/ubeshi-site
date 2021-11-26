import gsap from 'gsap';
import {
  ScrollTrigger,
} from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
import React, {
  PureComponent,
} from 'react';
import Loader from './assets/loader.gif';
import HeroBanner from './common/HeroBanner';
import TeamAboutUs from './common/TeamAboutUs';
import TeamContact from './common/TeamContact';
import TeamMission from './common/TeamDescriptor';
import TeamWork from './common/TeamWork';

gsap.registerPlugin(ScrollTrigger);

class MainLayout extends PureComponent {
  constructor (props) {
    super(props);
    this.timeline = null;
    this.componentCleanup = this.componentCleanup.bind(this);
    this.animateInDiv = this.animateInDiv.bind(this);
  }

  componentDidMount () {
    this.timeline = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
      },
    });
    gsap.to(this.loader, 2, {
      ease: 'expo.inOut',
      rotation: 0.01,
      y: '-100%',
    });
    gsap.set(this.loader, {
      delay: 2,
      opacity: 0,
      y: '0',
      zIndex: 0,
    });
    setTimeout(() => {
      document.querySelector('.main-layout').classList.remove('is-loading');
      window.addEventListener('beforeunload', this.componentCleanup);
      ScrollTrigger.refresh();
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount () {
    this.componentCleanup();
    window.removeEventListener('beforeunload', this.componentCleanup);
  }

  componentCleanup () {
    window.scrollTo(0, 0);
  }

  animateInDiv (inView, entry) {
    if (inView) {
      gsap.to(entry.target, 0.5, {
        color: '#ff8180',
      });
    } else {
      gsap.to(entry.target, 0.5, {
        color: '#bdaec5',
      });
    }
  }

  render () {
    return (
      <div
        className='main-layout is-loading'
        ref={(element) => {
          this.canvas = element;
        }}
      >
        <div
          className='fullscreen-loader'
          ref={(element) => {
            this.loader = element;
          }}
        >
          <img
            alt='Loading potato...'
            className='loader-potato'
            src={Loader}
          />
        </div>
        <div
          id='scroll-page' ref={(element) => {
            this.el = element;
          }}>
          <HeroBanner
            timeline={this.timeline}
          />
          <TeamMission />
          <TeamAboutUs />
          <TeamWork />
          <TeamContact />
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
