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
      ' Code Character is an online AI programming competition, where you write code for a real time strategy game.',
  },
  {
    image: image,
    title: 'Details',
    description: 'Date - 1st March, 2022 \n Prizes Worth - ₹ 20,000',
  },
  {
    image: image,
    title: 'Screenshots',
    description: 'Add your screenshots',
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
