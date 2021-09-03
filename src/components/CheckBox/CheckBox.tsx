import React, { FC } from 'react';
import styled from 'styled-components';

interface CheckBoxProps {
	name: string;
	value: any;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
// accept label ,labelplacement,styleing freedom

const CheckBox: FC<CheckBoxProps> = ({ name, value, onChange, ...props }) => {
	return (
		<CheckBoxContainer>
			<CheckBoxInput
				type='checkbox'
				name={name}
				value={value}
				onChange={onChange}
			/>
			<CustomCheckBox></CustomCheckBox>
		</CheckBoxContainer>
	);
};

export default CheckBox;

const CheckBoxContainer = styled.div`
	position: relative;
	display: flex;
`;
const CheckBoxInput = styled.input`
	padding: 0;
	height: initial;
	width: initial;
	margin-bottom: 0;
	display: none;
	cursor: pointer;
`;

const CustomCheckBox = styled.span`
	position: absolute;
	top: 0px;
	left: 0px;
	height: 24px;
	width: 24px;
	background-color: transparent;
	border-radius: 5px;
	transition: all 0.3s ease-out;
	-webkit-transition: all 0.3s ease-out;
	-moz-transition: all 0.3s ease-out;
	-ms-transition: all 0.3s ease-out;
	-o-transition: all 0.3s ease-out;
	border: 2px solid #000;

	${CheckBoxContainer} {
		.checkbox-input:checked ~ & {
			background-color: #f01b1b;
			border-radius: 5px;
			-webkit-transform: rotate(0deg) scale(1);
			-ms-transform: rotate(0deg) scale(1);
			transform: rotate(0deg) scale(1);
			opacity: 1;
			border: 2px solid #16c03b;
		}
	}

	&::after {
		position: absolute;
		content: '';
		left: 12px;
		top: 12px;
		height: 0px;
		width: 0px;
		border-radius: 5px;
		border: solid #0098ff;
		border-width: 0 3px 3px 0;
		--webkit-transform: rotate(0deg) scale(0);
		--ms-transform: rotate(0deg) scale(0);
		transform: rotate(0deg) scale(0);
		opacity: 1;
	}
`;
