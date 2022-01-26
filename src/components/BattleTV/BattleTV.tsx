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
    </div>
  );
}
