import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import './styles.css';

const TableStyle = styled.div`
  margin: 75px;
  text-decoration: underline;
  text-align: center;
`;

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
  createData(1, 'Akash1', 122, 6, 1, 1, 'fightakash'),
  createData(2, 'Akash2', 122, 5, 1, 1, 'fightakash'),
  createData(3, 'Akash3', 122, 4, 1, 1, 'fightakash'),
  createData(4, 'Akash4', 122, 3, 1, 1, 'fightakash'),
  createData(5, 'Akash5', 122, 2, 1, 1, 'fightakash'),
  createData(6, 'Akash6', 122, 1, 1, 1, 'fightakash'),
  createData(7, 'Akash7', 122, 1, 1, 1, 'fightakash'),
  createData(8, 'Akash8', 122, 1, 1, 1, 'fightakash'),
  createData(9, 'Akash9', 122, 1, 1, 1, 'fightakash'),
  createData(10, 'Akash10', 122, 1, 1, 1, 'fightakash'),
  createData(11, 'Akash11', 122, 1, 1, 1, 'fightakash'),
  createData(12, 'Akash12', 122, 1, 1, 1, 'fightakash'),
];

export default function Leaderboard(): JSX.Element {
  return (
    <div className="body">
      <div className="header">
        <img
          className="header__icon"
          src="https://user-images.githubusercontent.com/23297041/55285200-a24e9b00-538f-11e9-8990-d49a162824d1.png"
        />
        <h1 className="header__title">
          <span>Leaderboard</span>
        </h1>
      </div>
      <div className="Button" />
      <TableStyle>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Rating</th>
              <th>Won</th>
              <th>Tied</th>
              <th>Lost</th>
              <th>Play Against</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.username}>
                <td align="center">{row.rank}</td>
                <td align="center">{row.username}</td>
                <td align="center">{row.rating}</td>
                <td align="center">{row.won}</td>
                <td align="center">{row.lost}</td>
                <td align="center">{row.tied}</td>
                <td align="center">{row.fight}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableStyle>
    </div>
  );
}
