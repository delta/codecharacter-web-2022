import Row from './Row';

import image from '../../../assets/discord.svg';

interface rowType {
  image: string;
  title: string;
  description: Array<string>;
}

const rowData: Array<rowType> = [
  {
    image: image,
    title: 'About',
    description: [
      ' Code Character is a turn based AI Strategy game. Think is clash of clans with a slight coding twist.',
      'Each player is provided with his army of bots to attack other player while trying to defend his base by putting robust defences.',
      'Bots are controlled by the code which you write. You can write code in C++, Java as well as Python.',
      'What are you waiting for, jump in to this world controlled by logic and AI and get chances to win exciting prizes.',
    ],
  },
  {
    image: image,
    title: 'Details',
    description: [
      'Date - 1st March, 2022',
      'Prizes Worth - ₹ 20,000',
      '1st - ',
      '2nd - ',
      '3rd - ',
      'Prizes would be decided by in-game leaderbaord',
    ],
  },
  {
    image: image,
    title: 'Screenshots',
    description: ['Add your screenshots', '1', '2', '3'],
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
