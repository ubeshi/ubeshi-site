import {
  PureComponent,
} from 'react';
import styles from './styles.module.scss';

class TeamSkills extends PureComponent {
  render () {
    return (
      <div className={styles['team-skills']}>
        <div className={styles['team-skills-title']}>
          CONNECT WITH US
        </div>
        <div className={styles['team-skills-descriptor']}>
          5015 4 St NE<br />
          Calgary, AB, T2K 6K2<br />
          <br />
          403 295 2504
        </div>
      </div>
    );
  }
}

export default TeamSkills;
