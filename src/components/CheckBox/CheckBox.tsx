import React, { FC } from 'react';

interface CheckBoxProps {
	children: React.ReactNode;
	value: any;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = props => {
	const { children, ...inputProps } = props;

	const [child] = React.Children.toArray(children);

	return (
		<label>
			<input type='checkbox' {...inputProps} />
			{child}
		</label>
	);
};

const CheckBoxLabel = (props: any) => {
	return <label>{props.label}</label>;
};

const CheckBoxInput = () => {
	return <input type='checkbox' />;
};

export default CheckBox;
