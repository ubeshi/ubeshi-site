import gsap from 'gsap';
import {
  ScrollTrigger,
} from 'gsap/ScrollTrigger';
import {
  SplitText,
} from 'gsap/SplitText';
import PropTypes from 'prop-types';
import {
  PureComponent,
} from 'react';
import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger, SplitText);

class TeamDescriptorPortrait extends PureComponent {
  render () {
    const {img, name, title, linkedin, github} = this.props;

    return (
      <div className={styles['team-descriptor-portrait']}>
        <div className={styles['team-descriptor-image']}>
          <img alt={`Portrait for ${name}`} src={img} />
        </div>
        <div className={styles['team-descriptor-portrait-text']}>
          <div className={styles['team-descriptor-name']}>
            {name}
          </div>
          <div className={styles['team-descriptor-title']}>
            {title}
          </div>
          <div className={styles['team-descriptor-connect']}>
            <a className={styles['team-descriptor-linkedin']} href={linkedin}>LinkedIn</a>
            <a className={styles['team-descriptor-github']} href={github}>Github</a>
          </div>
        </div>
      </div>
    );
  }
}

TeamDescriptorPortrait.propTypes = {
  github: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  timeline: PropTypes.shape({
    to: PropTypes.func,
  }),
  title: PropTypes.string.isRequired,
};

TeamDescriptorPortrait.defaultProps = {
  timeline: {
    to: () => {},
  },
};

export default TeamDescriptorPortrait;
