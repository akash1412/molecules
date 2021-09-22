import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import Stack from '../../Stack/Stack';

import CheckBox from '../CheckBox';

export default {
	title: 'Example/Checkbox',
	component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

export const Basic = () => {
	return (
		<Stack>
			<CheckBox value='chekcbox1'>Checkbox 1</CheckBox>
			<CheckBox value='chekcbox2' isDisabled>
				Checkbox 2
			</CheckBox>
			<CheckBox value='chekcbox3'>Checkbox 3</CheckBox>
			<CheckBox value='chekcbox4'>Checkbox 4</CheckBox>
		</Stack>
	);
};

export const Controlled = () => {
	const [checked, setChecked] = useState(false);

	const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setChecked(e.target.checked);
	};

	return (
		<CheckBox
			checked={checked}
			value='controlled checkbox'
			onChange={handleCheckbox}>
			Controlled
		</CheckBox>
	);
};
