import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Calendar } from './Calendar';

export default {
	title: 'Example/Calendar',
	component: Calendar,
	argTypes: {},
} as ComponentMeta<typeof Calendar>;

export const Default = () => {
	return <Calendar />;
};
