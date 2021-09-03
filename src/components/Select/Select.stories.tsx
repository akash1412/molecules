import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './Select';

export default {
	title: 'Example/select',
	component: Select,
	argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

// export const Derfault = Template.bind({});

export const select = Template.bind({});
