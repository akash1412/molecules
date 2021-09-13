/** @jsxImportSource theme-ui */
import React, { FC } from 'react';
import styled from '@emotion/styled';
import './style/checkbox.style.css';
interface CheckBoxProps {
	children: React.ReactNode;
	value: any;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = props => {
	const { children, ...inputProps } = props;

	return (
		<div className='checkbox-container'>
			<input sx={{ display: 'none' }} type='checkbox' {...inputProps} />
			<label>{props.children}</label>
		</div>
	);
};

const CustomCheckBox = styled.div({
	color: '#000',
	width: '5px',
	height: '5px',
});

const CheckBoxLabel = (props: any) => {
	return <label>{props.label}</label>;
};

const CheckBoxInput = () => {
	return <input type='checkbox' />;
};

export default CheckBox;
