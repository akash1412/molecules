/** @jsxImportSource theme-ui */

import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Box, SelectProps, useThemeUI, jsx } from 'theme-ui';
import styled from '@emotion/styled';

interface Props extends SelectProps {
	value: any;
	options?: { label: string; value: any }[];
	handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	placeholder?: string;
}

const CustomSelect: React.FC<Props> = props => {
	const { theme } = useThemeUI();

	const { options } = props;

	return (
		<select
			value={props.value}
			onChange={props.handleChange}
			sx={{
				p: '10px',
				border: '2px',
				borderStyle: 'solid',
				borderColor: theme.colors?.primary,
			}}>
			<option selected disabled>
				{props.placeholder}
			</option>
			{options?.map(option => (
				<option value={option.value}>{option.label}</option>
			))}
		</select>
	);
};

const Option = styled.option({
	border: 'none',
	padding: '10px',
});

export default CustomSelect;
