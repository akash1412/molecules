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
			multiple
			value={props.value}
			//@ts-ignore
			onChange={props.handleChange}
			sx={{
				width: [null, null, '30%'],

				p: '10px',
				border: '2px',
				borderStyle: 'solid',
				borderColor: theme.colors?.primary,
				'&:active': {
					border: 'none',
					outline: 'none',
				},
			}}>
			<Option selected disabled>
				{props.placeholder}
			</Option>
			{options?.map(option => (
				<Option value={option.value}>{option.label}</Option>
			))}
		</select>
	);
};

const Option = styled.option({
	border: 'none',
	padding: '10px',
});

export default CustomSelect;
