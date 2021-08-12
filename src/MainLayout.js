import PropTypes from 'prop-types';
import React, {
  PureComponent,
} from 'react';
import HeroBanner from './common/HeroBanner';
import SmoothScroll from './common/SmoothScroll';
import TeamDescriptor from './common/TeamDescriptor';
import TeamSkills from './common/TeamSkills';

class MainLayout extends PureComponent {
  render () {
    return (
      <SmoothScroll>
        <div
          id='scroll-page' ref={(element) => {
            this.el = element;
          }}>
          <HeroBanner />
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
