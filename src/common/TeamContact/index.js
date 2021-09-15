import {
  PureComponent,
} from 'react';
import styles from './styles.module.scss';

class TeamContact extends PureComponent {
  render () {
    return (
      <div className={styles['team-skills']}>
        <div className={styles['team-skills-title']}>
          <div>CONNECT WITH US</div>
          <></>
        </div>
        <div className={styles['team-skills-descriptor']}>
          <a href='mailto:contact@ubeshi.com'>contact@ubeshi.com</a>
          <></>
        </div>
      </div>
    );
  }
}

export default TeamContact;
