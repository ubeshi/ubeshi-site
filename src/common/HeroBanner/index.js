import PropTypes from 'prop-types';
import {
  PureComponent,
} from 'react';
import FlyingUbeBanner from '../FlyingUbeBanner';
import styles from './styles.module.scss';

class HeroBanner extends PureComponent {
  render () {
    return (
      <div className={styles['hero-banner']}>
        <div className={styles.logo}>ubeshi</div>
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
