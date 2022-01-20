import { RendererComponent } from '@codecharacter-2022/renderer';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Renderer',
  component: RendererComponent,
} as ComponentMeta<typeof RendererComponent>;

const Template: ComponentStory<typeof RendererComponent> = args => (
  <RendererComponent {...args} />
);

export const Renderer = Template.bind({});

Renderer.args = {};
