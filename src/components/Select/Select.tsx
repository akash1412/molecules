/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
// import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { Box, Select, useThemeUI, Button, jsx } from 'theme-ui';
import styled from '@emotion/styled';

interface Props {
	width?: string;

	color?: string;

	bgColor?: string;

	borderWidth?: string;

	borderColor?: string;

	borderStyle?: 'solid' | 'dotted';

	border?: string;

	placeholder?: string;
}

const CustomSelect: React.FC<Props> = () => {
	return (
		<Box as='select' sx={{ width: [null, null, '30%'], color: 'orange' }}>
			<option>chicken</option>
			<option>mutton</option>
			<option>biryani</option>
		</Box>
	);
};

export default CustomSelect;

const Container = styled(Select)`
	/* position: relative;
	color: orange; */
`;
// const SelectStyles = styled.select`
// 	width: 100%;

// 	border: 2px solid #560bad;
// 	background-color: #fffafa;
// 	color: #000;
// 	padding: 1em;
// 	border-radius: 0.5em;
// 	outline: none;
// 	cursor: pointer;
// 	font-size: 0.8em;
// 	font-weight: 550;

// 	/* remove the default dropdown icon */
// 	appearance: none;
// 	--webkit-appearance: none;
// 	--moz-appearance: none;
// 	text-indent: 1px;
// 	text-overflow: '';
// `;

// const IconContainer = styled.span`
// 	position: absolute;
// 	top: 0;
// 	right: 0;
// 	width: 2em;
// 	/* background-color: #000; */
// 	pointer-events: none;

// 	height: 100%;
// 	display: grid;
// 	place-items: center;
// `;
