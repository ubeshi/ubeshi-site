import gsap from 'gsap';
import PropTypes from 'prop-types';
import React, {
  PureComponent,
} from 'react';
import styles from './styles.module.scss';

class Mountain extends PureComponent {
  componentDidMount () {
    const {index} = this.props;
    gsap.from(this.mountainsleft, 1 + index * 0.35, {
      ease: 'expo.inOut',
      y: `${25 + index * 45}%`,
    });
    gsap.from(this.mountainsright, 1 + index * 0.35, {
      ease: 'expo.inOut',
      y: `${25 + index * 45}%`,
    });
  }

  componentDidUpdate () {
    const {timeline, index} = this.props;
    gsap.to(this.mountainsright, 15 + index * 10, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });
    gsap.to(this.mountainsleft, 15 + index * 10, {
      ease: 'none',
      repeat: -1,
      x: window.innerWidth,
    });
    if (timeline) {
      timeline.to(this.mountainsright, {
        y: `-${600 - index * 170}px`,
      }, 0);
      timeline.to(this.mountainsleft, {
        y: `-${600 - index * 170}px`,
      }, 0);
    }
  }

  render () {
    const {index} = this.props;

    return (
      <>
        <img
          alt='Mountains'
          className={`${styles.mountains} ${styles[`mountains-layer-${index + 1}`]}`}
          ref={(element) => {
            this.mountainsright = element;
          }}
          src={this.props.src}
        />
        <img
          alt='Mountains'
          className={`${styles['mountains-2']} ${styles[`mountains-layer-${index + 1}`]}`}
          ref={(element) => {
            this.mountainsleft = element;
          }}
          src={this.props.src}
        />
      </>
    );
  }
}

Mountain.propTypes = {
  index: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  timeline: PropTypes.shape({
    to: PropTypes.func.isRequired,
  }),
};

Mountain.defaultProps = {
  timeline: null,
};

export default Mountain;
