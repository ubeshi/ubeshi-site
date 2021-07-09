import PropTypes from 'prop-types';
import React, {
  PureComponent,
} from 'react';
import styles from './styles.module.scss';

class MainLayout extends PureComponent {
  render () {
    return (
      <div className={styles['main-layout']}>
        ubeshi
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
