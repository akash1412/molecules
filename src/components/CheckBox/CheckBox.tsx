/** @jsxImportSource theme-ui */

import React from 'react';
import useCheckbox from './hooks/useCheckbox';
import {
	CheckboxContainer,
	HiddenCheckbox,
	Icon,
	StyledCheckbox,
} from './styles/Checkbox.styles';

interface CheckBoxProps {
	defaultIsChecked?: boolean;
	checked?: boolean;
	children: React.ReactNode;
	value?: any;
	spacing?: string;
	isDisabled?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckBoxProps> = props => {
	const {
		children,
		defaultIsChecked,
		value,
		checked,
		onChange,
		spacing = '0.4rem',
		isDisabled,
	} = props;

	const [isChecked, handleCheckboxChange] = useCheckbox(
		checked || defaultIsChecked,
		onChange
	);

	return (
		<label>
			<CheckboxContainer sx={{ userSelect: 'none' }}>
				<HiddenCheckbox
					type='checkbox'
					disabled={isDisabled}
					checked={isChecked}
					value={value}
					onChange={handleCheckboxChange}
				/>
				<StyledCheckbox checked={isChecked} isDisabled={isDisabled}>
					<Icon viewBox='0 0 24 24' isDisabled={isDisabled}>
						<polyline points='20 6 9 17 4 12' />
					</Icon>
				</StyledCheckbox>
				<span
					sx={{ marginLeft: spacing, color: isDisabled ? '#E2E8F0' : '#000' }}>
					{children}
				</span>
			</CheckboxContainer>
		</label>
	);
};

export default Checkbox;
