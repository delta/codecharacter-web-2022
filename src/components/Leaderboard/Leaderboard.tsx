import styles from './Leaderboard.module.css';

function createData(
  rank: number,
  username: string,
  rating: number,
  won: number,
  lost: number,
  tied: number,
  fight: string,
) {
  return { rank, username, rating, won, lost, tied, fight };
}

const rows = [
  createData(4, 'Akash4', 122, 3, 1, 1, 'fightakash'),
  createData(5, 'Akash5', 122, 2, 1, 1, 'fightakash'),
  createData(6, 'Akash6', 122, 1, 1, 1, 'fightakash'),
  createData(7, 'Akash7', 122, 1, 1, 1, 'fightakash'),
  createData(8, 'Akash8', 122, 1, 1, 1, 'fightakash'),
];

export default function Leaderboard(): JSX.Element {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <img className={styles.header__icon} src="src/assets/trophy.png" />
        <h1 className={styles.header__title}>
          <span>Leaderboard</span>
        </h1>
      </div>
      <div className={styles.center}>
        <div className={styles.top3}>
          <div className={styles.item}>
            <div className={styles.pos}>2</div>
            <div
              className={styles.pic}
              style={{
                backgroundImage: `url("https://randomuser.me/api/portraits/men/34.jpg")`,
              }}
            ></div>
            <div className={styles.name}>Edgar Soto</div>
            <div className={styles.score}>6453 rating</div>
          </div>
          <div className={styles.item}>
            <div className={styles.pos}>1</div>
            <div
              className={styles.pic}
              style={{
                backgroundImage: `url("https://randomuser.me/api/portraits/men/31.jpg")`,
              }}
            ></div>
            <div className={styles.name}>Clifford James</div>
            <div className={styles.score}>6794 rating</div>
          </div>
          <div className={styles.item}>
            <div className={styles.pos}>3</div>
            <div
              className={styles.pic}
              style={{
                backgroundImage: `url("https://randomuser.me/api/portraits/women/91.jpg")`,
              }}
            ></div>
            <div className={styles.name}>Nevaeh Silva</div>
            <div className={styles.score}>6034 rating</div>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div
              className={styles.pic}
              style={{
                backgroundImage: `url("https://randomuser.me/api/portraits/men/34.jpg")`,
              }}
            ></div>
            <div className={styles.pos}>#</div>
            <div className={styles.name}>Username</div>
            <div className={styles.score}>Ratings</div>
            <div className={styles.score}>Won</div>
            <div className={styles.score}>Tied</div>
            <div className={styles.score}>Lost</div>
          </div>
          {rows.map(row => (
            <div className={styles.item} key={row.username}>
              <div className={styles.pos}>{row.rank}</div>
              <div
                className={styles.pic}
                style={{
                  backgroundImage: `url("https://randomuser.me/api/portraits/women/81.jpg")`,
                }}
              ></div>
              <div className={styles.name}>{row.username}</div>
              <div className={styles.score}>{row.rating}</div>
              <div className={styles.score}>{row.won} win</div>
              <div className={styles.score}>{row.tied} tied</div>
              <div className={styles.score}>{row.lost} lost</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
