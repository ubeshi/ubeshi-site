import gsap from 'gsap';
import {
  ScrollTrigger,
} from 'gsap/ScrollTrigger';
import {
  PureComponent,
} from 'react';
import ubeone from '../../assets/ube-1.jpg';
import ubetwo from '../../assets/ube-2.jpg';
import ubethree from '../../assets/ube-3.jpg';
import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

class TeamDescriptor extends PureComponent {
  componentDidMount () {
    gsap.timeline({
      scrollTrigger: {
        horizontal: false,
        scrub: 1,
        start: 0,
      },
      smoothChildTiming: true,
    });
    gsap.to(this.ubeone, {
      ease: 'none',
      scrollTrigger: {
        scrub: 2,
        start: 0,
      },
      yPercent: -300,
    });
    gsap.to(this.ubetwo, {
      ease: 'none',
      scrollTrigger: {
        scrub: 2,
        start: 0,
      },
      yPercent: -500,
    });
    gsap.to(this.ubethree, {
      ease: 'none',
      scrollTrigger: {
        scrub: 2,
        start: 0,
      },
      yPercent: -800,
    });
  }

  render () {
    return (
      <div className={styles['team-descriptor']}>
        <img
          alt='Ube one'
          className={styles['ube-1']}
          ref={(element) => {
            this.ubeone = element;
          }}
          src={ubeone}
        />
        <img
          alt='Ube two'
          className={styles['ube-2']}
          ref={(element) => {
            this.ubetwo = element;
          }}
          src={ubetwo}
        />
        <img
          alt='Ube three'
          className={styles['ube-3']}
          ref={(element) => {
            this.ubethree = element;
          }}
          src={ubethree}
        />
        <div className={styles['upper-paragraph']}>
          <span className={styles.strong}>Ubeshi</span> is a team of <span className={styles.strong}>innovators</span> with
          big dreams and big <span className={styles.strong}>guts</span>.
          We <span className={styles.strong}>shape</span> and augment the <span className={styles.strong}>stories</span> of
          brands, corporations, and our <span className={styles.strong}>future</span>.
          Our mission directive is simple: get <span className={styles.strong}>Jada</span> a <span className={styles.strong}>job</span>.
        </div>
      </div>
    );
  }
}

export default TeamDescriptor;
