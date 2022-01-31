import styles from './BattleTV.module.css';

function createData(
  myUsername: string,
  myCoinused: number,
  myDestruction: number,
  enemyDestruction: number,
  enemyCoinused: number,
  enemyUsername: string,
) {
  return {
    myUsername,
    myCoinused,
    myDestruction,
    enemyDestruction,
    enemyCoinused,
    enemyUsername,
  };
}

const rows = [
  createData('Akash1', 69, 5, 10, 34, 'Enemyakash'),
  createData('Akash2', 49, 20, 15, 4, 'Enemyakash'),
  createData('Akash3', 39, 25, 30, 43, 'Enemyakash'),
  createData('Akash4', 39, 40, 35, 14, 'Enemyakash'),
  createData('Akash5', 29, 45, 50, 32, 'Enemyakash'),
  createData('Akash6', 19, 60, 55, 32, 'Enemyakash'),
];

export default function BattleTV(): JSX.Element {
  return (
    <div className={styles.body}>
      <div className={styles.title}>Battle TV</div>
      <div className={styles.heading}>
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column}>Destruction %</div>
        <div className={styles.column}>Coin Lost</div>
        <div className={styles.column}></div>
        <div className={styles.column}>Coin Lost</div>
        <div className={styles.column}>Destruction %</div>
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
      </div>
      {rows.map(row => (
        <div className={styles.item} key={row.myUsername}>
          <div
            className={styles.battlecard}
            style={{
              backgroundColor:
                row.myDestruction < row.enemyDestruction
                  ? '#00bc62'
                  : '#BC1700',
            }}
          >
            <img
              className={styles.pic}
              src="https://randomuser.me/api/portraits/women/81.jpg"
            ></img>
            <div className={styles.Username}>{row.myUsername}</div>
            <div className={styles.Coinused}>{row.myCoinused}</div>
            <div className={styles.Destruction}>{row.myDestruction}</div>
            <div className={styles.vs}>VS</div>
            <div className={styles.Destruction}>{row.enemyDestruction}</div>
            <div className={styles.Coinused}>{row.enemyCoinused}</div>
            <div className={styles.Username}>{row.enemyUsername}</div>
            <img
              className={styles.pic}
              src="https://randomuser.me/api/portraits/women/81.jpg"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
}
