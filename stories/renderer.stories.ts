import '@codecharacter-2022/renderer';
import { TemplateResult, html } from 'lit';

export default {
  title: 'Renderer',
  component: 'cc-renderer',
  argTypes: {
    log: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  log?: string;
}

const Template: Story<ArgTypes> = ({ log }: ArgTypes) => html`
  <cc-renderer .log=${log ?? ''}></cc-renderer>
`;

export const Renderer = Template.bind({});
Renderer.args = {
  log: 'Test',
};
