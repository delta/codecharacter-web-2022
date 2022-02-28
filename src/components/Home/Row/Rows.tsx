import renderer from '../../../assets/renderer.png';
import trophy from '../../../assets/home-trophy.png';
import styles from './Row.module.css';

export default function Rows(): JSX.Element {
  return (
    <div>
      <div className={styles.about}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-6 col-sm-12 ${styles.imageContainer}`}>
              <img src={renderer} />
            </div>
            <div
              className={`col-lg-6 col-sm-12 ${styles.descriptionContainer}`}
            >
              <div>
                <div className={styles.title}>About</div>
                <div>
                  <div>
                    Code Character is a strategy based programming game where
                    you control troops in a turn-based game with the code you
                    write in one of the multiple programming languages (C++,
                    Python, Java) available in the game.
                  </div>
                  <div>
                    The objective is to destroy and vanquish the {"opponent's"}
                    territory by writing code and creating defenses via the
                    in-game map.
                  </div>
                  <div>
                    With progress and implementation of new competitive
                    strategies, fight your way through, and dominate the top of
                    the leaderboard.
                  </div>
                  <div>
                    What are you waiting for, jump in to this world controlled
                    by AI and get chances to win exciting prizes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div className="container">
          <div className="row flex-row-reverse">
            <div className={`col-lg-6 col-sm-12 ${styles.imageContainer}`}>
              <div>
                <img src={trophy} />
              </div>
            </div>
            <div
              className={`col-lg-6 col-sm-12 ${styles.descriptionContainer}`}
            >
              <div>
                <div className={styles.title}>Details</div>
                <div>
                  <div>Date - 1st March, 2022</div>
                  <div>Mode - Online and individual participation</div>
                  <div>Prizes Worth - ₹ 20,000</div>
                  <div>Prizes would be decided by in-game leaderbaord</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
