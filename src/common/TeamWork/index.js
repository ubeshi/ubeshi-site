import gsap from 'gsap';
import {
  ScrollTrigger,
} from 'gsap/ScrollTrigger';
import {
  SplitText,
} from 'gsap/SplitText';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  PureComponent,
} from 'react';
import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger, SplitText);

class TeamWork extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      repos: [],
    };
  }

  async componentDidMount () {
    const response = await fetch(
      'https://api.github.com/orgs/ubeshi/repos',
    );
    const json = await response.json();
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({repos: json});
  }

  render () {
    const repos = this.state.repos.map((repo) => {
      return <a className={styles['team-work-repo']} href={repo.html_url} key={repo.id}>
        <div className={styles['team-work-repo-title']}>
          {repo.name.split('-').join(' ')}
        </div>
        {repo.description ? (
          <div className={styles['team-work-repo-description']}>
            {repo.description}
          </div>
        ) : null}
        <div className={styles['team-work-repo-updated']}>
          Last updated {moment(repo.updated_at).format('MMMM YYYY')}.
        </div>
      </a>;
    });

    return (
      <div className={styles['team-work']}>
        <div className={styles['team-work-content']}>
          <div className={styles['team-work-title']}>
            <div
              className={styles['team-work-title-text']}
            >
              Latest Work
            </div>
          </div>
          <div className={styles['team-work-repos']}>
            {repos}
          </div>
        </div>
      </div>
    );
  }
}

TeamWork.propTypes = {
  timeline: PropTypes.shape({
    to: PropTypes.func,
  }),
};

TeamWork.defaultProps = {
  timeline: {
    to: () => {},
  },
};

export default TeamWork;
