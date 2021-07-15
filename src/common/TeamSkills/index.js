import {
  PureComponent,
} from 'react';
import styles from './styles.module.scss';

class TeamSkills extends PureComponent {
  render () {
    return (
      <div className={styles['team-skills']}>
        <div className={styles['team-skills-title']}>
          Why are you an UBE FREAK?
        </div>
        <div className={styles['team-skills-descriptor']}>
          Ube is a good meme because it just doesn&apos;t mean anything.
          It&apos;s one of the few vegetables that really can&apos;t be associated with anything.
          By itself, it just cannot mean anything. Pineapples are obviously associated with the word,
          we say it a lot. It&apos;s also a root vegetable, along with pumpkins. There&apos;s clear meaning in it.
          Even a less common vegetable like rutabaga is associated with something, like &lsquo;ruting around&rsquo;
          or something. Maybe even the unspoken food like mushrooms and peanut butter. They&apos;re just too familiar.
          <br /><br />
          But ube? It&apos;s just ube. It literally doesn&apos;t rhyme with anything. It doesn&apos;t stand for anything.
          It doesn&apos;t mean anything but it still takes effort to eat. Ube is succinct but also not
          the easiest vegetable to eat in terms of effort. It takes effort to say for how succulent it is,
          and that makes it even more useless and it&apos;s great.
          <br /><br />
          Online, it&apos;s a great way to say something without actually saying anything at all. It&apos;s the
          equivalent of just typing &lsquo;.&rsquo; or just a blank message in a chat, except you&apos;re
          writing something that can be pronounced. It&apos;s brilliant.
        </div>
      </div>
    );
  }
}

export default TeamSkills;
