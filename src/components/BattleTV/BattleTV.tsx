import styles from './BattleTV.module.css';

function createData(
  myusername: string,
  mycoinused: number,
  mydestruction: number,
  enemydestruction: number,
  enemycoinused: number,
  enemyusername: string,
) {
  return {
    myusername,
    mycoinused,
    mydestruction,
    enemydestruction,
    enemycoinused,
    enemyusername,
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
        <div className={styles.item} key={row.myusername}>
          <div
            className={styles.battlecard}
            style={{
              backgroundColor:
                row.mydestruction < row.enemydestruction
                  ? '#00bc62'
                  : '#BC1700',
            }}
          >
            <div
              className={styles.pic}
              style={{
                backgroundImage: `url("https://randomuser.me/api/portraits/women/81.jpg")`,
              }}
            ></div>
            <div className={styles.username}>{row.myusername}</div>
            <div className={styles.coinused}>{row.mycoinused}</div>
            <div className={styles.destruction}>{row.mydestruction}</div>
            <div className={styles.vs}>VS</div>
            <div className={styles.destruction}>{row.enemydestruction}</div>
            <div className={styles.coinused}>{row.enemycoinused}</div>
            <div className={styles.username}>{row.enemyusername}</div>
            <div
              className={styles.pic}
              style={{
                backgroundImage: `url("https://randomuser.me/api/portraits/women/81.jpg")`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
