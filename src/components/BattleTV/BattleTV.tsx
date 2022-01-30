import './styles.css';

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
    <div className="body">
      <div className="title">Battle TV</div>
      <div className="heading">
        <div className="column" />
        <div className="column" />
        <div className="column" />
        <div className="column">Destruction %</div>
        <div className="column">Coin Lost</div>
        <div className="column"></div>
        <div className="column">Coin Lost</div>
        <div className="column">Destruction %</div>
        <div className="column" />
        <div className="column" />
        <div className="column" />
      </div>
      {rows.map(row => (
        <div className="item" key={row.myusername}>
          <div
            className="battlecard"
            style={{
              backgroundColor:
                row.mydestruction < row.enemydestruction
                  ? '#00bc62'
                  : '#BC1700',
            }}
          >
            <div
              className="pic"
              style={{
                backgroundImage: `url("https://randomuser.me/api/portraits/women/81.jpg")`,
              }}
            ></div>
            <div className="username">{row.myusername}</div>
            <div className="coinused">{row.mycoinused}</div>
            <div className="destruction">{row.mydestruction}</div>
            <div className="vs">VS</div>
            <div className="destruction">{row.enemydestruction}</div>
            <div className="coinused">{row.enemycoinused}</div>
            <div className="username">{row.enemyusername}</div>
            <div
              className="pic"
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
