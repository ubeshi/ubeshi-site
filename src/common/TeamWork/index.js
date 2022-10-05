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
import {
  InView,
} from 'react-intersection-observer';
import ThreeJS from './ThreeJS';
import styles from './styles.module.scss';
import './styles.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

class TeamWork extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      repos: [],
    };
    this.compareUpdatedAt = this.compareUpdatedAt.bind(this);
  }

  async componentDidMount () {
    const response = await fetch(
      'https://api.github.com/orgs/ubeshi/repos',
    );
    const json = await response.json();
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({repos: json.sort(this.compareUpdatedAt).slice(0, 5)});
  }

  compareUpdatedAt (a, b) {
    if (moment(a.updated_at) < moment(b.updated_at)) {
      return 1;
    }
    if (moment(a.updated_at) > moment(b.updated_at)) {
      return -1;
    }

    return 0;
  }

  render () {
    const repos = this.state.repos.map((repo) => {
      return <a className={styles['team-work-repo']} href={repo.html_url} key={repo.id}>
        <div className={styles['team-work-repo-title']}>
          {repo.name.split('-').join(' ')}
        </div>
        {repo.description ?
          <div className={styles['team-work-repo-description']}>
            {repo.description}
          </div> :
          null}
        <div className={styles['team-work-repo-updated']}>
          Last updated {moment(repo.updated_at).format('MMMM YYYY')}.
        </div>
      </a>;
    });
    const {animateInDiv} = this.props;

    return (
      <div className={styles['team-work']}>
        <div className={styles['team-work-content']}>
          <div className={styles['team-work-title']}>
            <InView
              as='div' className={styles['team-work-title-text']} delay={100}
              onChange={(inView, entry) => {
                return animateInDiv(inView, entry);
              }}>
              Recent Projects
            </InView>
            <div className={styles['team-work-title-link']}>
              <span>
                Want to see our full portfolio? Check out our <a href='https://github.com/ubeshi'>Github</a>.
              </span>
            </div>
          </div>
          <div className={styles['team-work-title-body']}>
            <div className={styles['team-work-repos']}>
              {repos}
            </div>
            <div className={styles['team-work-image']} id='team-work-image'>
              <ThreeJS />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TeamWork.propTypes = {
  animateInDiv: PropTypes.func,
  timeline: PropTypes.shape({
    to: PropTypes.func,
  }),
};

TeamWork.defaultProps = {
  animateInDiv: (inView, entry) => {},
  timeline: {
    to: () => {},
  },
};

export default TeamWork;
