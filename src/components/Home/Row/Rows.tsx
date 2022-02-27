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
    title: 'Build Your Army',
    description: 'Build Your Army',
  },
  {
    image: image,
    title: 'Build Your Army',
    description: 'Build Your Army',
  },
  {
    image: image,
    title: 'Build Your Army',
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
