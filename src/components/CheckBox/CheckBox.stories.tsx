import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheckBox from './CheckBox';

export default {
	title: 'Example/Checkbox',
	component: CheckBox,
	argTypes: {},
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = args => (
	<CheckBox {...args} />
);

export const Checkbox = Template.bind({});

Checkbox.args = {};
