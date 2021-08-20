import gsap from 'gsap';
import {
  ScrollTrigger,
} from 'gsap/ScrollTrigger';
import {
  PureComponent,
} from 'react';
import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

class TeamDescriptor extends PureComponent {
  render () {
    return (
      <div className={styles['team-descriptor']}>
        <div className={styles['upper-paragraph']}>
          <span className={styles.strong}>Ubeshi</span> is a team of innovators with
          big dreams and big guts.<br /><br />
          We shape and augment the stories of
          brands, corporations, and our <span className={styles.strong}>future</span>.<br /><br />
          Our mission directive is simple: get Jada a job.
        </div>
      </div>
    );
  }
}

export default TeamDescriptor;
