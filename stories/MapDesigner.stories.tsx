import {
  MapDesignerComponent,
  MapDesignerUtils,
} from '@codecharacter-2022/map-designer';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withKnobs, object, button } from '@storybook/addon-knobs';

import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Map Designer',
  component: MapDesignerComponent,
  decorators: [withKnobs],
} as ComponentMeta<typeof MapDesignerComponent>;

const Template: ComponentStory<typeof MapDesignerComponent> = args => {
  const initialMapData = [];
  for (let i = 0; i < 64; i++) {
    const row = [];
    for (let j = 0; j < 64; j++) {
      row.push(0);
    }
    initialMapData.push(row);
  }

  let mapData = object<Array<Array<number>>>('Map Data', initialMapData);
  const saveMapCallback = (newMap: Array<Array<number>>) => {
    alert(JSON.stringify(newMap));
    mapData = newMap;
  };

  const loadMap = () => {
    MapDesignerUtils.loadMap(mapData);
  };

  button('Load Map', loadMap);

  return <MapDesignerComponent saveMapCallback={saveMapCallback} {...args} />;
};

export const MapDesigner = Template.bind({});

MapDesigner.args = {};
