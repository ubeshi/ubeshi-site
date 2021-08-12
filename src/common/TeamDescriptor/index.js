import {
  PureComponent,
} from 'react';
import styles from './styles.module.scss';

class TeamDescriptor extends PureComponent {
  render () {
    return (
      <div className={styles['team-descriptor']}>
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
