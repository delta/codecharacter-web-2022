import Row from './Row';

import image from '../../../assets/discord.svg';

interface rowType {
  image: string;
  title: string;
  description: string;
}

const rowData: Array<rowType> = [
  {
    image: image,
    title: 'About',
    description:
      ' Code Character is an online AI programming competition, where you write C++ code for a real time strategy game. Test your code against yourself, against the computer, against your previous versions and then against everyone else on multiple maps!    Challenge others to improve your rating as you climb up the leaderboard! Integrated code editor and development environment View your AI play with different versions of itself and with existing AI Bots Live leaderboard, challenge anyone. Active discussion forum for any game related questions Extensive tutorials and documentation',
  },
  {
    image: image,
    title: 'Details',
    description: 'Date and prizes',
  },
  {
    image: image,
    title: 'Screenshots',
    description: 'Build Your Army',
  },
];

export default function Rows(): JSX.Element {
  return (
    <div>
      {rowData.map((data, index) => {
        return (
          <Row key={index} {...data} reverse={index % 2 == 0 ? false : true} />
        );
      })}
    </div>
  );
}
