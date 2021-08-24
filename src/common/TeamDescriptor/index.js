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
import {
  InView,
} from 'react-intersection-observer';
import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger, SplitText);

class TeamDescriptor extends PureComponent {
  constructor (props) {
    super(props);
    this.animateInDiv = this.animateInDiv.bind(this);
  }

  animateInDiv (inView, entry) {
    // Slide up when in view
    if (inView) {
      const childSplit = new SplitText(entry.target, {
        linesClass: 'inview-split-child',
        type: 'lines',
      });
      // eslint-disable-next-line no-new
      new SplitText(entry.target, {
        linesClass: 'inview-split-parent',
        type: 'lines',
      });
      gsap.set(entry.target, {
        opacity: 1,
      });
      gsap.from(childSplit.lines, {
        duration: 1.5,
        ease: 'power4',
        stagger: 0.1,
        yPercent: 100,
      });
    } else {
      // Don't show when out of view
      gsap.set(entry.target, {
        opacity: 0,
      });
    }
  }

  render () {
    return (
      <div className={styles['team-descriptor']}>
        <InView
          as='div' className={styles['team-descriptor-title']} delay={100}
          onChange={(inView, entry) => {
            return this.animateInDiv(inView, entry);
          }} triggerOnce>
          Our<br />Mission
        </InView>
        <InView
          as='div' className={styles['upper-paragraph']} delay={150}
          onChange={(inView, entry) => {
            return this.animateInDiv(inView, entry);
          }} triggerOnce>
          <span className={styles.strong}>Ubeshi</span> is a team of innovators with
          big dreams and big guts.<br /><br />
          We shape and augment the stories of
          brands, corporations, and our <span className={styles.strong}>future</span>.<br /><br />
          Our mission directive is simple: get Jada a job.
        </InView>
      </div>
    );
  }
}

TeamDescriptor.propTypes = {
  timeline: PropTypes.shape({
    to: PropTypes.func,
  }),
};

TeamDescriptor.defaultProps = {
  timeline: {
    to: () => {},
  },
};

export default TeamDescriptor;
