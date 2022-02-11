import { RendererComponent, RendererUtils } from '@codecharacter-2022/renderer';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { button, text, withKnobs } from '@storybook/addon-knobs';

import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Renderer',
  component: RendererComponent,
  decorators: [withKnobs],
} as ComponentMeta<typeof RendererComponent>;

const Template: ComponentStory<typeof RendererComponent> = args => {
  const log = text('Log', '');
  const handler = () => RendererUtils.loadLog(log);
  button('Render Log', handler);
  return <RendererComponent {...args} />;
};

export const Renderer = Template.bind({});

Renderer.args = {};
