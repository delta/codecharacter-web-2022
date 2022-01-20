import Home from '../src/pages/Home';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Home Page',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = args => <Home {...args} />;

export const HomePage = Template.bind({});
HomePage.args = {};
