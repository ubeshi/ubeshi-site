import gsap, {
} from 'gsap';
import {
  ScrollTrigger,
} from 'gsap/ScrollTrigger';
import {
  PureComponent,
} from 'react';
import FlyingUbeBanner from '../FlyingUbeBanner';
import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

class HeroBanner extends PureComponent {
  constructor (props) {
    super(props);
    this.timeline = null;
  }

  componentDidMount () {
    this.timeline = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
      },
    });
  }

  render () {
    return (
      <div className={styles['hero-banner']}>
        <div className={styles.logo}>ubeshi</div>
        <FlyingUbeBanner
          timeline={this.timeline}
        />
      </div>
    );
  }
}

export default HeroBanner;
