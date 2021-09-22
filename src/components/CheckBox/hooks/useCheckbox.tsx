import React, { useState } from 'react';

const useCheckbox = (
	checked?: boolean,
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
): [
	isChecked: boolean,
	handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void
] => {
	const [isChecked, setChecked] = useState(!!checked);

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(curState => !curState);

		if (onChange) onChange(event);
	};

	return [isChecked, handleCheckboxChange];
};
export default useCheckbox;
