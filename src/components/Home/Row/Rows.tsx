import Row from './Row';

import image from '../../../assets/discord.svg';
import screenshot1 from '../../../assets/screenshots/1.png';
import screenshot2 from '../../../assets/screenshots/2.png';
import screenshot3 from '../../../assets/screenshots/3.png';
import trophy from '../../../assets/home-trophy.png';
import styles from './Row.module.css';

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
      ' Code Character is a turn based AI strategy game. Think it as clash of clans but with a slight coding twist.',
      'Each player is provided with his army of bots to attack other player at the same time trying to defend his base by putting robust defences.',
      'Bots are controlled by the code which you write. You can write code in C++, Java as well as in Python.',
      'What are you waiting for, jump in to this world controlled by AI and get chances to win exciting prizes.',
    ],
  },
  {
    image: trophy,
    title: 'Details',
    description: [
      'Date - 1st March, 2022',
      'Mode - Online and individual participation',
      'Prizes Worth - ₹ 20,000',
      'Prizes would be decided by in-game leaderbaord',
    ],
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
      <div className={`${styles.descriptionContainer} m-5`}>
        <div className={`${styles.title} text-center`}>Screenshots</div>
        <div className={`${styles.screenshot} row m-5`}>
          <img
            className="col m-2 shadow p-3 mb-4 bg-white rounded"
            src={screenshot2}
          />
          <img
            className="col shadow p-3 mb-4 bg-white rounded"
            src={screenshot1}
          />
          <img
            className="col shadow p-3 mb-4 bg-white rounded"
            src={screenshot3}
          />
        </div>
      </div>
    </div>
  );
}
