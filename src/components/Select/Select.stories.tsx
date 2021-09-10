import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Select from './Select';

export default {
	title: 'Example/select',
	component: Select,
	argTypes: {},
} as ComponentMeta<typeof Select>;

// const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

// export const MoleculeSelect = Template.bind({});

// MoleculeSelect.args = {
// 	placeholder: 'This is a placeholder',
// 	options: [
// 		{ label: 'One', value: 1 },
// 		{ label: 'Two', value: 2 },
// 	],
// };

export const Basic = () => {
	const [seleced, setSelected] = React.useState('');

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		setSelected(value);
	};

	return (
		<Select
			value={seleced}
			placeholder='This is a placeholder'
			options={[
				{ label: 'One', value: 1 },
				{ label: 'Two', value: 2 },
			]}
			handleChange={handleChange}
		/>
	);
};
