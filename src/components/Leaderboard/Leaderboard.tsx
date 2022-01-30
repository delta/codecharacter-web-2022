import './styles.css';

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
    <div className="body">
      <div className="header">
        <img className="header__icon" src="src/assets/trophy.png" />
        <h1 className="header__title">
          <span>Leaderboard</span>
        </h1>
      </div>
      <div className="center">
        <div className="top3">
          <div className="two item">
            <div className="pos">2</div>
            <div
              className="pic"
              style={{
                backgroundImage: `url("https://randomuser.me/api/portraits/men/34.jpg")`,
              }}
            ></div>
            <div className="name">Edgar Soto</div>
            <div className="score">6453 rating</div>
          </div>
          <div className="one item">
            <div className="pos">1</div>
            <div
              className="pic"
              style={{
                backgroundImage: `url("https://randomuser.me/api/portraits/men/31.jpg")`,
              }}
            ></div>
            <div className="name">Clifford James</div>
            <div className="score">6794 rating</div>
          </div>
          <div className="three item">
            <div className="pos">3</div>
            <div
              className="pic"
              style={{
                backgroundImage: `url("https://randomuser.me/api/portraits/women/91.jpg")`,
              }}
            ></div>
            <div className="name">Nevaeh Silva</div>
            <div className="score">6034 rating</div>
          </div>
        </div>
        <div className="list">
          <div className="item">
            <div
              className="pic"
              style={{
                backgroundImage: `url("https://randomuser.me/api/portraits/men/34.jpg")`,
              }}
            ></div>
            <div className="pos">#</div>
            <div className="name">Username</div>
            <div className="score">Ratings</div>
            <div className="score">Won</div>
            <div className="score">Tied</div>
            <div className="score">Lost</div>
          </div>
          {rows.map(row => (
            <div className="item" key={row.username}>
              <div className="pos">{row.rank}</div>
              <div
                className="pic"
                style={{
                  backgroundImage: `url("https://randomuser.me/api/portraits/women/81.jpg")`,
                }}
              ></div>
              <div className="name">{row.username}</div>
              <div className="score">{row.rating}</div>
              <div className="score">{row.won} win</div>
              <div className="score">{row.tied} tied</div>
              <div className="score">{row.lost} lost</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
