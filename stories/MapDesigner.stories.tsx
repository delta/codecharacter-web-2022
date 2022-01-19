import { MapDesignerComponent } from '@codecharacter-2022/map-designer';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Map Designer',
  component: MapDesignerComponent,
} as ComponentMeta<typeof MapDesignerComponent>;

const Template: ComponentStory<typeof MapDesignerComponent> = args => (
  <MapDesignerComponent {...args} />
);

export const MapDesigner = Template.bind({});

MapDesigner.args = {};
