import '@codecharacter-2022/map-designer';
import { TemplateResult, html } from 'lit';

export default {
  title: 'Map Designer',
  component: 'cc-map-designer',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = () => html`
  <cc-map-designer></cc-map-designer>
`;

export const MapDesigner = Template.bind({});
MapDesigner.args = {};
