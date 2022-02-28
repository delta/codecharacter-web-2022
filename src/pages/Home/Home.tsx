import Footer from '../../components/Home/Footer/Footer';
import Glitchtext from '../../components/Home/Glitchtext/Glitchtext';
import Rows from '../../components/Home/Row/Rows';
import styles from './Home.module.css';

export default function Home(): JSX.Element {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.jumbotron}>
        <Glitchtext value="Code Character" />
      </div>
      <Rows />
      <Footer />
      <div className={styles.delta}>
        <div>
          Made with <span className={styles.heart}>❤</span> by{' '}
          <a href="https://delta.nitt.edu/">Delta Force</a>
        </div>
      </div>
    </main>
  );
}
