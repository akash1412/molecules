/** @jsxImportSource theme-ui */
import React, { FC } from 'react';
import { jsx, css } from '@emotion/react';
import { BsCheck } from 'react-icons/bs';
import styled from '@emotion/styled';
import './style/checkbox.style.css';

interface CheckBoxProps {
	children: React.ReactNode;
	value: any;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	icon?: React.ReactNode;
}

const CustomCheckboxStyles = styled.div`
	display: flex;
`;

const CustomCheckBoxInput = styled.input<{ icon?: React.ReactNode }>`
	appearance: none;
	--webkit-appearance: none;
	width: 1em;
	height: 1em;
	border-radius: 0.15em;
	margin-right: 0.5em;
	border: 0.05em solid #000;
	cursor: pointer;

	&:checked {
		background-color: green;
		background-image: url(${props => `${props.icon}`});
	}
`;

const CustomLabel = styled.label`
	display: flex;
	cursor: pointer;
`;

{
	/* <input id='a' type='checkbox' {...inputProps} />
			<label htmlFor='a'>{props.children}</label> */
}
{
	/* </CustomCheckboxStyles> */
}
// <div css={CustomCheckboxStyles}>
// 	<input id='a' type='checkbox' {...inputProps} />
// 	<label htmlFor='a'>{props.children}</label>
// </div>
const CheckBox: React.FC<CheckBoxProps> = props => {
	const { children, icon, ...inputProps } = props;

	console.log(<BsCheck />);

	return (
		<CustomCheckboxStyles>
			<CustomCheckBoxInput
				type='checkbox'
				icon={icon || <BsCheck />}
				{...inputProps}
			/>
			<CustomLabel>{children}</CustomLabel>
		</CustomCheckboxStyles>
	);
};

const CheckBoxLabel = (props: any) => {
	return <label>{props.label}</label>;
};

const CheckBoxInput = () => {
	return <input type='checkbox' />;
};

export default CheckBox;
