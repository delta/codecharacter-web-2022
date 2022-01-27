import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

export default function BattleTV(): JSX.Element {
  return (
    <div className="body">
      <div className="title">Battle TV</div>
      <div className="heading">
        <div className="column">Coin Lost</div>
        <div className="column">Destruction %</div>
        <div className="column">Destruction %</div>
        <div className="column">Coin Lost</div>
      </div>
      <div className="battlecard">
        <div
          className="pic"
          style={{
            backgroundImage: `url("https://randomuser.me/api/portraits/women/81.jpg")`,
          }}
        ></div>
        <div className="username">Akash</div>
        <div className="coinused">8756</div>
        <div className="destruction">756</div>
        <div className="vs">VS</div>
        <div className="destruction">756</div>
        <div className="coinused">8756</div>
        <div className="username">Akash</div>
        <div
          className="pic"
          style={{
            backgroundImage: `url("https://randomuser.me/api/portraits/women/81.jpg")`,
          }}
        ></div>
      </div>
    </div>
  );
}
