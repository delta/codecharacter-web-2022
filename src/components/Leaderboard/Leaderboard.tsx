import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

const Body = styled.body`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #242a3c;
`;

const Title = styled.h1`
  color: white;
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
];

export default function Leaderboard(): JSX.Element {
  return (
    <Body>
      <Title>Leaderboard</Title>
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
              <button>{row.fight}</button>
            </tr>
          ))}
        </tbody>
      </Table>
    </Body>
  );
}
