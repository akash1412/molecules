/** @jsxImportSource theme-ui */
import React from 'react';

interface IBtnIcon {
	lefttIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	iconSpacing?: string;
}
const ButtonIcon: React.FC<IBtnIcon> = props => {
	const { lefttIcon, rightIcon, iconSpacing } = props;

	return (
		<div
			sx={{
				display: lefttIcon || rightIcon ? 'block' : 'none',
				order: rightIcon ? 1 : -1,
				marginLeft: rightIcon && iconSpacing,
				marginRight: lefttIcon && iconSpacing,
			}}>
			{lefttIcon || rightIcon}
		</div>
	);
};

export default ButtonIcon;
