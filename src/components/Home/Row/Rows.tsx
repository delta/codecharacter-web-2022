import Row from './Row';

import image from '../../../assets/discord.svg';

interface rowType {
  image: any;
  title: String;
  description: String;
}

let rowData: Array<rowType> = [
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
        return <Row {...data} reverse={index % 2 == 0 ? false : true} />;
      })}
    </div>
  );
}
