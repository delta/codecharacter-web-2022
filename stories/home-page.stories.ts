import '../src/pages/Home.js';
import { TemplateResult, html } from 'lit';

export default {
  title: 'Home Page',
  component: 'home-page',
  argTypes: {
    title: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
}

const Template: Story<ArgTypes> = ({ title }: ArgTypes) => html`
  <home-page .title=${title ?? ''}></home-page>
`;

export const Home = Template.bind({});
Home.args = {
  title: 'Home Page',
};
