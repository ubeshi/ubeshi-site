import {
  library,
} from '@fortawesome/fontawesome-svg-core';
import {
  fab,
} from '@fortawesome/free-brands-svg-icons';
import {
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {
  PureComponent,
} from 'react';
import FlyingUbeBanner from '../FlyingUbeBanner';
import styles from './styles.module.scss';

library.add(fab);

class HeroBanner extends PureComponent {
  render () {
    return (
      <div className={styles['hero-banner']}>
        <div className={styles['top-banner']}>
          <div className={styles.logo}>ubeshi</div>
          <div className={styles['navigation-icons']}>
            <a href='https://github.com/ubeshi'><FontAwesomeIcon icon={['fab', 'github']} size='lg' /></a>
            <a href='https://www.linkedin.com/company/ubeshi/'><FontAwesomeIcon icon={['fab', 'linkedin']} size='lg' /></a>
          </div>
        </div>
        <FlyingUbeBanner
          timeline={this.props.timeline}
        />
      </div>
    );
  }
}

HeroBanner.propTypes = {
  timeline: PropTypes.shape({
    to: PropTypes.func,
  }),
};

HeroBanner.defaultProps = {
  timeline: {
    to: () => {},
  },
};

export default HeroBanner;
