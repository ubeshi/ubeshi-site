import PropTypes from 'prop-types';
import React, {
  PureComponent,
} from 'react';
import HeroBanner from './common/HeroBanner';
import TeamDescriptor from './common/TeamDescriptor';
import TeamSkills from './common/TeamSkills';

class MainLayout extends PureComponent {
  render () {
    return (
      <>
        <HeroBanner />
        <TeamDescriptor />
        <TeamSkills />
      </>
    );
  }
}

MainLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default MainLayout;
