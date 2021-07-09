import PropTypes from 'prop-types';
import React, {
  PureComponent,
} from 'react';
import HeroBanner from './common/HeroBanner';

class MainLayout extends PureComponent {
  render () {
    return (
      <>
        <HeroBanner />
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
