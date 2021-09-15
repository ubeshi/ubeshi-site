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

class TeamMission extends PureComponent {
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
        stagger: 0.15,
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
        <div className={styles['team-descriptor-content']}>
          <div className={styles['team-descriptor-title']}>
            <InView
              delay={200}
              onChange={(inView, entry) => {
                return this.animateInDiv(inView, entry);
              }}
              triggerOnce
            >
              Our<br />Mission
            </InView>
          </div>
          <div className={styles['upper-paragraph']}>
            <InView
              delay={200}
              onChange={(inView, entry) => {
                return this.animateInDiv(inView, entry);
              }}
              triggerOnce
            >
              <div className={styles['paragraph-line']}>
                <span className={styles.strong}>Ubeshi</span> is a team of innovators with
                big dreams and big guts.
              </div>
              <div>&#x200b;</div>
              <div className={styles['paragraph-line']}>
                We shape and augment the stories of
                brands, corporations, and our <span className={styles.strong}>future</span>.
              </div>
              <div>&#x200b;</div>
              <div>
                Our mission directive is simple: get Jada a job.
              </div>
            </InView>
          </div>
        </div>
      </div>
    );
  }
}

TeamMission.propTypes = {
  timeline: PropTypes.shape({
    to: PropTypes.func,
  }),
};

TeamMission.defaultProps = {
  timeline: {
    to: () => {},
  },
};

export default TeamMission;
