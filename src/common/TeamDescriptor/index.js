import {
  PureComponent,
} from 'react';
import styles from './styles.module.scss';

class TeamDescriptor extends PureComponent {
  render () {
    return (
      <div className={styles['team-descriptor']}>
        <div className={styles['left-paragraph']}>
          Ubeshi is a team of innovators with big dreams and big guts. Our mission directive is simple: get Jada a job.
        </div>
        <div className={styles['right-paragraph']}>
          As defined by Urban Dictionary, an ube is &lsquo;the Filipino word for purple yam.
          Ube is used in a variety of desserts from ice cream to pastries.&rsquo;. Yum!
        </div>
      </div>
    );
  }
}

export default TeamDescriptor;
