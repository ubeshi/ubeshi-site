import {
  PureComponent,
} from 'react';
import styles from './styles.module.scss';

class TeamDescriptor extends PureComponent {
  render () {
    return (
      <div className={styles['team-descriptor']}>
        <div className={styles['upper-paragraph']}>
          Ubeshi is a team of innovators with big dreams and big guts. Our mission directive is simple: get Jada a job.
        </div>
      </div>
    );
  }
}

export default TeamDescriptor;
