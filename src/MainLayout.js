import gsap from 'gsap';
import {
  ScrollTrigger,
} from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
import React, {
  PureComponent,
} from 'react';
import HeroBanner from './common/HeroBanner';
import SmoothScroll from './common/SmoothScroll';
import TeamDescriptor from './common/TeamDescriptor';
import TeamSkills from './common/TeamSkills';

gsap.registerPlugin(ScrollTrigger);

class MainLayout extends PureComponent {
  constructor (props) {
    super(props);
    this.timeline = null;
    this.componentCleanup = this.componentCleanup.bind(this);
  }

  componentDidMount () {
    this.timeline = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
      },
    });
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
      <SmoothScroll>
        <div
          id='scroll-page' ref={(element) => {
            this.el = element;
          }}>
          <HeroBanner
            timeline={this.timeline}
          />
          <TeamDescriptor />
          <TeamSkills />
        </div>
      </SmoothScroll>
    );
  }
}

MainLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default MainLayout;
