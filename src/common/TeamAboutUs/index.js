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
import portraitOne from '../../assets/portrait-1.jpg';
import portraitTwo from '../../assets/portrait-2.jpg';
import portraitThree from '../../assets/portrait-3.jpg';
import portraitFour from '../../assets/portrait-4.jpg';
import portraitFive from '../../assets/portrait-5.jpg';
import TeamDescriptorPortrait from './components/TeamDescriptorPortrait';
import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger, SplitText);

class TeamAboutUs extends PureComponent {
  render () {
    return (
      <div className={styles['team-descriptor']}>
        <div className={styles['team-descriptor-content']}>
          <div className={styles['team-descriptor-title']}>
            <div
              className={styles['team-descriptor-title-text']}
            >
              Meet the Team
            </div>
            <></>
          </div>
          <div className={styles['team-descriptor-portraits']}>
            <TeamDescriptorPortrait
              github='https://github.com/brydenli'
              img={portraitTwo}
              linkedin='https://www.linkedin.com/in/bryden-li/'
              name='Bryden Li'
              title='Professional Person'
            />
            <TeamDescriptorPortrait
              github='https://github.com/adaj-1'
              img={portraitOne}
              linkedin='https://www.linkedin.com/in/jada-li'
              name='Jada Li'
              title='Professional Person'
            />
            <TeamDescriptorPortrait
              github='https://github.com/ColinT'
              img={portraitThree}
              linkedin='https://www.linkedin.com/in/colin-tong-07b824143/'
              name='Colin Tong'
              title='Professional Person'
            />
            <TeamDescriptorPortrait
              github='https://github.com/anson-li'
              img={portraitFour}
              linkedin='https://www.linkedin.com/in/anson-ii/'
              name='Anson Li'
              title='Professional Person'
            />
          </div>
        </div>
      </div>
    );
  }
}

TeamAboutUs.propTypes = {
  timeline: PropTypes.shape({
    to: PropTypes.func,
  }),
};

TeamAboutUs.defaultProps = {
  timeline: {
    to: () => {},
  },
};

export default TeamAboutUs;
